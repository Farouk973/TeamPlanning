import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {Observable, Subscriber} from "rxjs";
import {UserService} from "../../../../shared/services/user.service";
import {User} from "../../../../shared/models/user.model";
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileJson: string | null = null;


  currentUser! : User;
  fileName! : string;
  contentType! : string;
  content! : string;
  constructor(public oidcSecurityService: OidcSecurityService , public userService: UserService ,public location: Location) {}

  ngOnInit() {
   // const userId = this.route.snapshot.paramMap.get('userId');
    const userId="6404c6f3f03762e5b9456b92"
    this.userService.getUser(userId).subscribe(user => {
      this.currentUser = user;
    });


  }



  onFileSelected($event: any) {
    const target =$event.target;
    const file: File = target.files[0];
    this.convertToBase64(file)
    this.fileName=file.name;
    this.contentType=file.type;
  }

  private convertToBase64(file: File) {
    const observable = new Observable((subscriber:Subscriber<any>) =>
    this.readFile(file,subscriber));
    observable.subscribe((d)=>{
      this.content= d;
    })
  }

  private readFile(file: File, subscriber: Subscriber<any>) {
    const filereader =new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () =>{
      subscriber.next(filereader.result);
      subscriber.complete();
    }
    filereader.onerror = () =>{
      subscriber.error();
      subscriber.complete();
    }
  }
  uploadFile() {
    const data = {fileName :this.fileName, contentType: this.contentType, content : this.content}
    console.log(data)
    this.userService.updateImage(this.currentUser.id,data).subscribe(updatedImage => {
      console.log('Image updated:', updatedImage);
    });
    this.userService.getUser(this.currentUser.id).subscribe(user => {
      this.currentUser = user;
    });

  }
}
