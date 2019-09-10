import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.css']
})
export class GioHangComponent implements OnInit {

  products: any;
  constructor(private cart: CartService) { }

  ngOnInit() {
    this.products = this.cart.getItems();

  }

}
