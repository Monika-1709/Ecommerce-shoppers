"use client";
import { Form, Input, Button, message } from "antd";
import Link from "next/link";

import React from "react";

const CheckoutPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values:", values);

    const { name, email, address } = values;
    if (!name || !email || !address) {
      message.error("Please fill in all fields");
      return;
    }
  };

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
          className="mb-4"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
          className="mb-4"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please enter your address" }]}
          className="mb-4"
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Link href="/cart">
            {" "}
            <Button type="primary" className="mr-2">
              Back
            </Button>{" "}
          </Link>
          <Link href="/payment">
            <Button type="primary" htmlType="submit" className="">
              Payment
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CheckoutPage;
