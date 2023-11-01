import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {RetailerComponent} from "./rewear/retailers/pages/retailer/retailer.component";
import {ShopperComponent} from "./rewear/shoppers/pages/shopper/shopper.component";
import {ProductDetailComponent} from "./rewear/shoppers/components/product-detail/product-detail.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'retailers', component:RetailerComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'shoppers', component: ShopperComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: 'shoppers/products/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
