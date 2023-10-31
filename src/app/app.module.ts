import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {RetailerComponent} from './rewear/retailers/pages/retailer/retailer.component';
import {ShopperComponent} from "./rewear/shoppers/pages/shopper/shopper.component";
import {HomeComponent} from './public/pages/home/home.component';
import {ProductsComponent} from "./rewear/retailers/components/products/products.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import { AdminPanelComponent } from './rewear/retailers/components/admin-panel/admin-panel.component';
import { ChatComponent } from './rewear/retailers/components/chat/chat.component';
import { EventsComponent } from './rewear/retailers/components/events/events.component';
import {ChatServiceService} from "./rewear/retailers/services/chat-service.service";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, RetailerComponent, ShopperComponent, HomeComponent, ProductsComponent, AdminPanelComponent, ChatComponent, EventsComponent],
  imports: [ HttpClientModule,MatExpansionModule, MatDatepickerModule, MatCheckboxModule, MatBadgeModule,MatCardModule, MatGridListModule, MatSelectModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatListModule,BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatTableModule, MatMenuModule, MatTabsModule, MatDividerModule],
  providers: [ChatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
