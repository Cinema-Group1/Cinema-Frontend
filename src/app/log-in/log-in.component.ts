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
  readonly URL2: string = 'https://cinema-backend-group1.azurewebsites.net/user/validateLogin'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ApiKey MVVYeGwzOEJ2WDF0QmJua3hhYWw6Z2piVVFoMUFRT0NxS2k5RlhXdzdPQQ=='
    })
  };

  body: any;
  inputEmail: string = "";
  inputPasswort: any;

  userEmail: any = [];
  userPasswords: any = [];
  userID: any = [];

  currentUserEmail: any;
  currentUserPasswort: any;

  currentUserID: any;

  validPassword: any;
  validAccount: any;

  logIn: boolean = false;

  errorMessage: any;

  constructor(private http: HttpClient, private router: Router) {
    
   }


  sendGet(): Observable<any> {
    return this.http.get<any>(this.URL, this.httpOptions);
  }
  
  getPost() {    
    
    this.sendGet().subscribe(data => {

     
      for(let i = 0; i < data.length; i++) {
        if(this.inputEmail.localeCompare(data[i].eEmail) === 0) {
          this.currentUserID = data[i].id
          console.log(this.currentUserID);
          this.router.navigate(['/home', this.currentUserID]);
        }
        
      }
    });

  }

  getValidate(): Observable<any> {
    console.log(this.inputEmail);
    console.log(this.inputPasswort);
    this.body = {
      "eMail": this.inputEmail,
      "pwd": this.inputPasswort
    };
    return this.http.post<any>(this.URL2, this.body, this.httpOptions);
  }

  getValidateFunc() {
    this.getValidate().subscribe(data => {
      this.validPassword = data;
      this.validAccount = true;
      console.log(this.currentUserID);
      
    }, error => {
      if(error.status == "404" || error.status == "403") {
        this.errorMessage = "Password oder Email ist falsch!"
      } else {
        this.errorMessage = error.status + " " + error.statusText;
        
      }

      this.validAccount = false;
      console.log(error);
    });
  }

    navigate() {
      console.log(this.currentUserID);
      this.router.navigate(['/home', this.currentUserID]);
      
    }

    finalCheck() {
      this.getValidateFunc();
      this.getPost();
     
     
    }

  selectChangeEmail (event: any) {
    //update the ui
    this.inputEmail = event.target.value;
    
  }

  selectChangePasswort (event: any) {
    //update the ui
    this.inputPasswort = event.target.value;
    
  }

  
  
  navigateToRegister() {
  
    this.router.navigate(['/register'], {state: {data: {
     
    }}});
    
  }

  ngOnInit(): void {
  }

}
