
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  url = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number):Observable<any> {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    return this.http.post(`${this.url}/add`, obj);
  }

  getBusinesses():Observable<any> {
    return this.http.get(`${this.url}`);
  }

  editBusiness(id):Observable<any> {
    return this.http.get(`${this.url}/edit/${id}`);
  }

  updateBusiness(person_name, business_name, business_gst_number, id):Observable<any> {
    const obj = {
        person_name: person_name,
        business_name: business_name,
        business_gst_number: business_gst_number
      };
    return this.http.post(`${this.url}/update/${id}`, obj);
  }

  deleteBusiness(id):Observable<any> {
    return this.http.get(`${this.url}/delete/${id}`);
  }

}