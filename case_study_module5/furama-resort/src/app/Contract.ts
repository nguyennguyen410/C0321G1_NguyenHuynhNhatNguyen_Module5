export interface Contract {
  id: number;
  contractId: string;
  dateContract: {
    contractStartDate: string;
    contractEndDate: string;
  }
  contractDeposit: number;
  contractTotalMoney: number;
  employee: number;
  customer: number;
  service: number;
  contractDetails: number;
}
