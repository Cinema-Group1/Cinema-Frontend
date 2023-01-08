import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }


  fetchRowData(rowVal) {
    let route = this.router.config.find(r => r.path === 'app-customer-details/:id');
    route.data =  rowVal;

  // START: One way of using routerLink
   this.router.navigateByUrl(`${'app-customer-details'}/${rowVal.id}`); 
   // Uncomment this line and check the result
  // END: One way of using routerLink */

   // ---- START: Another way of using routerLink
  // this.router.navigate(['app-customer-details/' + rowVal.id]);
  // ---- END: Another way of using routerLink 

  };
}
