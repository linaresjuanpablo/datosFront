import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SuppliersService } from 'src/app/services/suppliers/service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly suppliersService: SuppliersService =
    inject(SuppliersService);
  private readonly router: Router = inject(Router);

  showLoader = false;
  form!: FormGroup;

  private handleResponse(path: string): void {
    this.showLoader = false;
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      suppliersDepartment: [''],
      suppliersNit: [''],
    });
  }

  sendSuppliersDepartment(): void {
    this.showLoader = true;

    const departament = this.form.value.suppliersDepartment;

    this.suppliersService.getDepartment(departament).subscribe({
      next: () => {
        this.suppliersService.title = departament;
        this.handleResponse('/suppliers-department');
      },
      error: () => {
        this.suppliersService.clearData();
        this.suppliersService.title = departament;
        this.handleResponse('/suppliers-department');
      },
    });
  }

  sendSuppliersNit(): void {
    this.showLoader = true;
    const nit = this.form.value.suppliersNit;

    this.suppliersService.getNit(nit).subscribe({
      next: () => {
        this.suppliersService.title = nit;
        this.handleResponse('/suppliers-nit');
      },
      error: () => {
        this.suppliersService.clearData();
        this.suppliersService.title = nit;
        this.handleResponse('/suppliers-nit');
      },
    });
  }
}
