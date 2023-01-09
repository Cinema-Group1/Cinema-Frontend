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
  
  message: any;

  seats: any = [];

  
  filmTitle: any;
  filmDescription: any;
  filmPath: any;

  filmEvent = [];

  constructor() { 
  
    
    

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

 

  ngOnInit(): void {
    
  }

}
