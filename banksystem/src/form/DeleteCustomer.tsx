import { useParams, useNavigate } from "react-router-dom";
import { deleteCustomer } from "../service/ApiFade";

export const DeleteCustomer: React.FC = () => {
  const { customerId } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    const id = parseInt(customerId || "0"); // Ensure customerId is a valid number
    if (isNaN(id)) {
      console.error("Invalid customerId:", customerId);
      return;
    }

    deleteCustomer(id)
      .then(() => {
        navigate("/"); // Navigate back to customer list after deleting
      })
      .catch((error) => {
        console.error("Error deleting customer:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Delete Customer {customerId}
        </h2>
        <p className="text-center text-lg">
          Are you sure you want to delete this customer?
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleDelete}
          >
            Yes, Delete
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
