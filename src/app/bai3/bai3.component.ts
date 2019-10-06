import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {
  total = {
    sl: null,
    dg: null,
  }
  products = [
    {
      id: 'pd100',
      name: 'Nước Ngọt',
      price: 30000,
    },
    {
      id: 'pd101',
      name: 'Cà Phê Đen',
      price: 54000
    },
    {
      id: 'pd102',
      name: 'Thuốc Lá',
      price: 22000
    },

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
  ThanhTien() {
    let s = this.total.sl * this.total.dg

    return s;
  }
}
