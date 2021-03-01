import { SharedModule } from './components/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PartnersComponent } from './components/partners/partners.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersAnalyticsComponent } from './components/orders-analytics/orders-analytics.component';
import { AdminsComponent } from './components/admins/admins.component';
import { UsersMessagesComponent } from './components/users-messages/users-messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderItemsComponent } from './components/order-items/order-items.component';  

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PartnersComponent,
    OrdersComponent,
    ProductsComponent,
    OrdersAnalyticsComponent,
    AdminsComponent,
    UsersMessagesComponent,
    OrderItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
