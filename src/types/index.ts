export interface Sucursal {
  id: string;
  nombre: string;
  activa: boolean;
}

export interface Marcaje {
  id: string;
  usuario: string;
  hora: string;
  tipo: 'Entrada' | 'Salida';
  estado: 'A tiempo' | 'Retardo';
}

export interface Producto {
  id: string;
  nombre: string;
  sku: string;
  stock: number;
  minimo: number;
}

export interface EventoActividad {
  id: string;
  titulo: string;
  descripcion: string;
  tiempo: string;
  tipo: 'asistencia' | 'alerta' | 'inventario';
}