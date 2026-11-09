import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
  standalone: true,
})
export class Products implements OnInit {
  products! : Array<any>;

  constructor(private productService : Product) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() : void {
  this.products = this.productService.getAllProducts();
}

  protected handlerDelete(product: any) {
    let v = confirm('etes vous sure de vouloir supprimer ?');
    if (v) {
      this.productService.deleteProduct(product);
      this.getAllProducts();
    }
  }
}
