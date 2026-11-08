import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
  standalone: true,
})
export class Products implements OnInit {
  products! : Array<any>;

  constructor() {
  }

  ngOnInit() {
    this.products = [
      { id: 1, name: 'computer', price: 2500, selected: true },
      { id: 2, name: 'printer', price: 1200, selected: false },
      { id: 3, name: 'smart phone', price: 1300, selected: true },
    ];
  }

  protected handlerDelete(products: any) {
    let v = confirm('etes vous sure de vouloir supprimer ?')
    if (v){
      this.products = this.products.filter((p) => p.id != products.id);
    }
  }
}
