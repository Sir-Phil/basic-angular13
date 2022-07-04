import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

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
filterProduct: string = "Goat";

products : any [] = [
  {
    "productId": 1,
    "productName": "Fat Chicken",
    "productCode": "CT-0011",
    "releaseDate": "March 19, 2022",
    "description": "Locally growned chicken fat to over-flow two big pots",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/images/LAYERS-300X400.jpg"
    // "imageUrl": "https://res.cloudinary.com/sirphil/image/upload/v1655897472/Ibiputam_LAYERS-300X400_wuo3wa.jpg" 
  },
  {
    "productId": 2,
    "productName": "Lime",
    "productCode": "LT-0023",
    "releaseDate": "March 18, 2022",
    "description": "Locally growned lime for home and industrial use for you",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "assets/images/lime-300x400-1.jpg"
    //"imageUrl": "https://res.cloudinary.com/sirphil/image/upload/v1655897476/lime-300x400-1_ngepal.jpg"
  },
  {
    "productId": 5,
    "productName": "Peer",
    "productCode": "PT-0048",
    "releaseDate": "May 21, 2022",
    "description": "Curved Big green rich peer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "assets/images/PEER-300X400.jpg"
    //"imageUrl": "https://res.cloudinary.com/sirphil/image/upload/v1655897481/PEER-300X400_w5aynl.jpg"
  },
  {
    "productId": 8,
    "productName": "Water-Melon",
    "productCode": "WT-0022",
    "releaseDate": "May 15, 2022",
    "description": "Freshly delivered and processed water-melon from south",
    "price": 11.55,
    "starRating": 3.7,
    "imageUrl": "assets/images/watermelon-300x400-1.jpg"
    //"imageUrl": "https://res.cloudinary.com/sirphil/image/upload/v1655897487/watermelon-300x400-1_slum81.jpg"
  },
  {
    "productId": 10,
    "productName": "Mature Goat",
    "productCode": "GT-0042",
    "releaseDate": "June 15, 2022",
    "description": "Well grown and matured good for preparation of party rice",
    "price": 35.95,
    "starRating": 4.6,
    "imageUrl": "assets/images/goat-300x400-1.jpg"
    //"imageUrl": "https://res.cloudinary.com/sirphil/image/upload/v1655897465/goat-300x400-1_m3cxtz.jpg"
  }
]

  constructor(private api: AppService) { }

  ngOnInit(): void {
    // this.api.getProduct()
    // .subscribe(res => {
    //   this.productList = res;
    // })
  }

  imageToggle(): void{
    this.displayImage = !this.displayImage;
  }

}