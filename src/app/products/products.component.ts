import { Component, OnInit } from '@angular/core'
import { products } from '../products'
@Component({
  templateUrl: './products.component.html',
  selector: 'app-products',
  styleUrls: ['./products.component.css']

})

export class ProductsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log(products);
  }
  changeStatus() {
    this.visibleImage = !this.visibleImage;
  }
  searchText;
  visibleImage = true;
  listProducts = [...products];

}