import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCustomer } from "../service/ApiFade";

export const AddCustomer: React.FC = () => {
  const navigate = useNavigate();

  const [customerData, setCustomerData] = useState({
    id: 0, // Assuming a default value of 0 for new customers
    name: "",
    email: "",
    balance: 0,
    createdAt: new Date().toISOString(),
  });

  const handleAddCustomer = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (customerData.name.trim() === "" || customerData.email.trim() === "") {
      alert("Name and Email are required!");
      return;
    }
    if (customerData.balance < 0) {
      alert("Balance cannot be negative");
      return;
    }

    createCustomer(customerData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding customer: ", error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Add New Customer
        </h2>
        <form
          onSubmit={handleAddCustomer}
          className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Customer Name
            </label>
            <input
              type="text"
              value={customerData.name}
              onChange={(e) =>
                setCustomerData({ ...customerData, name: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Customer Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Customer Email
            </label>
            <input
              type="email"
              value={customerData.email}
              onChange={(e) =>
                setCustomerData({ ...customerData, email: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Customer Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Balance
            </label>
            <input
              type="number"
              value={customerData.balance}
              onChange={(e) =>
                setCustomerData({
                  ...customerData,
                  balance: parseFloat(e.target.value),
                })
              }
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Balance"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
};
