import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  imageButtonText: string = "Hide";
  _listFilter: string;
  productsFiltered: IProduct[];

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.productsFiltered = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void{
    console.log(message);
    this.pageTitle += message;
  }

  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "descasdcasdc",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Garden Cart2",
      "productCode": "GDN-0024",
      "releaseDate": "March 19, 2019",
      "description": "descasffffdcasdc",
      "price": 35.99,
      "starRating": 1.2,
      "imageUrl": "assets/images/hammer.png"
    }
  ];

  

  constructor() {
    this.productsFiltered = this.products;
  }

  ngOnInit() {
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
    if(this.showImage){
      this.imageButtonText = "Hide";
    }else{
      this.imageButtonText = "Show";
    }
  }

}
