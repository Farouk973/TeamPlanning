import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Form } from '../../models/Form.model';
import { SharedServices } from '../../SharedServices.service';
import { ColumnMetadata } from '../form.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private formService: SharedServices) {}

  form = new FormGroup({});
  @Input() formData: Form;
  @Output() myEvent = new EventEmitter<any>();
  @ViewChild('buttonToSubmit') buttonToSubmit: ElementRef;
  fields: ColumnMetadata[];
  ref?;
  ref2?;
  // formGroup = new FormGroup({});
  ngOnInit(): void {
    this.formService.getMetadata(this.formData.metaData).subscribe((data) => {
      this.fields = data;
      this.fields.forEach((element) => {
        if (element.description) {
          this.ref = this.ReferenceExistances(element.description);
        }
        if (element.type === 'array') {
          this.ref2 = this.ReferenceExistance(element.item);
        }
        this.createForm();
      });
    });
  }

  createForm() {
    for (const field of this.fields) {
      let control = new FormControl('', []);
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

      this.form.addControl(field.name, control);
    }
  }
  async submitAsync() {
    this.buttonToSubmit.nativeElement.click();

    return this.form.valid;
  }
  submitForm() {
    this.submitAsync().then((isValid) => {
      console.log(isValid);
      console.log(this.form.value)
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
                this.myEvent.emit({error:error})
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
              (error) => {}
            );
        }
      }
    });
  }
  toppings = new FormControl('');
  ReferenceExistances(desc :string) :any
  {
  this.formService.getData("https://localhost:44312/api/"+desc)
  .subscribe({
    next: (data) => {
      this.ref = data;
      console.log(data)
    },
  })
  }
  ReferenceExistance(desc :string) :any
  {
  this.formService.getData("https://localhost:44312/api/"+desc)
  .subscribe({
    next: (data) => {
      this.ref2 = data;
      console.log(data)
    },
  })
  }
}
