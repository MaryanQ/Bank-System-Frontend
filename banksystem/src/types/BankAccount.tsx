export default interface BankAccount {
  id: number;
  accountNumber: string;
  balance: number;
  customerId: number; // Reference to the customer ID (simplified relationship)
}
