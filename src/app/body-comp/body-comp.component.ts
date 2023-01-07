import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';

@Component({
  selector: 'app-body-comp',
  templateUrl: './body-comp.component.html',
  styleUrls: ['./body-comp.component.scss']
})
export class BodyCompComponent implements OnInit {
  readonly URL: string = 'https://cinema-backend-group1.azurewebsites.net/movie/all';

  datas = new Array<any>();
  testArray = [];

  test: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/xml',
      'Authorization': 'ApiKey MVVYeGwzOEJ2WDF0QmJua3hhYWw6Z2piVVFoMUFRT0NxS2k5RlhXdzdPQQ=='
    })
  };

  constructor(private http: HttpClient) { 
    
   this.getPost();
      
}

sendGet(): Observable<any> {
  return this.http.get<any>(this.URL, this.httpOptions);
}

getPost() {    
  this.sendGet().subscribe(data => {
    console.log("Test 1:");
    this.test = data[0];
  });
}

  ngOnInit(): void {
  }

}
