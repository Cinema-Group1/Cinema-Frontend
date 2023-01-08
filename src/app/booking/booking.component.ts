import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { BodyCompComponent } from '../body-comp/body-comp.component';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers: [PopUpComponent]
})
export class BookingComponent implements OnInit {
  readonly URL: string = 'https://cinema-backend-group1.azurewebsites.net/seat/all';

  message: any;

  seats: any = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ApiKey MVVYeGwzOEJ2WDF0QmJua3hhYWw6Z2piVVFoMUFRT0NxS2k5RlhXdzdPQQ=='
    })
  };
  filmTitle: any;
  filmDescription: any;
  filmPath: any;

  filmEvent = [];

  constructor(private http: HttpClient) { 
    this.getPost();
    
    

    for(let i = 0; i < history.state.data.filmArray.length; i++) {
      if(history.state.data.filmArray[i].id == history.state.data.filmid) {
        this.filmPath = history.state.data.filmArray[i].path;
        this.filmTitle = history.state.data.filmArray[i].title;
        this.filmDescription = history.state.data.filmArray[i].description;
        this.filmEvent = history.state.data.filmArray[i].eventTime;
        
      }
    }

    console.log(this.filmTitle );
    
  }

  sendGet(): Observable<any> {
    return this.http.get<any>(this.URL, this.httpOptions);
  }
  
  getPost() {    
    this.sendGet().subscribe(data => {
    
      for(let i = 0; i < data.length; i++) {
        this.seats[i] = data[i];
      }

    });
  }

  ngOnInit(): void {
    
  }

}
