import { Component, OnInit } from '@angular/core';
import Business from 'src/app/business';
import { BusinessService } from 'src/app/business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.scss']
})
export class GstGetComponent implements OnInit {
  businesses: Business[];

  constructor(private bs: BusinessService, private router: Router) { }

  ngOnInit() {
    this.bs.getBusinesses().subscribe((data: Business[]) => {
      this.businesses = data;
      console.log(this.businesses);
  });
  }

  editCustomerDetails(business){
    let customerNumber = business.business_gst_number;
    let customerId = business._id;
    this.businesses.forEach(element => {
      if(element.business_gst_number == customerNumber){
        this.router.navigate(['business/edit', customerId]);
      }
    });
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }
  
}
