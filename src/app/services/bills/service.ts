import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Bills, BillsInfo } from './interface';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  private readonly apiURL =
    'https://datosabiertosfinal-erebanfagmc8cshc.canadacentral-01.azurewebsites.net';

  private readonly httpClient: HttpClient = inject(HttpClient);

  private data: Bills = {
    facturasResponseDto: [],
    mensaje: '',
    totalVenta: 0,
  };

  title: string = '';

  get(value: string): Observable<Bills> {
    this.clearData();

    return this.httpClient
      .get<Bills>(`${this.apiURL}/api/data/facturas/${value}`)
      .pipe(
        map((response) => {
          this.data = response;
          return this.data;
        })
      );
  }

  getData(): BillsInfo[] {
    return this.data.facturasResponseDto;
  }

  getSales(): number {
    return this.data.totalVenta;
  }

  clearData(): void {
    this.data = { facturasResponseDto: [], mensaje: '', totalVenta: 0 };
    this.title = '';
  }
}