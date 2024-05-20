import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails()
    })
  }
  handleProductDetails(): void {
    //get id param and string and covert to num
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }
  addToCart() {
    console.log(`Adding to cart:${this.product.name}, ${this.product.unitPrice}`)
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }
}
