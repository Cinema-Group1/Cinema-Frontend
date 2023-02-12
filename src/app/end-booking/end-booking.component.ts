import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-booking',
  templateUrl: './end-booking.component.html',
  styleUrls: ['./end-booking.component.scss']
})
export class EndBookingComponent implements OnInit {

  selectedSeats: any = [];
  paymentCheck: any;

  constructor() {

    this.selectedSeats = history.state.data.selected;
    this.paymentCheck = history.state.data.paymentCheck;

    console.log(this.selectedSeats);
   }

   
  ngOnInit(): void {
  }

}
