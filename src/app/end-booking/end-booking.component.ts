import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-booking',
  templateUrl: './end-booking.component.html',
  styleUrls: ['./end-booking.component.scss']
})
export class EndBookingComponent implements OnInit {

  selectedSeats: any = [];

  constructor() {

    this.selectedSeats = history.state.data.selected;

    console.log(this.selectedSeats);
   }

   
  ngOnInit(): void {
  }

}
