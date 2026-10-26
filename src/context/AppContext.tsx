import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { logInOutline, restaurantOutline } from 'ionicons/icons';

export interface Marcaje {
  id: string;
  hora: string;
  tipo: string;
  estado: string;
  icono?: string;
  colorIcono?: string;
  bgIcono?: string;
}

export interface Producto {
  id: string;
  nombre: string;
  categoria: string;
  stock: number;
  precio: string;
}

export interface Actividad {
  id: string;
  titulo: string;
  subtitulo: string;
  tiempo: string;
  esAlerta?: boolean;
}

interface AppContextType {
  marcajes: Marcaje[];
  productos: Producto[];
  actividades: Actividad[];
  registrarMarcaje: () => Promise<void>;
  agregarProducto: (producto: Omit<Producto, 'id'>) => Promise<void>;
  modificarStock: (id: string, nuevoStock: number, nombreProducto: string) => Promise<void>;
  loading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [marcajes, setMarcajes] = useState<Marcaje[]>([]);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [actividades, setActividades] = useState<Actividad[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: marcajesData } = await supabase
        .from('marcajes')
        .select('*')
        .order('created_at', { ascending: false });

      const { data: productosData } = await supabase
        .from('productos')
        .select('*')
        .order('created_at', { ascending: false });

      const { data: actividadesData } = await supabase
        .from('actividades')
        .select('*')
        .order('created_at', { ascending: false });

      if (marcajesData) {
        setMarcajes(
          marcajesData.map(m => ({
            ...m,
            icono: m.tipo.includes('Comida') ? restaurantOutline : logInOutline,
            colorIcono: '#10b981',
            bgIcono: '#a7f3d0'
          }))
        );
      }
      if (productosData) setProductos(productosData);
      if (actividadesData) setActividades(actividadesData);
    } catch (error) {
      console.error('Error al obtener datos de Supabase:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const registrarMarcaje = async () => {
    const now = new Date();
    let hrs = now.getHours();
    const mins = String(now.getMinutes()).padStart(2, '0');
    const ampm = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs % 12 || 12;
    const horaStr = `${String(hrs).padStart(2, '0')}:${mins} ${ampm}`;

    const tipos = ['Entrada', 'Salida a Comida', 'Regreso', 'Salida'];
    const siguienteTipo = tipos[marcajes.length % tipos.length];

    const nuevoMarcaje = { hora: horaStr, tipo: siguienteTipo, estado: 'A tiempo' };
    const nuevaActividad = { titulo: 'Sofía Morales Valdez', subtitulo: `${siguienteTipo} registrada • Suc. Centro`, tiempo: 'Hace 1s' };

    const { data: mInserted } = await supabase.from('marcajes').insert([nuevoMarcaje]).select();
    await supabase.from('actividades').insert([nuevaActividad]);

    if (mInserted && mInserted[0]) {
      const itemFormatted: Marcaje = {
        ...mInserted[0],
        icono: siguienteTipo.includes('Comida') ? restaurantOutline : logInOutline,
        colorIcono: '#10b981',
        bgIcono: '#a7f3d0'
      };
      setMarcajes(prev => [itemFormatted, ...prev]);
      setActividades(prev => [{ id: Date.now().toString(), ...nuevaActividad }, ...prev]);
    }
  };

  const agregarProducto = async (prod: Omit<Producto, 'id'>) => {
    const { data } = await supabase.from('productos').insert([prod]).select();
    if (data && data[0]) {
      setProductos(prev => [data[0], ...prev]);

      // Si se crea con stock bajo (< 5), genera una alerta automáticamente en el Dashboard
      if (prod.stock < 5) {
        const alerta = {
          titulo: prod.nombre,
          subtitulo: `Stock crítico (${prod.stock} pzas restantes) • Suc. Centro`,
          tiempo: 'Hace 1s'
        };
        await supabase.from('actividades').insert([alerta]);
        setActividades(prev => [{ id: Date.now().toString(), ...alerta, esAlerta: true }, ...prev]);
      }
    }
  };

  // Función para incrementar/decrementar stock y generar alerta si cae a < 5
  const modificarStock = async (id: string, nuevoStock: number, nombreProducto: string) => {
    const stockValido = Math.max(0, nuevoStock);

    // Actualizar en Supabase
    await supabase.from('productos').update({ stock: stockValido }).eq('id', id);

    // Actualizar estado local
    setProductos(prev => prev.map(p => p.id === id ? { ...p, stock: stockValido } : p));

    // Si el stock cae por debajo de 5 piezas, genera una alerta en la tabla de Actividades para el Dashboard
    if (stockValido < 5) {
      const alerta = {
        titulo: nombreProducto,
        subtitulo: `Stock crítico (${stockValido} pzas restantes) • Suc. Centro`,
        tiempo: 'Hace 1s'
      };
      await supabase.from('actividades').insert([alerta]);
      setActividades(prev => [{ id: Date.now().toString(), ...alerta, esAlerta: true }, ...prev]);
    }
  };

  return (
    <AppContext.Provider value={{ marcajes, productos, actividades, registrarMarcaje, agregarProducto, modificarStock, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp debe usarse dentro de un AppProvider');
  return context;
};