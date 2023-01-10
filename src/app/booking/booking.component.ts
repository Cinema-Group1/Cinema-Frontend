import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { BodyCompComponent } from '../body-comp/body-comp.component';
import { CinemaSeatComponent } from '../cinema-seat/cinema-seat.component';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers: [PopUpComponent]
})

export class BookingComponent implements OnInit {
  
  tarif = [{
    "bezeichnung": "Erwachsenen",
    "preis": "13.49€"
  }, {
    "bezeichnung": "Student",
    "preis": "8.99€"
  }, {
    "bezeichnung": "Kinder",
    "preis": "4.99€"
  }];

  price: any;

  selectedTarif: any;

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

  getPrice() {
    
    for(let i = 0; i < this.tarif.length; i++) {

      if(this.selectedTarif == this.tarif[i].bezeichnung) {
        this.price = this.tarif[i].preis;
      }
      }
      return this.price;
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedTarif = event.target.value;
    console.log(this.selectedTarif.preis);
  }

  ngOnInit(): void {
    
  }

}
