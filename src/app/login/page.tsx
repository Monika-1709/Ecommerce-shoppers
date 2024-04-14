"use client";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

interface userType {
  email: string;
  password: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/");
  };
  function Login() {
    const onLogin = (value: userType) => {
      console.log(value);
    };
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="h-full bg-primary flex items-center justify-center">
        <h1 className="text-7xl font-bold text-red-500">Shopers</h1>
      </div>
      <div className=" flex items-center justify-center h-full">
        <Form
          className="w-[400px] flex flex-col gap-2"
          layout="vertical"
          onFinish={Login}
        >
          <h1 className="text-2xl font-bold my-1  ">Login</h1>

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
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
          <div className="text-primary m-5">
            New to Account ?<Link href="/auth/register"> Sign Up</Link>
          </div>
          {/* <Link href="/auth/login">Login</Link> */}
        </Form>
      </div>
    </div>
  );
}
