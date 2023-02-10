import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

readonly URL: string = 'https://cinema-backend-group1.azurewebsites.net/user/all';

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'ApiKey MVVYeGwzOEJ2WDF0QmJua3hhYWw6Z2piVVFoMUFRT0NxS2k5RlhXdzdPQQ=='
  })
};


userID: any;
userName: any;
 logIn: boolean = false;

 currentUserEmail: any;
 private routeSub: Subscription = new Subscription();
  constructor(private router: Router, private http: HttpClient,private route: ActivatedRoute) {
    this.getPost();
    

   }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.userID = params['id'];
    });
  }


  sendGet(): Observable<any> {
    return this.http.get<any>(this.URL, this.httpOptions);
  }

  getPost() {
    this.sendGet().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === parseInt(this.userID)) {
          this.logIn = true;
          this.userName = data[i].firstName;
          break;
        }
      }
    });
  }
  navigate() {
  
    this.router.navigate(['/log-in'], {state: {data: {
      
    }}});
    
  }

  navigateToProgrammTicket() {
    this.router.navigate(['/programm-ticket'], {state: {data: {
      
    }}});
  }

  navigateHome() {
  this.logIn = false;
    this.router.navigate(['/home'], {state: {data: {
      
    }}});
    
  }

}
