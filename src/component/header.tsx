// import {
//   ShoppingCartOutlined,
//   UserOutlined,
//   SearchOutlined,
// } from "@ant-design/icons";
// import { Avatar, Input, message } from "antd";
// import { useState } from "react";
// import Link from "next/link";

// interface UserData {
//   name: string;
//   email: string;
// }

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   price: number;
// }

// interface Props {
//   userData: UserData;
//   openModal: () => void;
//   closeModal: () => void;
//   isModalOpen: boolean;
//   products: Product[];
//   setFilteredProducts: (products: Product[]) => void;
// }

// const Header: React.FC<Props> = ({
//   userData,
//   openModal,
//   closeModal,
//   isModalOpen,
//   products,
//   setFilteredProducts,
// }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (value: string) => {
//     setSearchQuery(value);
//     const filteredProducts = products.filter((product) =>
//       product.title.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredProducts(filteredProducts);
//     if (filteredProducts.length === 0) {
//       message.info("Product not found");
//     }
//   };

//   return (
//     <div className="sticky top-0 bg-primary p-5 flex justify-between items-center z-10">
//       <h1 className="text-2xl font-bold text-red-500">Shoppers</h1>
//       <div className="flex gap-5 text-white items-center">
//         <Input
//           placeholder="Search products..."
//           prefix={<SearchOutlined />}
//           onChange={(e) => handleSearch(e.target.value)}
//           className="px-3 py-1 rounded-lg border-none focus:outline-none"
//         />
//         <Link href="/cart">
//           <ShoppingCartOutlined className="text-3xl" />
//         </Link>
//         <Avatar
//           className="bg-white"
//           icon={<UserOutlined className="text-black" />}
//           onClick={openModal}
//         />
//         {isModalOpen && (
//           <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-8 rounded-lg text-black">
//               <h2 className="text-lg font-semibold">User Profile</h2>
//               <p>Name: {userData.name}</p>
//               <p>Email: {userData.email}</p>
//               <button
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 onClick={closeModal}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header
// Header.tsx
// Header.tsx
// Header.tsx
import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Avatar, Input } from "antd";
import { UserData, Product } from "@/types";

interface Props {
  userData: UserData;
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
  products: Product[];
  cartProducts: Product[];
  setFilteredProducts: (products: Product[]) => void;
  addToCart: (product: Product) => void;
}

const Header: React.FC<Props> = ({
  userData,
  openModal,
  closeModal,
  isModalOpen,
  products,
  cartProducts,
  setFilteredProducts,
  addToCart,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
    if (filteredProducts.length === 0) {
      alert("Product not found");
    }
  };
  console.log("in header", cartProducts);

  return (
    <div className="sticky top-0 bg-primary p-5 flex justify-between items-center z-10">
      <h1 className="text-2xl font-bold text-red-500">Shoppers</h1>
      <div className="flex gap-5 text-white items-center">
        <Input
          placeholder="Search products..."
          prefix={<SearchOutlined />}
          onChange={(e) => handleSearch(e.target.value)}
          className="px-3 py-1 rounded-lg border-none focus:outline-none"
        />
        <Link
          href={{
            pathname: "/cart",
            query: { cart: JSON.stringify(cartProducts) }, // Pass cart products as query parameter
          }}
        >
          <ShoppingCartOutlined className="text-3xl" />
        </Link>
        <Avatar
          className="bg-white"
          icon={<UserOutlined className="text-black" />}
          onClick={openModal}
        />
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg text-black">
              <h2 className="text-lg font-semibold">User Profile</h2>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
