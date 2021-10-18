import { Component } from '@angular/core';
import { PaymentDetail } from './shared/payment-detail.model';
// import initClass from './shared/payment-detail.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaymentApp2';
  // formData:PaymentDetail = new PaymentDetail();
  // data = new initClass({paymentDetailId: 1, cardOwnerName: '', cardNumber: '', expirationDate: '', securityCode: ''});
}
