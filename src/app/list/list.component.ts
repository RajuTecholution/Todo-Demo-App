import { Component, OnInit } from '@angular/core';
import { FetchListService } from '../fetch-list.service';


export interface JiraList{
  name: string;
  office: string;
  description: string;
  status: statusJira;
}

export enum statusJira {
  pending = 0,
  approved =1,
  completed = 2
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  public listOfJiraTickets: JiraList[];
  statusJira : typeof statusJira = statusJira;

  constructor(private dataService: FetchListService) { }

  ngOnInit() {
   this.getData();
  }

  // Get data from Backend/Server
  getData() {
    this.dataService.fetchDataFromJson().subscribe((data)=> {
       this.listOfJiraTickets = data.list;
     });
  }

}
