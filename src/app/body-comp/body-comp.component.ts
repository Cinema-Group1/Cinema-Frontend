import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-comp',
  templateUrl: './body-comp.component.html',
  styleUrls: ['./body-comp.component.scss']
})
export class BodyCompComponent implements OnInit {

coverConfig = [
  {
    "filmNAme": "Avater",
    "coverImg": "../../assets/image/film-cover/film2.png"
  }, 
  {
    "filmNAme": "Avater1",
    "coverImg": "../../assets/image/film-cover/film2.png"
  },
  {
    "filmNAme": "Avater2",
    "coverImg": "../../assets/image/film-cover/film1.png"
  },
  {
    "filmNAme": "Avater3",
    "coverImg": "../../assets/image/film-cover/film2.png"
  },{
    "filmNAme": "Avater4",
    "coverImg": "../../assets/image/film-cover/film1.png"
  },{
    "filmNAme": "Avater5",
    "coverImg": "../../assets/image/film-cover/film1.png"
  }
];

configHelp: any = {};

constructor() { 
  console.log(this.coverConfig[3].coverImg);
  for (var i = 0; i < this.configHelp.length; i++) {
    this.configHelp[this.coverConfig[i].filmNAme] = {
      "name": this.coverConfig[i].filmNAme,
      "img" : this.coverConfig[i].coverImg
    }

  }
}


  ngOnInit(): void {
  }

}
