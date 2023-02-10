import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  readonly URL: string = 'https://cinema-backend-group1.azurewebsites.net/user/add';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ApiKey MVVYeGwzOEJ2WDF0QmJua3hhYWw6Z2piVVFoMUFRT0NxS2k5RlhXdzdPQQ=='
    })
  };

  inputFirstName: any;
  inputLastName: any;
  checkFirstName: boolean = true;
  checkLastName: boolean = true;

  errorMessage: any;

  inputPassword: any = "";
  inputRepeatPassword: any = "";
  passwordComp: boolean = true;
  passwordErrorMessage: any;

  body: any;

  checkbox: any;
  redCheck: boolean = false;

  checkPass: boolean = false;

  eEmail: any;

  constructor(private http: HttpClient, private router: Router) { 
    this.sendGet();
  }
  test() {
    console.log(this.sendGet());
  }
  
  getPost() {    
    this.sendGet().subscribe(data => {
    });
  }

  getPassword (event: any) {
    this.inputPassword = event.target.value;
  }
  getEmail (event: any) {
    this.eEmail = event.target.value;
  }

  getFirstName (event: any) {
    this.inputFirstName = event.target.value;
  }

  getLastName (event: any) {
    this.inputLastName = event.target.value;
  }

  getRepeatPassword (event: any) {
    this.inputRepeatPassword = event.target.value;
  }

  getCheckBoxValue (event: any) {
    this.checkbox = event.target.value;
    console.log(this.checkbox);
  }


   
  sendGet(): Observable<any> {
    this.body = {
        "firstName": this.inputFirstName, 
           "lastName": this.inputLastName,  
             "dob": "2022-12-12",   
              "eMail": this.eEmail, 
                 "password": this.inputPassword,
                     "zipCode": "12345",    
                     "city": "test2",   
                      "street": "test2", 
                         "number": "test2",
                             "additionalInformation": "test2"
                            };

    console.log(this.body);
    return this.http.post<any>(this.URL, this.body, this.httpOptions)
  }

    post() {
      this.sendGet().subscribe(data => {
  
      });
    }
  comparePassword() {
    if(!(this.inputPassword.length >= 5)) {
      this.passwordErrorMessage = "Dein Password muss länger als 5 Zeichen sein."
      this.passwordComp = false;
      this.inputPassword = "";
      return false;
    } else {

      if(this.inputPassword == this.inputRepeatPassword) {
        console.log("Password stimmt");
        
        return true;
      } else {
        console.log("Password stimmt nicht");
        // this.inputRepeatPassword = "";
        // this.inputPassword = "";
        this.passwordErrorMessage = "Die Passwörter stimmen nicht überein.";
        this.passwordComp = false;
      }
    }
        return false;
      
    
    }

    checkPassword() {
 

        if(!(this.inputFirstName.length > 1)) {
          this.errorMessage = "Dein Name muss mehr als 1 Buchstabe besitzen!";
          this.checkFirstName = false;
          return false;
        } else if(!(this.inputLastName.length > 1)) {
          this.errorMessage = "Dein Name muss mehr als 1 Buchtabe besitzen!";
          this.checkLastName = false;
          return false;
        } else if(this.checkbox) {
          this.redCheck = false;
          
        } else {
          this.redCheck = true;
          return false;
        } 

        if(this.comparePassword() && this.checkFirstName && this.checkLastName && this.redCheck == false) {
          this.checkPass = true;
          return true;
        }

        return false;
      
    }

    navigate() {
  if(this.checkPass) {

    this.router.navigate(['/home'], {state: {data: {
      
    }}});
  }
      
    }

  ngOnInit(): void {
  }

}
