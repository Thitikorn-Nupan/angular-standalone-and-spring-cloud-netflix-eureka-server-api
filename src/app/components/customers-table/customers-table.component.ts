import {Component, OnInit} from '@angular/core';
import {Customer} from "../../entities/customer";
import {CustomerService} from "../../services/customer-service";
import {NgForOf} from "@angular/common";
import {EntityRepo} from "../../repositories/entity-repo";
import {TableComponent} from "../table/table.component";

@Component({
  selector: 'app-customers-table',
  standalone: true,
  imports: [
    NgForOf,
    TableComponent
  ],
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.css'
})
export class CustomersTableComponent implements OnInit {

  private entityRepo: EntityRepo<Customer>;
  protected customers!: Customer[] ;
  protected headersColumn : string[] = []

  constructor(customerService: CustomerService) {
    this.entityRepo = customerService;
  }

  ngOnInit(): void {
    this.entityRepo.readsByAPI().subscribe(response => {
      this.customers = response
      Object.keys(this.customers[0]).forEach(key => {
        this.headersColumn.push(key)
      })
    })
  }

}
