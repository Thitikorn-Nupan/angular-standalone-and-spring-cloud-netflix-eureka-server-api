import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Robot} from "../../entities/robot";
import {RobotService} from "../../services/robot-service";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {EntityRepo} from "../../repository/entity-repo";
import {Customer} from "../../entities/customer";
import {DataTableComponent} from "../data-table/data-table.component";

@Component({
  selector: 'app-robots-data-table',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    DataTableComponent,
    NgIf
  ],
  templateUrl: './robots-table.component.html',
  styleUrl: './robots-table.component.css'
})
export class RobotsTableComponent implements OnInit {

  protected robots!: Robot[]
  private readonly entityRepo: EntityRepo<Robot>;
  // private readonly robotService: RobotService;
  protected headersColumn : string[] = []

  constructor(robotService: RobotService) {
    this.entityRepo = robotService;
    // this.robotService = robotService;
  }

  async ngOnInit(): Promise<void>  {
    this.entityRepo.readsByAPI().subscribe((response: Robot[]) => {
      this.robots = response;
      Object.keys(this.robots[0]).forEach(key => {
        this.headersColumn.push(key)
      })
    })
  }

}
