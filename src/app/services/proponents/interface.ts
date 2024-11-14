export interface ProponentInfo {
  id_procedimiento: string;
  fecha_publicacion: string;
  nombre_procedimiento: string;
  nit_entidad: String;
  codigo_entidad: String;
  entidad_compradora: String;
  proveedor: String;
  nit_proveedor: String;
  codigo_proveedor: String;
}

export interface Proponent {
  proponenteResponseDtos: ProponentInfo[];
}