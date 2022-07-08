import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ProductService } from 'src/app/service/product.service';
import { IProduct } from './product';

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
errorMessage: string;


_ProductFilter: string;
get ProductFilter(): string {
  return this._ProductFilter;
}
set ProductFilter(value: string) {
  this._ProductFilter = value;
  this.filterProduct = this.ProductFilter ? this.performFilter(this.ProductFilter) : this.products;
}

filterProduct: IProduct[] = [];
products : IProduct [] = [];

constructor( private productService: ProductService) {
  // this.ProductFilter = 'goat';
}

onStarRatingClicked(message: string): void {
  this.titlePage = "Product Item: " + message;
}

performFilter(filterBy: string) : IProduct[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product : IProduct) => 
  product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next: products => {
      this.products = products
      this.filterProduct = this.products;
    },
    error: err => this.errorMessage = err
  });
  
  }

  imageToggle(): void{
    this.displayImage = !this.displayImage;
  }

}
