"use client";

// import { Modal, Rate, Button, message } from "antd";
// import { useState, useEffect } from "react";
// import Header from "@/component/header";

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   price: number;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }

// async function getData(): Promise<Product[]> {
//   const res = await fetch("https://fakestoreapi.com/products");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default function Home() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getData();
//         setProducts(data);
//         setFilteredProducts(data); // Initially set filteredProducts to all products
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   const handleProductClick = (product: Product) => {
//     setSelectedProduct(product);
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//   };

//   return (
//     <>
//       <Header
//         userData={{ name: "John Doe", email: "johndoe@example.com" }}
//         openModal={() => {}}
//         closeModal={() => {}}
//         isModalOpen={false}
//         products={products}
//         setFilteredProducts={setFilteredProducts}
//       />
// <div className="container mx-auto py-8">
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//     {filteredProducts.map((product) => (
//       <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-48 object-cover mb-4 cursor-pointer"
//           onClick={() => handleProductClick(product)}
//         />
//         <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
//         <p className="text-blue-600 font-semibold mt-2">
//           ${product.price}
//         </p>
//         <Rate value={(product.rating.rate / 5) * 5} disabled />
//         <span> {product.rating.count} reviews</span>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600">
//           Add to Cart
//         </button>
//       </div>
//     ))}
//   </div>

//   <Modal
//     title={selectedProduct?.title}
//     visible={!!selectedProduct}
//     onCancel={handleCloseModal}
//     footer={[
//       <Button key="back" onClick={handleCloseModal}>
//         Close
//       </Button>,
//       <Button key="submit" type="primary">
//         Add to Cart
//       </Button>,
//     ]}
//   >
//     <div>
//       <img
//         src={selectedProduct?.image}
//         alt={selectedProduct?.title}
//         className="w-full object-cover mb-4"
//       />
//       <p className="text-lg font-semibold mb-2">
//         {selectedProduct?.title}
//       </p>
//       <p className="text-blue-600 font-semibold">
//         ${selectedProduct?.price}
//       </p>
//       <Rate value={(selectedProduct?.rating.rate / 5) * 5} disabled />
//       <span> {selectedProduct?.rating.count} reviews</span>
//       <p>{selectedProduct?.description}</p>
//     </div>
//   </Modal>
// </div>
//     </>
//   );
// }

import { Modal, Rate, Button, message } from "antd";
import { useState, useEffect } from "react";
import Header from "@/component/header";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

async function getData(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
    message.success("Product added to cart");
    console.log("cart product", product);
  };

  return (
    <>
      <Header
        userData={{ name: "John Doe", email: "johndoe@example.com" }}
        openModal={() => {}}
        closeModal={() => {}}
        isModalOpen={false}
        products={products}
        cartProducts={cart} // Pass cart products to Header
        setFilteredProducts={setFilteredProducts}
        addToCart={handleAddToCart}
      />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4 cursor-pointer"
                onClick={() => handleProductClick(product)}
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-blue-600 font-semibold mt-2">
                ${product.price}
              </p>
              <Rate value={(product.rating.rate / 5) * 5} disabled />
              <span> {product.rating.count} reviews</span>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <Modal
          title={selectedProduct?.title}
          visible={!!selectedProduct}
          onCancel={handleCloseModal}
          footer={[
            <Button key="back" onClick={handleCloseModal}>
              Close
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={() => handleAddToCart(selectedProduct)}
            >
              Add to Cart
            </Button>,
          ]}
        >
          <div>
            <img
              src={selectedProduct?.image}
              alt={selectedProduct?.title}
              className="w-full object-cover mb-4"
            />
            <p className="text-lg font-semibold mb-2">
              {selectedProduct?.title}
            </p>
            <p className="text-blue-600 font-semibold">
              ${selectedProduct?.price}
            </p>
            <Rate value={(selectedProduct?.rating.rate / 5) * 5} disabled />
            <span> {selectedProduct?.rating.count} reviews</span>
            <p>{selectedProduct?.description}</p>
          </div>
        </Modal>
      </div>
    </>
  );
}
