import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './components/header/header.component';
import { CartsComponent } from './components/carts/carts.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductModule } from './products/product.module';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartsComponent,
    WelcomeComponent
    
  ],
  imports: [
    BrowserModule,
    CardModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
