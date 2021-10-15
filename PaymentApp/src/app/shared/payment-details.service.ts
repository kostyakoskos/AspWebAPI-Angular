import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-details.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:61236/api/Detail';

  formData:PaymentDetail = new PaymentDetail();
}