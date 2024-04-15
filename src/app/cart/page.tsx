// import { NextPageContext } from "next";
// import { ParsedUrlQuery } from "querystring";
// import React from "react";

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   price: number;
// }

// interface CartPageProps {
//   cart: Product[]; // Updated to be an array of Product objects
// }

// const CartPage: React.FC<CartPageProps> = ({ cart }) => {
//   console.log("hello", cart);

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-2xl font-bold">Cart</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {cart && cart.length > 0 ? (
//           cart.map((product) => (
//             <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-48 object-cover mb-4"
//               />
//               <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
//               <p className="text-blue-600 font-semibold mt-2">
//                 ${product.price}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">Your cart is empty</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export async function getServerSideProps({
//   query,
// }: NextPageContext<ParsedUrlQuery>) {
//   // Extract the 'cart' query parameter from the query object
//   const { cart } = query;

//   console.log("Query parameter 'cart':", cart); // Debugging: Log the value of 'cart'

//   // Parse the 'cart' query parameter into an array of Product objects
//   let cartProducts: Product[] = [];
//   if (typeof cart === "string") {
//     try {
//       cartProducts = JSON.parse(cart);
//       console.log("Parsed cart data:", cartProducts); // Debugging: Log the parsed cart data
//     } catch (error) {
//       console.error("Error parsing cart data:", error);
//     }
//   }

//   // Return the parsed cart data as props
//   return { props: { cart: cartProducts } };
// }

// export default CartPage;
export default function CartPage(){
  return<h1>hello</h1>
}