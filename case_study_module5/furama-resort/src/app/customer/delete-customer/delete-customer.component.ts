import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from '../../../service-resort/customer-service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../Customer';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customer: Customer;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog : MatDialogRef<DeleteCustomerComponent>,
  @Inject(MAT_DIALOG_DATA) public data : any ) {


  }

  ngOnInit(): void {
  }

  delete(){
    this.customerService.deleteCustomer(this.data.id).subscribe(()=>{
      this.dialog.close(true);

    })
  }
}
