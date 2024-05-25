package com.project.ecommerce.dto;

import com.project.ecommerce.entity.Address;
import com.project.ecommerce.entity.Customer;
import com.project.ecommerce.entity.Order;
import com.project.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address shippinhAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
