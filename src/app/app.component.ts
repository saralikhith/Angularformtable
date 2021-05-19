import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {user} from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:user={username:"",dob:" ",email:" "}
 tostore:user[]=[];
 
  getData(){

    console.log(this.data)
    this.tostore.push(this.data)


   this.data={username:"",dob:" ",email:" "}
 }



 

}

