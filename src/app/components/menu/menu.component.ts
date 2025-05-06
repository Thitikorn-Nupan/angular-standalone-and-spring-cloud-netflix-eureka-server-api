import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'menubar',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  protected title : string = 'Angular & Spring cloud eureka netflix'
  protected routerLinks: {route:string,label:string,select:boolean} [] = [
    {route : '/', label:'Home',select:true},
    {route : '/customers-table', label:'Customers Table',select:false},
    {route : '/robots-table', label:'Robots Table',select:false},
  ]

  protected onNavClick(routerLink: { route: string; label: string }) {
    switch (routerLink.route) {
      case '/' :
        this.routerLinks[0].select = true
        this.routerLinks[1].select = false
        this.routerLinks[2].select = false
        break;
      case '/customers-table' :
        this.routerLinks[0].select = false
        this.routerLinks[1].select = true
        this.routerLinks[2].select = false
        break;
      case '/robots-table' :
        this.routerLinks[0].select = false
        this.routerLinks[1].select = false
        this.routerLinks[2].select = true
        break;
    }
  }
}
