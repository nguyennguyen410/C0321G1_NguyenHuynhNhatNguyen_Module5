export class Customer {
  customerId: string;
  customerType: string;
  customerName: string;
  customerBirthday: string;
  customerGender: number;
  customerIdCard: number;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;

  // tslint:disable-next-line:max-line-length
  constructor(customerId: string, customerType: string, customerName: string, customerBirthday: string, customerGender: number, customerIdCard: number, customerPhone: string, customerEmail: string, customerAddress: string) {
    this.customerId = customerId;
    this.customerType = customerType;
    this.customerName = customerName;
    this.customerBirthday = customerBirthday;
    this.customerGender = customerGender;
    this.customerIdCard = customerIdCard;
    this.customerPhone = customerPhone;
    this.customerEmail = customerEmail;
    this.customerAddress = customerAddress;
  }
}
