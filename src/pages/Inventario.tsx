import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonSearchbar
} from '@ionic/react';

interface Producto {
  id: string;
  nombre: string;
  stock: number;
  precio: string;
}

const mockProductos: Producto[] = [
  { id: '1', nombre: 'Refresco 600ml', stock: 45, precio: '$22.00' },
  { id: '2', nombre: 'Galletas de Chispas 100g', stock: 12, precio: '$18.50' },
  { id: '3', nombre: 'Agua Purificada 1L', stock: 3, precio: '$15.00' },
  { id: '4', nombre: 'Sabritas Sal 45g', stock: 28, precio: '$20.00' }
];

const Inventario: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>ComerciApp - Inventario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ '--background': '#f4f5f8' }}>
        <IonSearchbar placeholder="Buscar producto..." style={{ padding: 0, marginBottom: '12px' }} />
        
        <IonList lines="full" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          {mockProductos.map(p => (
            <IonItem key={p.id}>
              <IonLabel>
                <h2 style={{ fontWeight: 'bold', fontSize: '15px' }}>{p.nombre}</h2>
                <p style={{ fontSize: '13px', color: '#0054e9', fontWeight: '600' }}>{p.precio}</p>
              </IonLabel>
              <IonBadge color={p.stock < 5 ? 'danger' : p.stock < 15 ? 'warning' : 'success'} slot="end">
                Stock: {p.stock}
              </IonBadge>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Inventario;