import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
  standalone: true,
})
export class Products {
  products = [
    {id: 1, name: 'computer', price: 2500, selected: true },
    {id: 1, name: 'printer', price: 1200, selected: false },
    {id: 1, name: 'smart phone', price: 1300, selected: true },
  ];
}
