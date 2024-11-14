import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Proponent, ProponentInfo } from './interface';
import { map, Observable } from 'rxjs';
import { apiURL } from 'src/app/components/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ProponentsService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  private data: ProponentInfo[] = [];

  title: string = '';

  get(value: string): Observable<ProponentInfo[]> {
    this.clearData();

    return this.httpClient
      .get<Proponent>(`${apiURL}/api/data/proponentes/${value}`)
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
