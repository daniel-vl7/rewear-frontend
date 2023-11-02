import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {RetailerComponent} from './rewear/retailers/pages/retailer/retailer.component';
import {ShopperComponent} from "./rewear/shoppers/pages/shopper/shopper.component";
import {HomeComponent} from './public/pages/home/home.component';
import {ProductsRetailerComponent} from "./rewear/retailers/components/products/products.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProductsShoppersComponent} from "./rewear/shoppers/components/products/products.component";

import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
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
import { ChatRetailerComponent } from './rewear/retailers/components/chat/chat.component';
import { EventsRetailerComponent } from './rewear/retailers/components/events/events.component';
import {ChatServiceService} from "./rewear/retailers/services/chat-service.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import {ProductsService} from "./rewear/retailers/services/products.service";
import {NgIf} from "@angular/common";
import {EventsRService} from "./rewear/retailers/services/events-r.service";
import {ToolbarComponent} from "./rewear/shoppers/components/toolbar/toolbar.component";
import {MatGridListModule} from '@angular/material/grid-list';
import {RetailerToolbarComponent} from "./rewear/retailers/components/retailer-toolbar/retailer-toolbar.component";
import {ChatShopperComponent} from "./rewear/shoppers/components/chat/chat.component";
import {EventsShoppersComponent} from "./rewear/shoppers/components/events/events.component";
@NgModule({
  declarations: [EventsShoppersComponent,ChatShopperComponent,AppComponent, PageNotFoundComponent, RetailerComponent, ShopperComponent, HomeComponent, ProductsRetailerComponent, AdminPanelComponent, ChatRetailerComponent, EventsRetailerComponent,ToolbarComponent, ProductsShoppersComponent,RetailerToolbarComponent],
  imports: [ NgIf,FormsModule,ReactiveFormsModule,HttpClientModule,MatExpansionModule, MatGridListModule, MatDatepickerModule, MatCheckboxModule, MatBadgeModule,MatCardModule, MatGridListModule, MatSelectModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatListModule,BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatTableModule, MatMenuModule, MatTabsModule, MatDividerModule],
  providers: [ChatServiceService,ProductsService, EventsRService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
