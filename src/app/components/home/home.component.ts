import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {TableComponent} from "../table/table.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    TableComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected header : string = 'Learning Angular (Front-End) & Spring cloud (Back-End)'
  protected routerLinks: {route:string,label:string} [] = [
    {route : 'https://github.com/Thitikorn-Nupan', label:'GITHUB'},
    {route : 'https://www.linkedin.com/in/thitikorn-nupan/', label:'LINKEDIN'},
  ]
}
