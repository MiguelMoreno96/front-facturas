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

  getImages() {
    return this.http.get(`${URL}/inicial`);
  }

  uploadFile(groupId: string, initialDAte: string, finalDate: string,
    file: File, invoice: string ,InvoiceBal: string, DocInvoiceBal: string ) {

    const fd = new FormData();
    fd.append('groupId', groupId);
    fd.append('initialDAte', initialDAte);
    fd.append('finalDate', finalDate);
    fd.append('file', file);
    fd.append('invoice', invoice);
    fd.append('InvoiceBal', InvoiceBal);
    fd.append('DocInvoiceBal', DocInvoiceBal);
    return this.http.post(`http://localhost:5000/api/v1/group`, fd);
  }
}
