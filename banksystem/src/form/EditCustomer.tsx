import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomerById, updateCustomer } from "../service/ApiFade";

export const EditCustomer: React.FC = () => {
  const { customerId } = useParams(); // Get customerId from URL
  const navigate = useNavigate();

  const [customerData, setCustomerData] = useState({
    id: 0,
    name: "",
    email: "",
    balance: 0,
  });

  useEffect(() => {
    if (customerId) {
      getCustomerById(Number(customerId)) // Fetch customer data by ID
        .then((customer) => {
          setCustomerData({
            id: customer.id,
            name: customer.name,
            email: customer.email,
            balance: customer.balance,
          });
        })
        .catch((error) => console.error("Error fetching customer:", error));
    }
  }, [customerId]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    updateCustomer({ ...customerData, id: Number(customerId) })
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error("Error updating customer: ", error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Edit Customer {customerId}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-white shadow-md rounded-lg mb-6"
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              value={customerData.email}
              onChange={(e) =>
                setCustomerData({ ...customerData, email: e.target.value })
              }
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
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            type="submit"
          >
            Update Customer
          </button>
        </form>
      </div>
    </div>
  );
};
