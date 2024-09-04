import { makeOptions, handleHttpErrors } from "./FetchUtilis";

import Customer from "../types/Customer";
//import BankAccount from "../types/BankAccount";
//import  Transaction  from "../types/Transaction";

const API_URL = "http://localhost:8081";

const Customer_URL = API_URL + "/customers";
//const bankAccount_URL = API_URL + "/bank-accounts";
//const transaction_URL = API_URL + "/transactions";

export const getCustomers = (): Promise<Customer[]> => {
  return fetch(Customer_URL).then(handleHttpErrors);
};

export const getCustomerById = (id: number): Promise<Customer> => {
  return fetch(`${Customer_URL}/${id}`).then(handleHttpErrors);
};

export const createCustomer = (customer: Customer): Promise<Customer> => {
  const options = makeOptions("POST", customer);
  return fetch(Customer_URL, options).then(handleHttpErrors);
};

export const updateCustomer = (customer: Customer): Promise<Customer> => {
  const options = makeOptions("PUT", customer);
  return fetch(`${Customer_URL}/${customer.id}`, options).then(
    handleHttpErrors
  );
};

export const deleteCustomer = (id: number): Promise<Customer> => {
  const options = makeOptions("DELETE", null);
  return fetch(`${Customer_URL}/${id}`, options).then(handleHttpErrors);
};
