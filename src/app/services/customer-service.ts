import {EntityRepo} from "../repository/entity-repo";
import {Customer} from "../entities/customer";
import {Observable, ReplaySubject} from "rxjs";
import {Injectable} from "@angular/core";
import {EurekaClientService} from "./eureka-client.service";

// for inject
@Injectable({
  providedIn: "root",
})
export class CustomerService implements EntityRepo<Customer> {

  private readonly customersReplaySubject : ReplaySubject<Customer[]>;
  private readonly eurekaClientService: EurekaClientService;

  constructor(eurekaClientService: EurekaClientService) {
    this.eurekaClientService = eurekaClientService;
    this.customersReplaySubject = new ReplaySubject<Customer[]>();
    this.loadCustomers()
    // console.log('CustomerService class is initial')
  }

  // load only once when class is initial
  private loadCustomers() {
    // add customers to customersReplaySubject for publish
    this.eurekaClientService.retrieveCustomers().subscribe(response => this.customersReplaySubject.next(response))
  }

  readsByAPI(): Observable<Customer[]> {
    return this.eurekaClientService.retrieveCustomers()
  }

  // bad
  reads() : Observable<Customer[]> {
    return this.customersReplaySubject
  }

  // this case is optional
  read(id: number): Observable<Customer> {
    return this.eurekaClientService.retrieveCustomer(id)
  }

}
