import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Robot} from "../../entities/robot";
import {RobotService} from "../../services/robot-service";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {EntityRepo} from "../../repositories/entity-repo";
import {Customer} from "../../entities/customer";
import {TableComponent} from "../table/table.component";

@Component({
  selector: 'app-robots-table',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    TableComponent,
    NgIf
  ],
  templateUrl: './robots-table.component.html',
  styleUrl: './robots-table.component.css'
})
export class RobotsTableComponent implements OnInit {

  protected robots!: Robot[]
  private entityRepo: EntityRepo<Robot>;
  private robotService: RobotService;
  protected headersColumn : string[] = []

  constructor(robotService: RobotService) {
    this.entityRepo = robotService;
    this.robotService = robotService;
  }

  async ngOnInit() {
    this.entityRepo.readsByAPI().subscribe((response: Robot[]) => {
      this.robots = response;
      Object.keys(this.robots[0]).forEach(key => {
        this.headersColumn.push(key)
      })
    })
  }


}
