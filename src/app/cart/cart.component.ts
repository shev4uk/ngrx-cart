import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../products/product.model';
import { deleteCart, removeProductCart, updateProductCart } from '../store/actions/cart.actions';
import { CartState } from '../store/reducers/cart.reducer';
import { selectProductCart } from '../store/selectors/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products$: Observable<Product[]> = this.store.pipe(select(selectProductCart));

  constructor(
    private store: Store<CartState>
  ) { }

  ngOnInit(): void {
  }

  removeProduct(id: number) {
    this.store.dispatch(removeProductCart(id));
  }

  cleanCart() {
    this.store.dispatch(deleteCart());
  }

  updateQuantity(product: Product, quantity) {
    this.store.dispatch(updateProductCart(product, quantity));
  }

}
