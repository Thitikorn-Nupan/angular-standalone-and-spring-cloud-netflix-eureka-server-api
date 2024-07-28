import {Component, OnInit} from '@angular/core';
import {Customer} from "../../entities/customer";
import {CustomerService} from "../../services/customer-service";
import {NgForOf} from "@angular/common";
import {EntityRepo} from "../../repositories/entity-repo";

@Component({
  selector: 'app-customers-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.css'
})
export class CustomersTableComponent implements OnInit {

  protected customers: Customer[] = [];
  private entityRepo: EntityRepo<Customer>;


  constructor(customerService: CustomerService) {
    this.entityRepo = customerService;
  }

  ngOnInit(): void {
    // **
    this.entityRepo.reads().subscribe(response => this.customers = response)
  }

}
