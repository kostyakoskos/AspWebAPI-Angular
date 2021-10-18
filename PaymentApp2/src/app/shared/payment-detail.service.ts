import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private htpp: HttpClient) { }

  readonly baseURL = 'https://localhost:44315/api/PaymentDetail'
  // readonly baseURL = 'https://localhost:44315/swagger/index.html';

  formData:PaymentDetail =  new PaymentDetail();

  postPaymentDetail() {
    return this.htpp.post(this.baseURL, this.formData);
  }
}
