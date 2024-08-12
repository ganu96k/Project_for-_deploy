package com.cdac.service;

import com.cdac.dto.PaymentRequestDto;
import com.cdac.dto.PaymentResponseDto;
import com.cdac.entity.Payment;
import com.cdac.repository.PaymentRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject; // Import this package
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Value("${razorpay.key-id}")
    private String razorpayKeyId;

    @Value("${razorpay.key-secret}")
    private String razorpayKeySecret;

    private final PaymentRepository paymentRepository;

    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public PaymentResponseDto createOrder(PaymentRequestDto request) throws Exception {
        RazorpayClient razorpayClient = new RazorpayClient(razorpayKeyId, razorpayKeySecret);

        // Create a JSONObject with the order details
        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", request.getAmount() * 100); // Amount in paisa
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "receipt#1");
        orderRequest.put("payment_capture", 1); // Auto capture payment

        // Create an order with Razorpay using the JSONObject
        Order order = razorpayClient.Orders.create(orderRequest);

        // Prepare the response DTO
        PaymentResponseDto responseDto = new PaymentResponseDto();
        responseDto.setOrderId(order.get("id").toString());
        responseDto.setAmount(order.get("amount").toString());
        responseDto.setCurrency(order.get("currency").toString());
        responseDto.setReceipt(order.get("receipt").toString());

        return responseDto;
    }

    public Payment savePayment(PaymentResponseDto paymentResponseDto) {
        Payment payment = new Payment();
        payment.setOrderId(paymentResponseDto.getOrderId());

        // Convert the amount from String to long
        payment.setAmount(Long.parseLong(paymentResponseDto.getAmount()));

        payment.setCurrency(paymentResponseDto.getCurrency());
        payment.setReceipt(paymentResponseDto.getReceipt());
        payment.setStatus("CREATED");

        return paymentRepository.save(payment);
    }
}
