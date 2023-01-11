import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  readonly URL: string = 'https://cinema-backend-group1.azurewebsites.net/user/all';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ApiKey MVVYeGwzOEJ2WDF0QmJua3hhYWw6Z2piVVFoMUFRT0NxS2k5RlhXdzdPQQ=='
    })
  };

  inputEmail: any;
  inputPasswort: any;

  userEmail: any = ["peter@test.de", "test@peter.de"];
  userPasswords: any = ["1","2"];

  currentUserEmail: any;
  currentUserPasswort: any;

  logIn: any;

  constructor(private http: HttpClient, private router: Router) { }


  sendGet(): Observable<any> {
    return this.http.get<any>(this.URL, this.httpOptions);
  }
  
  getPost() {    
    this.sendGet().subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        this.userEmail = data[i].email;
        this.userPasswords = data[i].password;
      }
    });
  }

  selectChangeEmail (event: any) {
    //update the ui
    this.inputEmail = event.target.value;
    
  }

  selectChangePasswort (event: any) {
    //update the ui
    this.inputPasswort = event.target.value;
    
  }

  checkPassword() {
    for(let i = 0; i < this.userEmail.length; i++) {
      if(this.inputEmail == this.userEmail[i]) {
        this.currentUserEmail = this.inputEmail;
        console.log("userEmail: " + this.userEmail[i]);
        console.log("inputEmail: " + this.inputEmail);
        console.log("currentUserEmail: " + this.currentUserEmail );
        console.log(this.logIn);
        if(this.inputPasswort == this.userPasswords[i]) {
            this.currentUserPasswort = this.inputPasswort;
            console.log("userPasswort: " + this.userPasswords[i]);
            console.log("inputPasswort: " + this.inputPasswort);
            console.log("currentUserPassword: " + this.currentUserPasswort );
            this.navigate();
            this.logIn = true;
            console.log(this.logIn);
        } else {
            this.logIn = false;
        }
      } else {
        this.logIn = false;
      }
    }
  }

  navigate() {
  
    this.router.navigate(['/home-logged-in'], {state: {data: {
     
    }}});
    
  }

  ngOnInit(): void {
  }

}
