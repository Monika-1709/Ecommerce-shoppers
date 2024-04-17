"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Form, Input, Button, Radio, message } from "antd";

const PaymentMethod: React.FC = () => {
  const [paymentType, setPaymentType] = useState("cashOnDelivery");

  const handlePaymentTypeChange = (e: any) => {
    setPaymentType(e.target.value);
  };

  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };
  const handleSendOTP = () => {
    console.log("OTP sent!");
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Method</h1>
      <Form
        name="paymentMethod"
        layout="vertical"
        initialValues={{ paymentType }}
        onFinish={onFinish}
      >
        <Form.Item name="paymentType">
          <Radio.Group onChange={handlePaymentTypeChange}>
            <Radio value="cashOnDelivery">Cash on Delivery</Radio>
            <Radio value="upi">UPI Payment</Radio>
            <Radio value="card">Credit/Debit Card</Radio>
          </Radio.Group>
        </Form.Item>
        {paymentType === "card" && (
          <>
            <Form.Item
              label="Card Number"
              name="cardNumber"
              rules={[
                { required: true, message: "Please input your card number!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Expiration Date"
              name="expirationDate"
              rules={[
                { required: true, message: "Please input expiration date!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="CVV"
              name="cvv"
              rules={[{ required: true, message: "Please input your CVV!" }]}
            >
              <Input />
            </Form.Item>
          </>
        )}
        {paymentType === "upi" && (
          <>
            <Form.Item
              label="UPI ID"
              name="upiId"
              rules={[{ required: true, message: "Please input your UPI ID!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button onClick={handleSendOTP}>Send OTP</Button>
            </Form.Item>
            <Form.Item
              label="OTP"
              name="otp"
              rules={[{ required: true, message: "Please input OTP!" }]}
            >
              <Input />
            </Form.Item>
          </>
        )}

        <Form.Item>
          <Link href="/checkout">
            <Button type="primary" className="mr-2">
              Back
            </Button>{" "}
          </Link>
          <Link href="/order">
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => message.success("order Placed successfully")}
            >
              Submit
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PaymentMethod;
