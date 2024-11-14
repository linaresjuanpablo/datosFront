import { Component, inject, OnInit } from '@angular/core';
import { ProponentsService } from 'src/app/services/proponents/service';

@Component({
  selector: 'app-proponent',
  templateUrl: './proponent.component.html',
})
export class ProponentComponent {
  proponentsService: ProponentsService = inject(ProponentsService);

  get getInfo() {
    const { codigo_proveedor, proveedor } = this.proponentsService.getData()[0];

    return `Nombre: ${proveedor} - Código: ${codigo_proveedor}`;
  }
}
