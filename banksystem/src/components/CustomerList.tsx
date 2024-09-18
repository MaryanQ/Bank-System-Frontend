import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCustomers } from "../service/ApiFade";
import Customer from "../types/Customer";

export const CustomerList: React.FC = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    getCustomers()
      .then(setCustomers)
      .catch((error) => console.error("Error fetching customers: ", error));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-12">
        Customer List
      </h1>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-6"
        onClick={() => navigate("/add-customer")} // Navigate to add customer page
      >
        Add Customer
      </button>

      <ul className="w-full max-w-lg mx-auto space-y-8">
        {customers.map((customer) => (
          <li
            key={customer.id}
            className="p-6 bg-white shadow-md rounded-lg flex justify-between items-center border border-gray-200 transition-shadow duration-300 hover:shadow-lg"
          >
            <div>
              <div className="text-xl font-semibold text-gray-800">
                {customer.name}
              </div>
              <div className="text-gray-600">{customer.email}</div>
              <div
                className={`mt-2 ${
                  customer.balance > 0 ? "text-green-500" : "text-red-500"
                } font-bold`}
              >
                Balance: ${customer.balance}
              </div>
            </div>
            <div className="flex space-x-4">
              {/* Edit Button */}
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => navigate(`/edit/${customer.id}`)} // Pass the customer ID in the URL
              >
                Edit
              </button>

              {/* Delete Button */}
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => navigate(`/delete/${customer.id}`)} // Navigate to delete page
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
