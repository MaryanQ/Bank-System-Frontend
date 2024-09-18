import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomerList } from "./components/CustomerList";
import { EditCustomer } from "./form/EditCustomer";
import { DeleteCustomer } from "./form/DeleteCustomer";
import { AddCustomer } from "./form/AddCustomer";
import { Dashboard } from "./dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navigation Bar */}
        <header className="bg-white shadow mb-8">
          <nav className="container mx-auto flex justify-between py-4">
            <ul className="flex space-x-8 text-gray-800 font-semibold">
              <li>
                <a href="/dashboard" className="hover:text-blue-500">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-500">
                  Customers
                </a>
              </li>
              <li>
                <a href="/add-customer" className="hover:text-blue-500">
                  Add Customer
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/edit/:customerId" element={<EditCustomer />} />
          <Route path="/delete/:customerId" element={<DeleteCustomer />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
