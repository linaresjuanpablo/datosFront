import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Proponent, ProponentInfo } from './interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProponentsService {
  private readonly apiURL =
    'https://datosabiertosfinal-erebanfagmc8cshc.canadacentral-01.azurewebsites.net';

  private readonly httpClient: HttpClient = inject(HttpClient);

  private data: ProponentInfo[] = [];

  title: string = '';

  get(value: string): Observable<ProponentInfo[]> {
    this.clearData();

    return this.httpClient
      .get<Proponent>(`${this.apiURL}/api/data/proponentes/${value}`)
      .pipe(
        map((response) => {
          this.data = response.proponenteResponseDtos;
          return this.data;
        })
      );
  }

  getData(): ProponentInfo[] {
    return this.data;
  }

  clearData(): void {
    this.data = [];
    this.title = '';
  }
}
