export interface BillsInfo {
  id_contrato: string;
  estado: string;
  numero_de_factura: string;
  usuario_pago: string;
  valor_a_pagar: string;
}

export interface Bills {
  mensaje: string;
  totalVenta: number;
  facturasResponseDto: BillsInfo[];
}
