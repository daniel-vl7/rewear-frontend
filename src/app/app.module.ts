import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {RetailerComponent} from './rewear/retailers/pages/retailer/retailer.component';
import {ShopperComponent} from "./rewear/shoppers/pages/shopper/shopper.component";
import {HomeComponent} from './public/pages/home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from '@angular/material/grid-list';

import {ProductsComponent} from './rewear/retailers/components/products/products.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, RetailerComponent, ShopperComponent, HomeComponent, ProductsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule, MatToolbarModule,MatSelectModule,MatInputModule,MatFormFieldModule,MatCardModule,MatGridListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
