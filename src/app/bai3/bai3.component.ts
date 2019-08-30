import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {
  products = [
    {
      id: 'pd100',
      image: 'assets/images/6.jpg',
      name: 'Laptop',
      price: 30000,
    },
    {
      id: 'pd101',
      image: 'assets/images/7.jpg',
      name: "Mobile",
      price: 54000
    },
    {
      id: 'pd102',
      image: 'assets/images/8.jpg',
      name: 'Smart Watch',
      price: 22000
    },
    {
      id: 'pd103',
      image: 'assets/images/9.jpg',
      name: 'Head Phone',
      price: 13000
    }
  ];

  quantities = {};
  temp = this.products.forEach(product => {
    this.quantities[product.id] = 0
  });

  onIncreaseQuantities(id) {
    let count = this.quantities[id];
    if (count < 20) {
      ++count;
    }
    this.quantities[id] = count;
  }
  onDecreaseQuantities(id) {
    let count = this.quantities[id];
    if (count > 0) {
      --count;
    }
    this.quantities[id] = count;
  }

  totalPrice() {
    let total = 0;
    for (let product of this.products) {
      total += product.price
      total += product.price * this.quantities[product.id]
    }
    return total;
  }

  ngOnInit() {
  }

}
