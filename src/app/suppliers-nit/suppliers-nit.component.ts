import { Component, inject } from '@angular/core';
import { SuppliersService } from '../services/suppliers/service';

@Component({
  selector: 'app-suppliers-nit',
  templateUrl: './suppliers-nit.component.html',
})
export class SuppliersNitComponent {
  suppliersService: SuppliersService = inject(SuppliersService);
}
