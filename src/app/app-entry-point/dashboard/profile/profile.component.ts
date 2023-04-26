import { Component, OnInit, ViewChild } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {User} from "../../../../shared/models/user.model";
import {UserService} from "../../../../shared/services/user.service";
import {Observable, Subscriber} from "rxjs";
import { Form } from 'src/shared/generic/models/Form.model';
import { environment } from 'src/environments/environment';
import { FormComponent } from 'src/shared/generic/form/form/form.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileJson: string | null = null;
  id:any
  currentUser: User = new User();
  fileName!: string;
  contentType!: string;
  content!: string;
user : User = new User()
  constructor(public oidcSecurityService: OidcSecurityService, public userService: UserService) {
    this.oidcSecurityService.checkAuth()
    .subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
     this.id = userData.sub
    });
  }
  @ViewChild(FormComponent) childComponent: FormComponent;

  ngOnInit() {
    // const userId = this.route.snapshot.paramMap.get('userId');

    this.userService.getUser(this.id).subscribe(user => {
      this.currentUser = user;
      this.user=user;
      console.log(this.user)
    });
  }
DivEditshow : boolean = false;
showeditdiv(){
  this.DivEditshow = !this.DivEditshow;
  this.forms.Object = this.user
  this.forms.endpoint = `${environment.baseUrl}/api/Users/profile/`+this.user.id

}

DivEditPassword : boolean = false;
showeditdivPassword(){
  this.DivEditPassword = !this.DivEditPassword;
  this.formsPassword.Object = this.user
  this.formsPassword.endpoint = `${environment.baseUrl}/api/Users/password/`+this.user.id

}

  onFileSelected($event: any) {
    const target = $event.target;
    const file: File = target.files[0];
    this.convertToBase64(file)
    console.log(file)
    this.fileName = file.name;
    this.contentType = file.type;
  }

  private convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) =>
      this.readFile(file, subscriber));
    observable.subscribe((d) => {
      this.content = d;
    })
  }

  private readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    }
    filereader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    }
  }

  uploadFile() {
    const data = {fileName: this.fileName, contentType: this.contentType, content: this.content}
    console.log(data)
    this.userService.updateImage(this.currentUser.id, data).subscribe(updatedImage => {
      console.log('Image updated:', updatedImage);
    });
    this.userService.getUser(this.currentUser.id).subscribe(user => {
      this.currentUser = user;
    });
  }

  onFormSubmit(): void {
    this.childComponent.submitForm();
  }
  afterSubmitResponse(returnedValue: any) {

  }
 
  forms: Form = {
    endpoint: `${environment.baseUrl}/api/Users/profile/`,
    Object: this.user,
    metaData: `${environment.baseUrl}/meta/EditUserInfoCommand`,
  };
 
  formsPassword: Form = {
    endpoint: `${environment.baseUrl}/api/Users/password/`,
    Object: this.user,
    metaData: `${environment.baseUrl}/meta/EditPasswordCommand`,
  };

}
