import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductDetailsGuard } from './components/product-details/product-details.guard';
import { ProductsComponent } from './components/products/products.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', canActivate: [ProductDetailsGuard], component: ProductDetailsComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
