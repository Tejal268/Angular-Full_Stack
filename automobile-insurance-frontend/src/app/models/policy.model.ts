export class PolicyModel {
  id!: number;
  
  issuedDate!: string;
  payment!: {
    id: number;
    paymentDate: string;
    amount: number;
    paymentMode: string;
    user: {
      id: number;
      name: string;
      email: string;
      role: string;
    };
    quote: {
      id: number;
      amount: number;
      expiryDate: string;
    };
  };
}
