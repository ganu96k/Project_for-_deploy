package com.cdac.repository;

import com.cdac.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    // You can define custom queries if needed
}
