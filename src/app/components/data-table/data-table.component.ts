import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'data-table',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit,AfterViewInit {

  @Input()
  public titleTable! : string
  @Input()
  public data! : any
  @Input()
  public headersColumn! : string[]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
