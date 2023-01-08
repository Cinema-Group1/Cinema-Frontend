import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-body-comp',
  templateUrl: './body-comp.component.html',
  styleUrls: ['./body-comp.component.scss']
})
export class BodyCompComponent implements OnInit {
  readonly URL: string = 'https://cinema-backend-group1.azurewebsites.net/movie/all';

  datas = new Array<any>();
  testArray = [];

  film= [{"path": "../../assets/image/film-cover/film1.png",
          "id": 0,
          "description": "langer text",
          "title": "Movie Title here",
          "eventTime": [
              "21:00","22:00","23:00","00:00"
            
          ]  
        },
         {"path": "../../assets/image/film-cover/film2.png",
          "id": 1,
          "description": "langer text",
          "title": "Movie Title here",
          "eventTime": [
            "21:00","22:00"
          
        ]  
        },
         {"path": "../../assets/image/film-cover/film3.png",
          "id": 2,
          "description": "Der in Ungnade gefallene US-Geheimagent Nicolas Shaw (Barry Pepper) leidet seit seinem letzten Einsatz an Gedächtnisverlust. Shaw wird aus der tödlichen Spionagewelt gezogen, als eine vertraute Kollegin von ihm spurlos verschwindet. Nun muss er all seine Fähigkeiten bündeln, um die Frau zu finden und die Wahrheit aufzudecken. Doch dies kann ihm nur gelingen, wenn er sich irgendwie wieder an seine Vergangenheit erinnert…",
          "title": "Trigger Point",
          "eventTime": [
            "21:00","22:00"
          
        ]  
        },
         {"path": "../../assets/image/film-cover/film4.png",
          "id": 3,
          "description": "Der 12-jährige Benny (Julius Weckauf) entdeckt in seinem Keller den kauzigen Magier Catweazle, (Otto Waalkes) der sich versehentlich aus dem 11. Jahrhundert in die Jetztzeit katapultiert hat. Gemeinsam stürzen sich die beiden in ein Abenteuer, um Catweazles Zauberstab zurück zu erobern, bevor ihn die raffgierige Kunstexpertin Dr. Metzler (Katja Riemann) gewinnbringend versteigern kann. Denn nur mit diesem Stab kann Catweazle wieder in seine Zeit zurückkehren…",
          "title": "CATWEAZLE",
          "eventTime": [
            "21:00","22:00"
          
        ]   
        },
         {"path": "../../assets/image/film-cover/film5.png",
          "id": 4,
          "description": "Der in Ungnade gefallene US-Geheimagent Nicolas Shaw (Barry Pepper) leidet seit seinem letzten Einsatz an Gedächtnisverlust. Shaw wird aus der tödlichen Spionagewelt gezogen, als eine vertraute Kollegin von ihm spurlos verschwindet. Nun muss er all seine Fähigkeiten bündeln, um die Frau zu finden und die Wahrheit aufzudecken. Doch dies kann ihm nur gelingen, wenn er sich irgendwie wieder an seine Vergangenheit erinnert…",
          "title": "Locked Down",
          "eventTime": [
            "21:00","22:00"
          
        ]  
        },
         {"path": "../../assets/image/film-cover/film6.png",
          "id": 5 ,
          "description": "Nachdem eine abgelegene, kanadische Diamantenmine im äußersten Norden des Landes unerwartet in sich zusammenbricht, muss sich der Ice Driver Mike (Liam Neeson) auf eine ganz und gar unmögliche Rettungsmission begeben. Um das Leben der eingeschlossenen Bergleute zu retten, bleibt ihm nur eine Möglichkeit: Er muss einen gefrorenen Ozean überqueren. Dabei kann er zwar genau das zeigen, worauf er spezialisiert ist, nur bekommt er es hier nicht mit einer „normalen“ Eisstraße zu tun. Das ganze Unterfangen gestaltet sich darüber hinaus noch deutlich kritischer, als es auf den ersten Blick ohnehin schon erscheint: Das einsetzende Tauwetter und eine Bedrohung, mit der niemand rechnen konnte, erklären das Vorhaben von vornherein zu einem regelrechten Himmelfahrtskommando. Dem Iceroad-Trucker bleibt also nicht viel Zeit, um die Menschen zu retten, auch wenn er dafür sein eigenes Leben mehr als einmal aufs Spiel setzen muss..",
          "title": "Iced Road",
          "eventTime": [
            "21:00","22:00"
          
        ]  
        },
         {"path": "../../assets/image/film-cover/film7.png",
          "id": 6,
          "description": "Im Chicagoer Viertel Cabrini Green ging lange die Geschichte über den berüchtigten Candyman um, ein mit einem Haken als Hand ausgestatteter übernatürlicher Mörder. Man müsse seinen Namen nur fünfmal in einen Spiegel sagen, um ihn heraufzubeschwören. Jahrzehnte später ziehen Visual Artist  Anthony McCoy (Yahya Abdul-Mateen II) und seine Freundin, Galeriedirektorin Brianna Cartwright (Teyonah Parris), in die inzwischen von der Gentrifizierung erfasste Nachbarschaft. Während Anthonys Künstlerkarriere fast stillsteht, wird er durch eine zufällige Begegnung mit William Burke (Colman Domingo), einem alten Bewohner von Cabrini Green, mit der schrecklichen, wahren Geschichte hinter dem Candyman konfrontiert. Immer tiefer steigt er in die düsteren Einzelheiten hinter der Geisterstory hinab in der Hoffnungen, seinen Malereien neues Leben einzuhauchen. Bald aber steht sein eigener Verstand auf dem Spiel...",
          "title": "Candyman",
          "eventTime": [
            "21:00","22:00"
          
        ]  
        },
         {"path": "../../assets/image/film-cover/film8.png",
          "id": 7 ,
          "description": "Nachdem er in den 70er Jahren erstmals Kontakt mit der Geheimorganisation Monarch hatte, lebt Riesenaffe Kong weiterhin auf Skull Island, mitllerweile betreut von der Wissenschaftlerin Ilene Andrews (Rebecca Hall). Kong hat sich mit Ilenes gehörloser Adoptivtochter Jia (Kaylee Hottle) angefreundet, doch dann soll er von seiner Insel weggebracht werden, um die Welt zu retten: Denn unterdessen hat Godzilla damit angefangen, scheinbar willkürlich Forschungseinrichtungen überall auf der Welt anzugreifen. Um die Bedrohung durch Godzilla und die anderen Titanen zu beseitigen, hat der Konzern Apex nämlich eine neue Technologie entwickelt, doch um diese neue Waffe in Betrieb nehmen zu können, braucht Apex-Boss Walter Simmons (Demián Bichir) eine Energiequelle, die im hohlen Kern der Erde verborgen ist, dem geheimen Lebensort der Titanen. Kong soll Apex dorthin führen, doch unterwegs wird das Transportschiff von Godzilla angegriffen...",
          "title": "Godzilla VS Kong",
          "eventTime": [
            "21:00","22:00"
          
        ]  
        }];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'ApiKey MVVYeGwzOEJ2WDF0QmJua3hhYWw6Z2piVVFoMUFRT0NxS2k5RlhXdzdPQQ=='
    })
  };

  idNumber: number | undefined;
  constructor(private http: HttpClient, private dialogRef: MatDialog) { 
    
   this.getPost();
      
}

sendGet(): Observable<any> {
  return this.http.get<any>(this.URL, this.httpOptions);
}

getPost() {    
  this.sendGet().subscribe(data => {
    console.log("Test 1:");
    
  });
}

getID(num: number) {
  this.idNumber = this.film[num].id; 
}
openDialog() {
  
  this.dialogRef.open(PopUpComponent, {
    data: {
      filmArray: this.film,
      filmID: this.idNumber
    }
  });
}


  ngOnInit(): void {
  }

}
