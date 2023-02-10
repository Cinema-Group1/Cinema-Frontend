import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { BodyCompComponent } from '../body-comp/body-comp.component';
import { CinemaSeatComponent } from '../cinema-seat/cinema-seat.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers: [PopUpComponent],
})
export class BookingComponent implements OnInit {
  tarif = [
    {
      "id": "1",
      "bezeichnung": 'Erwachsenen',
      "preis": '13.49€',
      "counter": 0
    },
    {
      "id": "2",
      "bezeichnung": 'Student',
      "preis": '8.99€',
      "counter": 0
    },
    {
      "id": "3",
      "bezeichnung": 'Kinder',
      "preis": '4.99€',
      "counter": 0
    },
  ];

  kinderTarifCounter: number = 0;
  studentTarifCounter: number = 0;
  erwachsenenTarifCounter: number= 0;

  

  tarifId: any;

  readonly URL: string =
    'https://cinema-backend-group1.azurewebsites.net/showing/all';
  price: any;

  selectedTarif: any;

  message: any;

  seats: any = [];

  showingTitle: any;
  filmId: any;
  filmTitle: any;
  filmDescription: any;
  filmPath: any;
  filmLength: any;
  filmYear: any;
  filmGenre: any;

  filmEvent = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'ApiKey MVVYeGwzOEJ2WDF0QmJua3hhYWw6Z2piVVFoMUFRT0NxS2k5RlhXdzdPQQ==',
    }),
  };

  tarifCounter: number = 0;


  private routeSub: Subscription = new Subscription();
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.getPost();
  }

  getPrice() {
    for (let i = 0; i < this.tarif.length; i++) {
      if (this.selectedTarif == this.tarif[i].bezeichnung) {
        this.price = this.tarif[i].preis;
      }
    }
    return this.price;
  }

  selectChangeHandler(event: any) {
    //update the ui
    this.selectedTarif = event.target.value;
    console.log(this.selectedTarif.preis);
  }

  getId(event: any) {
    this.tarifId = event.target.value;
    
  }

  counterIncreaseKinder() {
    this.kinderTarifCounter++;
  }
  counterDecreaseKinder() {
    if(this.kinderTarifCounter < 0) {

      this.kinderTarifCounter--;
    }
  }

  
  counterIncreaseStudent() {
    this.studentTarifCounter++;
  }
  counterDecreaseStudent() {
    if(this.studentTarifCounter < 0) {

      this.studentTarifCounter--;
    }
  }

  
  counterIncreaseErwachsenen() {
    this.erwachsenenTarifCounter++;
  }
  counterDecreaseErwachsenen() {
    if(this.erwachsenenTarifCounter < 0) {

      this.erwachsenenTarifCounter--;
    }
  }
  // decreaseCounter() {
  //   for(let i = 0; i < this.tarif.length; i++) {
  //     if(this.tarifId == this.tarif[i].id) {
  //       console.log(this.tarif[i].counter);
  //       this.tarif[i].counter--;
  //       console.log(this.tarif[i].counter);
  //     }
  //   }
  // }

  sendGet(): Observable<any> {
    return this.http.get<any>(this.URL, this.httpOptions);
  }

  getPost() {
    this.sendGet().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === parseInt(this.filmId)) {
          this.showingTitle = data[i].title + ':';
          this.filmTitle = data[i].movie.title;
          this.filmDescription = data[i].movie.description;
          this.filmPath = data[i].movie.imagePath;
          this.filmLength = data[i].movie.length;
          this.filmYear = new Date(data[i].movie.releasedDate).getFullYear();
          this.filmGenre = data[i].movie.genre.name;
          break;
        }
      }
    });
  }



  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.filmId = params['id'];
    });
  }
}
