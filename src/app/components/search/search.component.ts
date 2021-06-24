import { Component, OnInit } from '@angular/core';
import { InvoicesService } from 'src/app/services/invoices.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  invoices: any[] = []; 
  InvoiceBal = '';
  DocInvoiceBal = '';
  Total = '';
  opcionSeleccionado = '';
  groupEpicor = {
    Company: "HMMX",
    GroupID: '',
    CreatedBy: "sandra.najera",
    BankAcctID: "BC134",
    CheckDate: '',
    CurrencyCode: "MXN",
    Cashbook: false,
    PMUID: 74,
    BankCurrencyCode: "MXN",
    BankTotalAmountToAP: 0,
    BankTotalCheckAmt: 0,
    BankTotalDiscAmt: 0,
    BankTotalMiscCheckAmt: 0,
    BankTotalWithholdTax: 0,
    DocBankTotalCheckAmt: 0,
    RowMod: "U" 
  }; 

  constructor(private invoiceService: InvoicesService) { }

  ngOnInit(): void {
    this.getInvoice();
  }

  getInvoice() {
    this.invoiceService.getInvoices().subscribe((response: any) => {
      this.invoices = response.value
      console.log(this.invoices);
    })
  }

  getFilterInvoice() {
    this.invoices.filter(_invoices => {

      if(_invoices.InvoiceNum === this.opcionSeleccionado)  
      {
        this.InvoiceBal = _invoices.InvoiceBal;
        this.DocInvoiceBal = _invoices.DocInvoiceBal;
        this.Total = _invoices.Total;
      }
      
    } )
    console.log(this.invoices);
    
  }
  createGroup() {
    this.invoiceService.createGroup(this.groupEpicor).subscribe(res => console.log(res))
  }
}
