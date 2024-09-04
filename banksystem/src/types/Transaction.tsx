import BankAccount from "./BankAccount"; // Assuming you already have a BankAccount interface

export default interface Transaction {
  id: number;
  transactionDate: string; // Using string for dates as that's how dates are typically represented in JSON
  amount: number;
  transactionType: string;
  bankAccount: BankAccount; // Reference to the associated bank account
}
