import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  constructor(private service:SharedserviceService) { }

  ngOnInit(): void {
  }
 
}
