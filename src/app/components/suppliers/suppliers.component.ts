import { Component, inject } from '@angular/core';
import { SuppliersService } from 'src/app/services/suppliers/service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
})
export class SuppliersComponent {
  suppliersService: SuppliersService = inject(SuppliersService);
}
