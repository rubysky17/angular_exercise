import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChairListComponent } from './DatGhe/chair-list/chair-list.component';
import { ChairBillComponent } from './DatGhe/chair-bill/chair-bill.component';
import { HomeComponent } from './DatGhe/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChairListComponent,
    ChairBillComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
