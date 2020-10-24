import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Dressing-room-service/home/home.component';
import { CategoryComponent } from './Dressing-room-service/category/category.component';
import { ProductItemComponent } from './Dressing-room-service/product-item/product-item.component';
import { ProductListComponent } from './Dressing-room-service/product-list/product-list.component';
import { ModelComponent } from './Dressing-room-service/model/model.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ProductItemComponent,
    ProductListComponent,
    ModelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
