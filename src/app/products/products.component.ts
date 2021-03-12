import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCart } from '../store/actions/cart.actions';
import { CartState } from '../store/reducers/cart.reducer';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 1,
      description: 'Some quick example text to build on the card title and make up the bulk of the card'
    }, {
      id: 2,
      name: 'Product 2',
      price: 30,
      quantity: 1,
      description: 'Some quick example text to build on the card title and make up the bulk of the card'
    }, {
      id: 3,
      name: 'Product 3',
      price: 100,
      quantity: 1,
      description: 'Some quick example text to build on the card title and make up the bulk of the card'
    }, {
      id: 4,
      name: 'Product 4',
      price: 80,
      quantity: 1,
      description: 'Some quick example text to build on the card title and make up the bulk of the card'
    }
  ]

  constructor(
    private store: Store<CartState>
  ) { }

  ngOnInit(): void {
  }

  addCart(product) {
    this.store.dispatch(addCart(product));
  }

}
