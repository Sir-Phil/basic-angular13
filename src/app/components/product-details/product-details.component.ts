import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../products/product';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  detailsTitle: string = "Product Details";

  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.detailsTitle += `: ${id}`;
    this.product = {
      "productId": 1,
      "productName": "Fat Chicken",
      "productCode": "CT-0011",
      "releaseDate": "March 19, 2022",
      "description": "Locally growned chicken fat to over-flow two big pots",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/LAYERS-300X400.jpg"
    }
  }


  onBack(): void {
    this.router.navigate(['/products'])
  }

}
