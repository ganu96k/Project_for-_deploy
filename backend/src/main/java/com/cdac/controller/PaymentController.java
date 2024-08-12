package com.cdac.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.cdac.dto.PaymentRequestDto;
import com.cdac.dto.PaymentResponseDto;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("api/payment/")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

    Logger LOG = LoggerFactory.getLogger(PaymentController.class);

    @Value("${razorpay.key_id}")
    private String razorpayKeyId;

    @Value("${razorpay.key_secret}")
    private String razorpayKeySecret;

    // Method to create a Razorpay order
    @PostMapping("/create-order")
    public ResponseEntity<PaymentResponseDto> createOrder(@RequestBody PaymentRequestDto paymentRequestDto) {
        try {
            RazorpayClient client = new RazorpayClient(razorpayKeyId, razorpayKeySecret);

            // Convert amount to paise as Razorpay requires the amount to be in the smallest currency unit
            int amount = paymentRequestDto.getAmount() * 100;

            JSONObject orderRequest = new JSONObject();
            orderRequest.put("amount", amount);
            orderRequest.put("currency", "INR");
            orderRequest.put("receipt", "txn_" + System.currentTimeMillis());

            Order order = client.Orders.create(orderRequest);

            PaymentResponseDto responseDto = new PaymentResponseDto();
            responseDto.setOrderId(order.get("id"));
            responseDto.setAmount(order.get("amount"));
            responseDto.setCurrency(order.get("currency"));
            responseDto.setReceipt(order.get("receipt"));

            return new ResponseEntity<>(responseDto, HttpStatus.OK);

        } catch (Exception e) {
            LOG.error("Error in creating Razorpay order", e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Method to update payment status after completion
    @PostMapping("/update-payment-status")
    public ResponseEntity<String> updatePaymentStatus(@RequestParam String orderId, @RequestParam String paymentId, @RequestParam String status) {
        try {
            // Logic to update the payment status in the database
            // For example, mark the appointment as "Paid" in your Appointment table

            return new ResponseEntity<>("Payment status updated successfully", HttpStatus.OK);
        } catch (Exception e) {
            LOG.error("Error in updating payment status", e);
            return new ResponseEntity<>("Failed to update payment status", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
 