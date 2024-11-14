import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  SuppliersDepartament,
  SuppliersDepartamentInfo,
  SuppliersNit,
  SuppliersNitInfo,
} from './interface';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService {
  private readonly apiURL =
    'https://datosabiertosfinal-erebanfagmc8cshc.canadacentral-01.azurewebsites.net';

  private readonly httpClient: HttpClient = inject(HttpClient);

  private departmentData: SuppliersDepartamentInfo[] = [];
  private nitData: SuppliersNitInfo[] = [];

  title: string = '';

  getDepartment(value: string): Observable<SuppliersDepartamentInfo[]> {
    this.clearData();

    return this.httpClient
      .get<SuppliersDepartament>(
        `${this.apiURL}/api/data/proveedor/departamento/${value}`
      )
      .pipe(
        map((response) => {
          this.departmentData = response.departamentoResponseDto;
          return this.departmentData;
        })
      );
  }

  getNit(value: string): Observable<SuppliersNitInfo[]> {
    this.clearData();

    return this.httpClient
      .get<SuppliersNit>(`${this.apiURL}/api/data/proveedor/nit/${value}`)
      .pipe(
        map((response) => {
          this.nitData = response.nitResponseDtos ?? [];

          return this.nitData;
        })
      );
  }

  getStoredDepartmentData(): SuppliersDepartamentInfo[] {
    return this.departmentData;
  }

  getStoredNitData(): SuppliersNitInfo[] {
    return this.nitData;
  }

  clearData(): void {
    this.departmentData = [];
    this.nitData = [];
    this.title = '';
  }
}
