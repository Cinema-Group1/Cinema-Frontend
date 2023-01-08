import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  
  display =  true;

  filmArray: any;

  filmID: any;
  filmPath: any;
  filmTitle: any;
  filmDescription: any;

  filmEvent = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {
    this.filmArray = data.filmArray;
    this.filmID = data.filmID;

    for(let i = 0; i < this.filmArray.length; i ++) {
      if(this.filmArray[i].id == this.filmID) {
        this.filmPath = this.filmArray[i].path;
        this.filmTitle = this.filmArray[i].title;
        this.filmDescription = this.filmArray[i].description;
        this.filmEvent = this.filmArray[i].eventTime
        console.log(this.filmEvent);
      }
    }

  }

  navigate() {
  
    this.display = false;
    this.router.navigateByUrl('/booking');
  
  }

  ngOnInit(): void {
  }

}
