"use client";
import { Form, Input, Button } from "antd";
// import { useRouter } from "next/router";
import Link from "next/link";

interface userType {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  // const router = useRouter();

  // const handleRegister = () => {
  //   // Redirect to the home page
  //   router.push("/");
  // };

  const onFinish = (values: userType) => {
    console.log("Received values:", values);
    // Call your registration logic here
    // Redirect to the home page
    // router.push("/");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="h-full bg-primary flex items-center justify-center">
        <h1 className="text-7xl font-bold text-red-500">Shopers</h1>
      </div>
      <div className=" flex items-center justify-center h-full">
        <Form
          className="w-[400px] flex flex-col gap-2"
          layout="vertical"
          onFinish={onFinish}
        >
          <h1 className="text-2xl font-bold my-1  ">Sign Up</h1>
          <Form.Item
            name="name"
            label="Name :"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email :"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password :"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="password" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            // onClick={handleRegister}
          >
            Register
          </Button>
          <div className="text-primary m-5">
            Already have Account ?<Link href="/auth/login">Login</Link>
          </div>
          {/* <Link href="/auth/login">Login</Link> */}
        </Form>
      </div>
    </div>
  );
}
