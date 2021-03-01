import { UsersMessagesComponent } from './components/users-messages/users-messages.component';
import { AdminsComponent } from './components/admins/admins.component';
import { OrdersAnalyticsComponent } from './components/orders-analytics/orders-analytics.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { PartnersComponent } from './components/partners/partners.component';
import { UsersComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderItemsComponent } from './components/order-items/order-items.component';

const routes: Routes = [
  
    { path: 'admins', component: AdminsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'partners', component: PartnersComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: '', component: OrdersComponent },
    { path: 'ordersanalytics', component: OrdersAnalyticsComponent },
    { path: 'usersMessages', component: UsersMessagesComponent },
    {path:'items', component:OrderItemsComponent},

    { path: 'registeration',
      loadChildren: () => import('../app/components/registeration/registeration.module').then(m => m.RegisterationModule)
    },
    {
      path: 'shared', 
      loadChildren: () => import('../app/components/shared/shared.module').then(m => m.SharedModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('../app/components/profile/profile.module').then(m => m.ProfileModule)
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
