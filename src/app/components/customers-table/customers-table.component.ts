import {Component, OnInit} from '@angular/core';
import {Customer} from "../../entities/customer";
import {CustomerService} from "../../services/customer-service";
import {NgForOf} from "@angular/common";
import {EntityRepo} from "../../repository/entity-repo";
import {DataTableComponent} from "../data-table/data-table.component";

@Component({
  selector: 'app-customers-data-table',
  standalone: true,
  imports: [
    NgForOf,
    DataTableComponent
  ],
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.css'
})
export class CustomersTableComponent implements OnInit {

  private readonly entityRepo: EntityRepo<Customer>;
  protected customers!: Customer[] ;
  protected headersColumn : string[] = []

  constructor(customerService: CustomerService) {
    this.entityRepo = customerService;
  }

  async ngOnInit(): Promise<void> {
    this.entityRepo.readsByAPI().subscribe(response => {
      this.customers = response
      Object.keys(this.customers[0]).forEach(key => {
        this.headersColumn.push(key)
      })
    })
  }

}
