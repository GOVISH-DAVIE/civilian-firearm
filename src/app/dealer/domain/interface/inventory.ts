export interface IDealerInventory {
    message: string;
    data: Datum[];
  }
  interface Datum {
    id: number;
    description: string;
    quantity: number;
    created_at: string;
    itemMasterId: number;
    dealerId: number;
    dealer: Dealer;
    item_master: Itemmaster;
  }
  interface Itemmaster {
    id: number;
    item_name: string;
    item_image: string;
    calibre: string;
    county_origin: string;
    created_at: string;
    fireArmId: number;
    firearm_type: Firearmtype;
  }
  interface Firearmtype {
    id: number;
    name: string;
    created_at: string;
  }
  interface Dealer {
    id: number;
    dealer_name: string;
    dealer_business_name: string;
    address: string;
    phone_number: string;
    email: string;
    one_time_password: string;
    password?: any;
    created_at: string;
  }