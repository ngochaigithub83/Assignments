import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { }
  product;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('productId'))
      this.product = products.filter(product => {
        return product.productId === id
      })[0];
    });
  }

}
