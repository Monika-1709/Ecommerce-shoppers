import { ConfigProvider } from "antd";
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "black",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
}
