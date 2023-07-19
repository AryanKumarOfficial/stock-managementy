"use client";
import Header from '@/components/Header'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  // Sample stock data
  const [productForm, setProductForm] = useState({});

  const handleInputChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    console.log(productForm, 'productForm');
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productForm),
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        toast.success('Product added successfully');

      } else {
        toast.error('Something went wrong');
      }
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <div className="container mx-auto px-4 py-8 bg-green-50">
        <h1 className="text-3xl mb-4 font-bold">Search a Product</h1>
        <div className="flex mb-4">
          <input
            type="text"
            id="searchProduct"
            name="searchProduct"
            className="w-full p-2 border border-gray-300 rounded-r-none"
            placeholder="Search..."
          />
          <select className="p-2 border border-gray-300 rounded-l-none bg-white">
            <option value="">All</option>
            <option value="name">Name</option>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      <div className="container mx-auto px-4 my-6 py-8 bg-green-50">
        <h1 className="text-3xl mb-4 font-bold">Add Product</h1>
        <form className="mb-8" >

          <div className="mb-4">
            <label htmlFor="productName" className="block mb-2 font-bold">
              Name:
            </label>
            <input
              type="text"
              id="productName"
              name="name"
              value={productForm.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              requigreen
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productQuantity" className="block mb-2 font-bold">
              Quantity:
            </label>
            <input
              type="number"
              id="productQuantity"
              name="quantity"
              value={productForm.quantity}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              requigreen
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productId" className="block mb-2 font-bold">
              Price:
            </label>
            <input
              type="text"
              id="productId"
              name="price"
              value={productForm.price}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              requigreen
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleAddProduct}
          >
            Add Stock
          </button>
        </form>
      </div>
      <div className="container mx-auto px-4 py-8 my-6 bg-green-50">

        <h1 className="text-3xl mb-4 font-bold">My Current Stock</h1>
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100">ID</th>
              <th className="py-2 px-4 bg-gray-100">Name</th>
              <th className="py-2 px-4 bg-gray-100">Quantity</th>
              <th className="py-2 px-4 bg-gray-100">Price</th>
            </tr>
          </thead>
          <tbody>
            {/* {stock.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 text-center">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">{item.price}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
}
