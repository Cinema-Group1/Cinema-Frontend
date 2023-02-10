import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BodyCompComponent } from '../body-comp/body-comp.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  readonly URL: string = 'https://cinema-backend-group1.azurewebsites.net/showing/all';

  display = true;

  filmArray: any;

  filmID: any;
  filmPath: any;
  filmTitle: any;
  filmDescription: any;

  filmEvent = [];
  dialogRef: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ApiKey MVVYeGwzOEJ2WDF0QmJua3hhYWw6Z2piVVFoMUFRT0NxS2k5RlhXdzdPQQ=='
    })
  };

  sendGet(): Observable<any> {
    return this.http.get<any>(this.URL, this.httpOptions);
  }

  getPost() {
    this.sendGet().subscribe(data => {
      console.log("Test 1:");

    });
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private http: HttpClient) {
    this.filmArray = data.filmArray;
    this.filmID = data.filmID;

    console.log(this.filmArray);
    console.log(this.filmID);

    for (let i = 0; i < this.filmArray.length; i++) {
      if (this.filmArray[i].id == this.filmID) {
        this.filmPath = this.filmArray[i].imagePath;
        this.filmTitle = this.filmArray[i].title;
        this.filmDescription = this.filmArray[i].description;
        this.filmEvent = this.filmArray[i].startDate
        console.log(this.filmEvent);
      }
    }
  }

  navigate() {
    this.router.navigate(['/booking', this.filmID]);
    this.dialogRef.close();
  }

  closeDialog() {


  }

  ngOnInit(): void {
  }

}
