import { Service } from '@angular/core';

@Service()
export class Product {
  products = [
    { id: 1, name: 'computer', price: 2500, selected: true },
    { id: 2, name: 'printer', price: 1200, selected: false },
    { id: 3, name: 'smart phone', price: 1300, selected: true },
  ];

  constructor() {
  }

  getAllProducts(){
    return this.products;
  }

  deleteProduct(product : any){
    this.products = this.products.filter((p) => p.id != product.id);
  }
}
