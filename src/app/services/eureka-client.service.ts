import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../entities/customer";
import {Robot} from "../entities/robot";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EurekaClientService {
  private httpClient: HttpClient;
  private readonly baseEndpointCustomers = environment.baseEndpointCustomers
  private readonly baseEndpointRobots = environment.baseEndpointRobots
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public retrieveCustomers() : Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseEndpointCustomers}/reads`)
  }

  public retrieveRobots() : Observable<Robot[]> {
    return this.httpClient.get<Robot[]>(`${this.baseEndpointRobots}/reads`)
  }

  public retrieveCustomer(id : number) : Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseEndpointCustomers}/read?pk=${id}`)
  }



}
