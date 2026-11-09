import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../services/product';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
  standalone: true,
})
export class Products implements OnInit {
  products = signal<any[]>([]);
  constructor(private productService: Product) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.products.set(response);
        console.log('reçu', response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  protected handlerDelete(product: any) {
    let v = confirm('etes vous sure de vouloir supprimer ?');
    if (v) {
      this.productService.deleteProduct(product).subscribe({
        next: (value) => {
          this.getAllProducts();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
