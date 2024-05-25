package com.project.ecommerce.service;

import com.project.ecommerce.dto.Purchase;
import com.project.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
