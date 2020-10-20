import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Shopping_cart/home/home.component';
import { ProductListComponent } from './Shopping_cart/product-list/product-list.component';
import { ProducItemComponent } from './Shopping_cart/produc-item/produc-item.component';
import { CartComponent } from './Shopping_cart/cart/cart.component';
import { TotalComponent } from './Shopping_cart/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProducItemComponent,
    CartComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
