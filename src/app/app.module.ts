import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { CartsComponent } from './components/carts/carts.component';
import { FormsModule } from '@angular/forms';








@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    CartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
