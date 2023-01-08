import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  
  filmArray: any;

  filmID: any;
  filmPath: any;
  filmTitle: any;
  filmDescription: any;

  filmEvent = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
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


  ngOnInit(): void {
  }

}
