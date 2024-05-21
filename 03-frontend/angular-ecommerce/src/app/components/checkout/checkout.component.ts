import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { Event } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  totalPrice: number = 0;
  totalQuantity: number = 0;


  checkOutFormGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.checkOutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      })
    });
  }
  onSubmit() {
    console.log("Handling the submit form");
    console.log(this.checkOutFormGroup.get('customer')!.value);
  }
  copyShippingAddressToBillingAddress(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target?.checked) {
      this.checkOutFormGroup.controls['billingAddress'].setValue(this.checkOutFormGroup.controls['shippingAddress'].value);
    } else {
      this.checkOutFormGroup.controls['billingAddress'].reset();
    }
  }
}
