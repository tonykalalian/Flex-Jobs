import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: any;
  color:boolean = true;
  constructor(public service:DataService) { }

  ngOnInit(): void {
    this.teams = this.service.getContacts();
  }

}
