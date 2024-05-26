import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./order-item";

export class Purchase {

    constructor(
        public customer: Customer = new Customer(),
        public shippingAddress: Address = new Address(),
        public billingAddress: Address = new Address(),
        public order: Order = new Order(),
        public orderItems: OrderItem[]= [new OrderItem()]) { }
}
