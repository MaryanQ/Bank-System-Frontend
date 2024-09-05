import React, { useState } from "react";
import { createCustomer } from "../service/ApiFade"; // Assuming this is where you defined your API functions
import Customer from "../types/Customer"; // Make sure you have this type defined

export const CreateCustomer: React.FC = () => {
  const [customer, setCustomer] = useState<Customer>({
    id: 0,
    name: "",
    email: "",
    balance: 0,
  });
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: name === "balance" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCustomer(customer);
      setFeedbackMessage("Customer created successfully!");
      setCustomer({ id: 0, name: "", email: "", balance: 0 }); // Reset form after success
    } catch (error) {
      setFeedbackMessage("Failed to create customer. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Create Customer</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {feedbackMessage && <p>{feedbackMessage}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Balance</label>
          <input
            type="number"
            name="balance"
            value={customer.balance}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Create Customer
        </button>
      </form>
    </div>
  );
};
