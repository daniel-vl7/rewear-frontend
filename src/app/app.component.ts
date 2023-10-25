import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rewear-frontend';
  options = [
    { path: '/home', title: 'Home'},
    { path: '/shoppers', title: 'Shoppers'},
    {path: '/retailers',title: 'Retailers'}
  ]
}
