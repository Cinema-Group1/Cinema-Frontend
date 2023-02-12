import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-cinema-seat',
  templateUrl: './cinema-seat.component.html',
  styleUrls: ['./cinema-seat.component.scss']
})
export class CinemaSeatComponent implements OnInit {

  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ApiKey MVVYeGwzOEJ2WDF0QmJua3hhYWw6Z2piVVFoMUFRT0NxS2k5RlhXdzdPQQ=='
    })
  };

  body: any = {};
  seats: any = [];

  readonly URLShowing: string = 'https://cinema-backend-group1.azurewebsites.net/seat/showing:' 
  readonly URLBooking: string = 'https://cinema-backend-group1.azurewebsites.net/booking/add'
  readonly URLUser: string = 'https://cinema-backend-group1.azurewebsites.net/user/all'
  

  seatsN: any = [];

  seatsNumber: any = [];
  seatsLine: any = [];
  seatsL: any = [];
  seatsline: any = [];

  boockedSeats: any = [];
  userIds: any = [];

  filmId: any;
  userId: any;
  
  paymentCheck: boolean = false;
   

  private routeSub: Subscription = new Subscription;
  URLReservedSeats: any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {

    this.routeSub = this.route.params.subscribe(params => {
      this.filmId = params['id'];
      this.userId = params['userId'];
    })
    this.getPost();
  }

  setPayment() {
    if(this.paymentCheck == false) {
      
      this.paymentCheck = true;
    } else {
      this.paymentCheck = false;
    }
  }
  
  sendGetShowing(): Observable<any> {
    return this.http.get<any>(this.URLShowing + this.filmId , this.httpOptions);
  }
  sendGetSeatingPlan(): Observable<any> {
    return this.http.get<any>(this.URLShowing, this.httpOptions);
  }


  getPost() {
    this.sendGetShowing().subscribe(data => {
      this.seats = data;
      this.sortAlgString(this.seats);
      this.sortAlg(this.seats);
      // this.boockedSeats[i] = "" + this.seatsLine[i]+ this.seatsNumber[i]


      console.log("J l c:  " + this.seatsN);
    });
  }

  sortAlg(seats: any[]) {

    for (let i = 0; i < seats.length; i++) {

      if (!this.seatsNumber.includes(seats[i].seatNumber.number)) {

        this.seatsNumber.push(seats[i].seatNumber.number)
        
      }
    }
    this.seatsNumber.sort();
    
  }



  sortAlgString(seats: any[]) {

    for (let i = 0; i < seats.length; i++) {

      if (!this.seatsLine.includes(seats[i].seatNumber.line)) {

        this.seatsLine.push(seats[i].seatNumber.line)
      }
    }
    this.seatsLine.sort();
    
  }

  navigate() {

    this.router.navigate(['/end-booking'], {
      state: {
        data: {
          selected: this.selected,
          paymentCheck: this.paymentCheck
        }
      }
    });

  }

  // A4
  sendPostBody() {
    
    this.body = {
      "userId": this.userId,
      "showingId": this.filmId,
      "seatNumbers": this.selected          
    }
  return this.http.put<any>(this.URLBooking, this.body, this.httpOptions)

  }

  sendPost(){
    this.sendPostBody().subscribe({});
  }

  getAllUserIds(){

    

    this.http.get<any>(this.URLUser, this.httpOptions).subscribe(data =>{

      for(let i = 0 ;i<data.length; i++){

        this.userIds.push(data[i].id)
      }
      this.getAllReservedSeats()
    }
      
      )

  }

  getAllReservedSeats(){

    

    for(let i = 0; i < this.userIds.length; i++){

      this.URLReservedSeats = "https://cinema-backend-group1.azurewebsites.net/booking/user:" + this.userIds[i]
      this.http.get<any>(this.URLReservedSeats, this.httpOptions).subscribe(data =>{

        for(let i = 0; i<data.length;i++){

          
          console.log(data[i].showing.id + " " + this.filmId);
          if(data[i].showing.id == this.filmId){

            console.log(data[i].seats)

            for(let j = 0; j<data[i].seats.length;j++){

              this.reserved.push(data[i].seats[j].seatNumber.line + data[i].seats[j].seatNumber.number.toString());
            }
          }
        }
        console.log(this.reserved);

      },
      )

    }

    


  }

  ngOnInit(): void {
    
    this.getAllUserIds();



  }

  

  columns: number[] = this.seatsN;
  rows: string[] = this.seatsline;

  reserved: string[] = [];
  selected: string[] = [];

  click = true;
  color = 'white';


  getRowsOfCinema = () => {
  }

  seatClicked = (seatPos: string) => {
    var arrIndex = this.selected.indexOf(seatPos);

    if (arrIndex !== -1) {
      this.color = 'white';
      this.selected.splice(arrIndex, 1);
    } else {
      if (arrIndex === -1) {
        this.color = 'black';
        this.selected.push(seatPos);
      }
    }
  };


  getSeatState = (seatPos: string) => {
    if (this.reserved.indexOf(seatPos) !== -1) {
      return 'reserved';
    } else if (this.selected.indexOf(seatPos) !== -1) {
      return 'selected';
    }
    return;
  };
}


