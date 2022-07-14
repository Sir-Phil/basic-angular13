import { NgModule } from '@angular/core';
import { ProductsComponent } from '../components/products/products.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class ProductModule { }
