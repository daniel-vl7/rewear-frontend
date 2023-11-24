import { Component } from '@angular/core';
import { RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import LogInComponent from "./public/auth/log-in/log-in.component";
import SignUpComponent from "./public/auth/sign-up/sign-up.component";
import {AdminPanelComponent} from "./rewear/retailers/components/admin-panel/admin-panel.component";

@Component({
  standalone: true,
  imports: [RouterModule, MatToolbarModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rewear-frontend';
  options = [
    { path: '/home', title: 'Home'},
    { path: '/shoppers', title: 'Shoppers'},
    {path: '/retailers',title: 'Retailers'},
    { path: 'log-in', title: 'LogInComponent'  },
    { path: 'sign-up', title: 'SignUpComponent' },
    {path: 'retailers/administrator-panel', title: 'AdminPanelComponent'},
  ]
}
