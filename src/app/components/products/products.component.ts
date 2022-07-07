import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ProductService } from 'src/app/service/product.service';
import { IProoduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

productList: any;
imageWidth: number = 50;
imageMargin: number = 2;
titlePage: string = "CAD Super-Store";
displayImage: boolean = false;


_ProductFilter: string;
get ProductFilter(): string {
  return this._ProductFilter;
}
set ProductFilter(value: string) {
  this._ProductFilter = value;
  this.filterProduct = this.ProductFilter ? this.performFilter(this.ProductFilter) : this.products;
}

filterProduct: IProoduct[];
products : IProoduct [];

constructor( private productService: ProductService) {
  // this.ProductFilter = 'goat';
}

onStarRatingClicked(message: string): void {
  this.titlePage = "Product Item: " + message;
}

performFilter(filterBy: string) : IProoduct[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product : IProoduct) => 
  product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

ngOnInit(): void {
  this.products = this.productService.getProducts();
  this.filterProduct = this.products;
  }

  imageToggle(): void{
    this.displayImage = !this.displayImage;
  }

}
