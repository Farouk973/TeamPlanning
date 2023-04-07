import {HttpClient} from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, tap, switchMap, finalize, distinctUntilChanged, filter} from 'rxjs/operators';
import {Form} from '../../models/Form.model';
import {SharedServices} from '../../SharedServices.service';
import {ColumnMetadata} from '../form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private formService: SharedServices, private http: HttpClient) {
  }

  form = new FormGroup({});
  @Input() formData: Form;
  @Output() myEvent = new EventEmitter<any>();
  @ViewChild('buttonToSubmit') buttonToSubmit: ElementRef;

  @Input() set submitType(type: string) {
    this.submitByType(type);
  }

  fields: ColumnMetadata[];
  map = new Map();
  searchDataCtrl = new FormControl();
  filteredData: any;
  isLoading = false;
  errorMsg!: string;
  inputName: string = "";
  minLengthTerm = 3;
  selectedMovieData: any = "";
  // formGroup = new FormGroup({});
  x: any[]
  public isAllSelected: boolean;

  valueControl = new FormControl();

  public removeOption(optionToRemove: any): void {
    this.formData.Object['permissions'].setValue(this.formData.Object['permissions'].value.filter(option => optionToRemove.id !== option.id));
  }

  ngOnInit(): void {

    this.formService.getMetadata(this.formData.metaData).subscribe((data) => {
      this.fields = data;
      this.fields.forEach((element) => {

        if (element.type === 'array') {
          this.ReferenceExistances(element.name);
        }
        this.createForm();
      });
    });

    this.searchDataCtrl.valueChanges
      .pipe(
        filter(res => {
          return res !== null && res.length >= this.minLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(1000),
        tap(() => {
          this.errorMsg = "";
          this.filteredData = [];
          this.isLoading = true;
        }),
        switchMap(value => this.http.get('https://localhost:44312/api/' + this.inputName + '/' + value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe((data: any) => {
        if (data == null) {
          this.errorMsg = data['Error'];
          this.filteredData = [];
        } else {
          this.errorMsg = "";
          this.filteredData = data;
        }
      });

  }

  onSelected() {
    this.selectedMovieData = this.selectedMovieData;
  }

  onselectData(value: string) {
    this.inputName = value;
  }

  clearSelection() {
    this.selectedMovieData = "";
    this.filteredData = [];
  }

  createForm() {

    for (const field of this.fields) {
      let control = new FormControl();
      let validators = [];
      if (field.type === 'string') {
        if (field.maxLength) {
          validators.push(Validators.maxLength(field.maxLength));
        }
        if (field.minLength) {
          validators.push(Validators.minLength(field.minLength));
        }
        validators.push(Validators.required);
      } else if (field.type === 'number' || field.type === 'integer') {
        if (field.maximum) {
          validators.push(Validators.max(field.maximum));
        }
        if (field.minimum) {
          validators.push(Validators.min(field.minimum));
        }
        if (field.references) {
          validators.push(Validators.required);
        }
      }
      if (validators.length > 0) {
        control.setValidators(Validators.compose(validators));
      }
      if (
        this.formData.Object &&
        this.formData.Object.hasOwnProperty(field.name)
      ) {
        control.setValue(this.formData.Object[field.name]); // set the initial value from the data object

      }
      if (field.type === 'array') {

        const ids: string[] = this.formData.Object[field.name].map((object) => object.id);
        control.setValue(ids); // set the initial value from the data object


      }

      this.form.addControl(field.name, control);
      console.log(this.form.controls['role'])
    }
  }

  async submitAsync() {
    this.buttonToSubmit.nativeElement.click();

    return this.form.valid;
  }

  submitByType(type: string) {
    this.submitAsync().then((isValid) => {
      console.log(isValid);
      console.log(this.form.value);
      console.log(type);
      if (isValid) {
        if (this.formData.Object && type == "UPDATE") {
          this.formService
            .updateRow(this.formData.endpoint, this.form.value)
            .subscribe(
              (response) => {
                if (response.status === 200) {
                  this.myEvent.emit({
                    formValue: this.form.value,
                    response: response,
                  });
                }
              },
              (error) => {
                this.myEvent.emit({error: error})
              }
            );
        }
        if (!this.formData.Object && type == "CREATE") {
          this.formService.addRow(this.formData.endpoint, this.form.value).subscribe({
            next: (response) => {
              console.log('response',response)
              this.myEvent.emit({formValue: this.form.value, response: response,});
            }, error: (error) => {
              this.myEvent.emit({error: error})
            }, complete: () => {
              console.log('Row added successfully.');
            },
          });
          /*this.formService
            .addRow(this.formData.endpoint, this.form.value)
            .subscribe(
              (response) => {
                this.myEvent.emit({
                  formValue: this.form.value,
                  response: response,
                });
              },
              (error) => {
              }
            );*/
        }
      }
    });
  }

  submitForm() {
    this.submitAsync().then((isValid) => {
      if (isValid) {
        if (this.formData.Object) {
          this.formService
            .updateRow(this.formData.endpoint, this.form.value)
            .subscribe(
              (response) => {
                if (response.status === 200) {
                  this.myEvent.emit({
                    formValue: this.form.value,
                    response: response,
                  });
                }
              },
              (error) => {
                this.myEvent.emit({error: error})
              }
            );
        }
        if (!this.formData.Object) {
          this.formService
            .addRow(this.formData.endpoint, this.form.value)
            .subscribe(
              (response) => {
                this.myEvent.emit({
                  formValue: this.form.value,
                  response: response,
                });
              },
              (error) => {
              }
            );
        }
      }
    });
  }

  ReferenceExistances(desc: string): any {
    this.formService.getData("https://localhost:44312/api/" + desc)
      .subscribe({
        next: (data) => {
          this.map.set(desc, data);

        },
      })
  }


}
