import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(public service:PaymentDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  // formData:PaymentDetail = new PaymentDetail();

    onSubmit(form:NgForm){
      this.service.postPaymentDetail().subscribe(
        res => {
          console.log('add');
          this.resetForm(form);
          this.toastr.success('Sumbit success', 'Payment Detail Register')
        },
        err => {
          console.log('error');
        }
      )
    }

    resetForm(form:NgForm){
      form.form.reset();
      this.service.formData = new PaymentDetail();
    }

}
