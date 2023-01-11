import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-cinema-seat',
  templateUrl: './cinema-seat.component.html',
  styleUrls: ['./cinema-seat.component.scss']
})
export class CinemaSeatComponent implements OnInit {

  readonly URL: string = 'https://cinema-backend-group1.azurewebsites.net/seat/all';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ApiKey MVVYeGwzOEJ2WDF0QmJua3hhYWw6Z2piVVFoMUFRT0NxS2k5RlhXdzdPQQ=='
    })
  };

  body: any = {};

  seatsNumber: any = [];
  seatsN: any = [];

  seatsLine: any = [];
  seatsL: any = [];
  seatsline: any = [];

  boockedSeats: any = [];

 
  constructor(private http: HttpClient, private router: Router) {


    
      this.getPost();
  }

  sendGet(): Observable<any> {
    return this.http.get<any>(this.URL, this.httpOptions);
  }
  

  getPost() {    
    this.sendGet().subscribe(data => {
    console.log("Justin HALLLOOO");
      for(let i = 0; i < data.length; i++) {
              this.seatsLine[i] = data[i].seatNumber.line;        
        }
        this.seatsLine.sort();
        
       this.sortAlgString();
        for(let i = 0; i < 4; i ++) {
          this.seatsline[i] = this.seatsL[i];
        }

      for(let i = 0; i < 10; i++)  {
          this.seatsNumber[i] = data[i].seatNumber.number;
        }
        this.sortAlg();    
        // this.boockedSeats[i] = "" + this.seatsLine[i]+ this.seatsNumber[i]

      
      console.log("J l c:  "+ this.seatsN);
    });
  }

  sortAlg() {
    
      this.seatsNumber.forEach((element: number) => {
      if (!this.seatsN.includes(element))
        this.seatsN.push(element);
      })

  }

  
  sortAlgString() {
    
    this.seatsLine.forEach((element: string) => {
    if (!this.seatsL.includes(element))
      this.seatsL.push(element);
    })

}

navigate() {
  
  this.router.navigate(['/end-booking'], {state: {data: {
    selected: this.selected
  }}});
  
}

// A4
sendPost() {
  let num: any;
  let line: string;
  for(let i = 0; i < this.selected.length; i++) {
   line = this.selected[i].substring(0,1);
   console.log("line: " + line);
   num = this.selected[i].substring(1,2);
   console.log("num" + num); 
   this.body[i] =  {
      "seatNumber": {
        "id": this.selected[i],
        "line": line,
        'number': num
      },
      "price": "",
      "occupied": "true"
    }
  }
  console.log(this.body);
  return this.http.post(this.URL, this.body, this.httpOptions);
}

  ngOnInit(): void {
    
  }

  columns: number[] = this.seatsN;
  rows: string[] = this.seatsline;

  reserved: string[] = ['A2', 'B3'];
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


