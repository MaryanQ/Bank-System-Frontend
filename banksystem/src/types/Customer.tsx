import BankAccount from "./BankAccount";

export default interface Customer {
  id: number;
  name: string;
  email: string;
  balance: number;
  bankAccount?: BankAccount[];

  // Optional array of BankAccount (to handle lazy loading if needed)
}
