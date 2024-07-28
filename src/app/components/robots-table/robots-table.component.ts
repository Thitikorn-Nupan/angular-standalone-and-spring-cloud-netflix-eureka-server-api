import {Component, OnInit} from '@angular/core';
import {Robot} from "../../entities/robot";
import {RobotService} from "../../services/robot-service";
import {NgForOf} from "@angular/common";
import {EntityRepo} from "../../repositories/entity-repo";
import {Customer} from "../../entities/customer";

@Component({
  selector: 'app-robots-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './robots-table.component.html',
  styleUrl: './robots-table.component.css'
})
export class RobotsTableComponent implements OnInit {

  protected robots: Robot[] = []
  private entityRepo: EntityRepo<Robot>;

  constructor(robotService: RobotService) {
    this.entityRepo = robotService;
  }

  ngOnInit(): void {
    this.entityRepo.reads().subscribe(response => this.robots = response)
  }


}
