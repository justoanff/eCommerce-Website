package com.project.ecommerce.service;

import com.project.ecommerce.dao.CustomerRepository;
import com.project.ecommerce.dto.Purchase;
import com.project.ecommerce.dto.PurchaseResponse;
import com.project.ecommerce.entity.Customer;
import com.project.ecommerce.entity.Order;
import com.project.ecommerce.entity.OrderItem;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {
    private CustomerRepository customerRepository;

    @Autowired
    public CheckoutServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    @Transactional()
    public PurchaseResponse placeOrder(Purchase purchase) {
        //retrieve this order info from dto
        Order order = purchase.getOrder();
        // gen tracking num
        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);
        // populate order with orderItems
        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> {
            order.add(item);
        });
        // populate order w billingaddr and shippaddr
        order.setBillingAddress(purchase.getBillingAddress());
        order.setShippingAddress(purchase.getShippinhAddress());

        // populate order w order
        Customer customer = purchase.getCustomer();
        customer.add(order);
        //save to the db
        customerRepository.save(customer);
        // return a mess
        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {
        // gen a rnd UUID number
        return UUID.randomUUID().toString();
    }
}
