export interface SuppliersDepartamentInfo {
  nombre: string;
  codigo: string;
  municipio: string;
}

export interface SuppliersDepartament {
  departamentoResponseDto: SuppliersDepartamentInfo[];
}

export interface SuppliersNitInfo {
  nombre: string;
  municipio: string;
  departamento: string;
  tipo_empresa: string;
  nombre_representante_legal: string;
}

export interface SuppliersNit {
  nitResponseDtos: SuppliersNitInfo[];
  mensaje: string;
}
