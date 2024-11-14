import { Component, inject } from '@angular/core';
import { BillsService } from 'src/app/services/bills/service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
})
export class BillsComponent {
  billsService: BillsService = inject(BillsService);
}
