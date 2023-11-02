import { Component } from '@angular/core';
import {EventShopperService} from "../../services/event-shopper.service";
import {Event} from "../../models/event";
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsShoppersComponent {
  events: Event[] = [];

  constructor(private eventService: EventShopperService) { } // Cambia el nombre del servicio

  ngOnInit(): void {
    this.loadEvents();
  }

  private loadEvents(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }
}
