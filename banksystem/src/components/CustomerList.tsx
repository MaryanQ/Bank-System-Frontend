import React from "react";
import { useState, useEffect } from "react";
import { getCustomers } from "../service/ApiFade";
import Customer from "../types/Customer";

export const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    getCustomers()
      .then(setCustomers)
      .catch((error) => console.error("Error fetching customers: ", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-10 flex flex-col  items-center justify center py-20">
      <h1 className="text-4xl front-bold text-gray-800 mb-6">Customer List</h1>
      <ul className="w-full max-w-md space-y-4">
        {customers.map((customer) => (
          <li
            key={customer.id}
            className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
          >
            <div className="text lg font-semibord text-gray-700">
              {customer.name}
            </div>
            <div className="text-gray-500"> {customer.email}</div>
            <div className="mt-2 text-blue-600 font-bold">
              Balance: ${customer.balance}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
