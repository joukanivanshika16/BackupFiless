import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service';
@Component({
  selector: 'app-show-tracker',
  templateUrl: './show-tracker.component.html',
  styleUrls: ['./show-tracker.component.css']
})
export class ShowTrackerComponent implements OnInit {

  constructor(private service:SharedserviceService) { }

  ngOnInit(): void {
  }
  public counts = ["Recieved","In Progress","Ready for Billing",
  "Billed","Order Closed"];
  public orderStatus = "In Progress"
}
