import React from "react";
import { Bar } from "react-chartjs-2"; // Assuming you're using Chart.js for charts
import Customer from "../types/Customer";

const CustomerStats: React.FC<{ customers: Customer[] }> = ({ customers }) => {
  const data = {
    labels: customers.map((customer) => customer.name),
    datasets: [
      {
        label: "Customer Balances",
        data: customers.map((customer) => customer.balance),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default CustomerStats;
