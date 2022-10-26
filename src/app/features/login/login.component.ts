import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginValue={
      email : "raju@gmail.com",
      password: 1234
   };

  constructor() { }

  ngOnInit(): void {
  }

  login(form : NgForm, event:any)
  {
    console.log(event);  
    console.log(form);  
  }

  onEmailChange(event:any)
  {
    console.log(event);  
  }

}
