import { Component } from '@angular/core';
import {EventsRService} from "../../services/events-r.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'retailer-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsRetailerComponent {
  eventForm: FormGroup;

  constructor(private eventrService:EventsRService, private fb:FormBuilder) {
    this.eventForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        location: ['', Validators.required],
        date: ['', [Validators.required, this.dateValidator]],
        time: ['', [Validators.required, this.timeValidator]],
    });
  }

    dateValidator(control: any) {
        const value = control.value;
        if (value) {
            const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Formato de fecha (YYYY-MM-DD)
            if (!datePattern.test(value)) {
                return { invalidDate: true };
            }
        }
        return null;
    }

    timeValidator(control: any) {
        const value = control.value;
        if (value) {
            const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/; // Formato de hora (HH:MM)
            if (!timePattern.test(value)) {
                return { invalidTime: true };
            }
        }
        return null;
    }

    publishEvent(){
    if (this.eventForm.valid){
      const eventData = this.eventForm.value;
      this.eventrService.createEvent(eventData).subscribe(response => {
          console.log('Event published successfully:', response);
          alert('✅ Event published successfully 🏪')
      });
    }
  }
}
