import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient) { }

  getInvoices( ) {
    const headers = new HttpHeaders({
      'x-api-key': 'gFrdbifzuX6OZ4pazKOAkjSdMmjlBZTbGMmXEe6YmVk35',
      'Authorization': 'Basic bWFuYWdlcjpNdW5kb1ZlcmRlODAwYQ==',
      'Content-Type': 'application/json'
    });
    return this.http.get('https://dev.hermes2017.com/ERP102600/api/v2/odata/HMMX/Erp.BO.APInvoiceSvc/APInvoices?$filter=VendorNum%20eq%201226',{headers})
  }

  createGroup(body) {
    const headers = new HttpHeaders({
      'x-api-key': 'gFrdbifzuX6OZ4pazKOAkjSdMmjlBZTbGMmXEe6YmVk35',
      'Authorization': 'Basic bWFuYWdlcjpNdW5kb1ZlcmRlODAwYQ==',
      'Content-Type': 'application/json'
    });
    return this.http.post('https://dev.hermes2017.com/ERP102600/api/v2/odata/HMMX/Erp.BO.APChkGrpSvc/APChkGrps',body,{headers})
  }
}
