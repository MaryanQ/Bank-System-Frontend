import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCustomers } from "../service/ApiFade";
import Customer from "../types/Customer";

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    getCustomers()
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error fetching customers: ", error));
  }, []);

  const totalCustomers = customers.length;

  const averageBalance =
    totalCustomers > 0
      ? customers.reduce((sum, customer) => sum + customer.balance, 0) /
        totalCustomers
      : 0;

  const threshold = Math.max(...customers.map((customer) => customer.id)) * 0.9;
  const newCustomers = customers.filter(
    (customer) => customer.id > threshold
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800">
            Customer Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Overview of your customer metrics
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-700">Total Customers</h2>
            <p className="text-3xl font-bold mt-4">{totalCustomers}</p>
            <p className="text-gray-500 mt-2">Since last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-700">Average Balance</h2>
            <p className="text-3xl font-bold mt-4">
              ${averageBalance.toFixed(2)}
            </p>
            <p className="text-gray-500 mt-2">Across all customers</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-700">New Customers</h2>
            <p className="text-3xl font-bold mt-4">{newCustomers}</p>
            <p className="text-gray-500 mt-2">In the last month</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Customer Distribution
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* You can add a chart component here */}
            <p className="text-gray-500">[Chart Component]</p>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Quick Actions
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg flex justify-around">
            <button
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600"
              onClick={() => navigate("/add-customer")}
            >
              Add New Customer
            </button>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
              onClick={() => navigate("/")}
            >
              View All Customers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
