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
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit,AfterViewInit {

  @Input()
  public titleTable! : string
  @Input()
  public data! : any
  @Input()
  public headersColumn! : string[]

  ngOnInit(): void {
    // get attributes name to headersColumn array
    // Object.keys(this.data[0]).forEach(key => {
    //   this.headersColumn.push(key.substring(1))
    // })
  }

  ngAfterViewInit(): void {
    // console.log(this.data)
  }


}
