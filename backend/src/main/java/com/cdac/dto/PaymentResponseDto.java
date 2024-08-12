package com.cdac.dto;

public class PaymentResponseDto {

	 private String orderId;
	    private String amount;
	    private String currency;
	    private String receipt;

	    // Getters and Setters
	    public String getOrderId() {
	        return orderId;
	    }

	    public void setOrderId(String orderId) {
	        this.orderId = orderId;
	    }

	    public String getAmount() {
	        return amount;
	    }

	    public void setAmount(String string) {
	        this.amount = string;
	    }

	    public String getCurrency() {
	        return currency;
	    }

	    public void setCurrency(String currency) {
	        this.currency = currency;
	    }

	    public String getReceipt() {
	        return receipt;
	    }

	    public void setReceipt(String receipt) {
	        this.receipt = receipt;
	    }
}
