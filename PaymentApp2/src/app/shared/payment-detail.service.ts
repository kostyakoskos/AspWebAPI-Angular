import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private htpp: HttpClient) { }

  readonly baseURL = 'https://localhost:61236/api/PaymentDetail'

  formData:PaymentDetail = new PaymentDetail();
}
