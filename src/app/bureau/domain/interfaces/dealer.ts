 
  interface IDealer {
    id?: number;
    dealer_name: string;
    dealer_business_name: string;
    address: string;
    phone_number: string;
    email: string;
    one_time_password: string;
    password?: string;
    created_at?: string;
  }
  interface ILogin { 
    email: string; 
    password?: string; 
  }

  interface IDealerLogin {
    error?: any;
    message: string;
    dealer: Dealer;
  }
  interface Dealer {
    id: number;
    dealer_name: string;
    dealer_business_name: string;
    address: string;
    phone_number: string;
    email: string;
    one_time_password: string;
    password: string;
    created_at: string;
  }