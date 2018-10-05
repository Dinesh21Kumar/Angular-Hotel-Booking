import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api-service.service';
import { CustomerService } from '../customer-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  btnText = "Login";
  userName = 'dinesh@test';
  passWord = '1234';


  constructor(private api: ApiService, private customer: CustomerService, private route: Router) { }

  ngOnInit() {
  }

  formSubmiited() {
    this.api.login(
      this.userName,
      this.passWord
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            this.route.navigate(['home']);
          }
        },
        r => {
          alert(r.error.error);
        });
  }
}


