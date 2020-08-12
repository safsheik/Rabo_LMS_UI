import { User } from '../common/user.model'
import { PropertyAddress } from '../common/address.model'
import { Address } from 'cluster';
export class Loan {
    public loanId: string;
    public loanUser: string;
    public amount: string;
    public userDetails: User;
    public propertyAddress: PropertyAddress;

  constructor(loanId: string, loanUser: string, amount: string, userDetails: User, propertyAddress: PropertyAddress) {
    this.loanId = loanId;
    this.loanUser = loanUser;
    this.amount = amount;
    this.userDetails = userDetails;
    this.propertyAddress = propertyAddress;
  }
}