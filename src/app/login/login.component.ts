import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  btnText = "Login";
  public userName:string;
  public passWord:string;

  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  formSubmiited() {
    console.log(this.userName);
    console.log(this.passWord);
    if(this.userName=='dineshkumar13506@gmail.com' && this.passWord =='1234') {
      this.route.navigate(['home']);
    }
    else {
      this.route.navigate(['loginerror']);
    }
    }
  }


