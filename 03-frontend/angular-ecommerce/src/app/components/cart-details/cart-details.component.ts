import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css'
})
export class CartDetailsComponent implements OnInit {
removeTempCartItem(_t14: CartItem) {
throw new Error('Method not implemented.');
}


  cartItems: CartItem[] = []
  totalPrice: number = 0;
  totalQuantity: number = 0;
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
    //get handle to the cart item
    this.cartItems = this.cartService.cartItems;
    // subscribe to cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    // subscribe to cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )
    // subscribe to cart totalQuantity and totalPrice
    this.cartService.computeCartTotals();
  }
  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }
  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }
  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }
}
