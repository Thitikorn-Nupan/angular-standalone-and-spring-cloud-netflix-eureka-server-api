import {EntityRepo} from "../repository/entity-repo";
import {Robot} from "../entities/robot";
import {Observable, ReplaySubject} from "rxjs";
import {Injectable} from "@angular/core";
import {EurekaClientService} from "./eureka-client.service";

@Injectable({
  providedIn: "root",
})
export class RobotService implements EntityRepo<Robot> {

  private readonly eurekaClientService: EurekaClientService;
  private readonly robotsReplaySubject: ReplaySubject<Robot[]>;

  constructor(eurekaClientService: EurekaClientService) {
    this.eurekaClientService = eurekaClientService;
    this.robotsReplaySubject = new ReplaySubject<Robot[]>();
    this.loadRobots()
    // console.log('RobotService class is initial')
  }

  private loadRobots(): void {
    this.eurekaClientService.retrieveRobots().subscribe(response => this.robotsReplaySubject.next(response))  // add customers to customersReplaySubject for publish
  }

  readsByAPI(): Observable<Robot[]> {
    return this.eurekaClientService.retrieveRobots()
  }

  // bad
  reads(): Observable<Robot[]> {
    return this.robotsReplaySubject.asObservable();
  }

  read(id: number): Observable<Robot> {
    throw new Error("Method not implemented.");
  }

}
