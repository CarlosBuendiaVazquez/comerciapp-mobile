import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonBadge,
  useIonAlert,
  useIonToast
} from '@ionic/react';
import {
  notificationsOutline,
  cubeOutline,
  addOutline,
  removeOutline,
  pricetagOutline,
  alertCircleOutline,
  checkmarkCircleOutline,
  fastFoodOutline
} from 'ionicons/icons';
import { useApp } from '../context/AppContext';

const Inventario: React.FC = () => {
  const { productos, agregarProducto, modificarStock } = useApp();
  const [searchText, setSearchText] = useState('');
  const [presentAlert] = useIonAlert();
  const [presentToast] = useIonToast();

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
    p.categoria.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleNuevoProducto = () => {
    presentAlert({
      header: 'Nuevo Producto',
      inputs: [
        { name: 'nombre', type: 'text', placeholder: 'Nombre (ej. Pan Dulce)' },
        { name: 'categoria', type: 'text', placeholder: 'Categoría (ej. Abarrotes)' },
        { name: 'precio', type: 'text', placeholder: 'Precio (ej. $15.00)' },
        { name: 'stock', type: 'number', placeholder: 'Cantidad en Stock' }
      ],
      buttons: [
        'Cancelar',
        {
          text: 'Guardar',
          handler: (data) => {
            if (!data.nombre || !data.precio) {
              presentToast({ message: 'Escribe al menos nombre y precio', duration: 2000, color: 'warning' });
              return;
            }
            agregarProducto({
              nombre: data.nombre,
              categoria: data.categoria || 'General',
              precio: data.precio.startsWith('$') ? data.precio : `$${data.precio}`,
              stock: parseInt(data.stock) || 0
            });
            presentToast({ message: 'Producto agregado a Supabase', duration: 2000, color: 'success' });
          }
        }
      ]
    });
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar style={{ '--background': '#ffffff', padding: '6px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '38px', height: '38px', backgroundColor: '#2563eb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', flexShrink: 0 }}>
                <IonIcon icon={cubeOutline} style={{ fontSize: '22px' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '18px', fontWeight: '800', color: '#1e3a8a', lineHeight: '1.2' }}>ComerciApp</span>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500', lineHeight: '1.2' }}>Inventario</span>
              </div>
            </div>
            <IonButtons>
              <IonButton fill="clear" color="dark">
                <IonIcon icon={notificationsOutline} style={{ fontSize: '22px', color: '#475569' }} />
              </IonButton>
            </IonButtons>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" style={{ '--background': '#f8fafc' }}>
        <IonGrid style={{ maxWidth: '900px', margin: '0 auto', padding: 0 }}>
          <IonRow>
            <IonCol size="12">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                <IonSearchbar
                  value={searchText}
                  onIonInput={e => setSearchText(e.detail.value!)}
                  placeholder="Buscar producto o categoría..."
                  style={{ padding: 0, '--background': '#ffffff', '--box-shadow': '0 2px 8px rgba(0,0,0,0.03)', '--border-radius': '14px' }}
                />
                <button onClick={handleNuevoProducto} style={{ width: '100%', backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '14px', padding: '12px 20px', fontSize: '14px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', height: '46px' }}>
                  <IonIcon icon={addOutline} style={{ fontSize: '20px' }} /> Nuevo Producto
                </button>
              </div>
            </IonCol>

            <IonCol size="12" sizeMd="4">
              <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', marginBottom: '16px' }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>Resumen de Stock</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}><IonIcon icon={pricetagOutline} color="primary" /> Total Ítems</span>
                    <strong style={{ fontSize: '16px', color: '#0f172a' }}>{productos.length} tipos</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}><IonIcon icon={checkmarkCircleOutline} color="success" /> Stock Saludable</span>
                    <strong style={{ fontSize: '16px', color: '#15803d' }}>{productos.filter(p => p.stock >= 5).length} ítems</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}><IonIcon icon={alertCircleOutline} color="danger" /> Stock Bajo</span>
                    <strong style={{ fontSize: '16px', color: '#b91c1c' }}>{productos.filter(p => p.stock < 5).length} ítems</strong>
                  </div>
                </div>
              </div>
            </IonCol>

            <IonCol size="12" sizeMd="8">
              <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: '800', color: '#0f172a' }}>Catálogo de Productos</h3>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '12px' }}>{productosFiltrados.length} Registros</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {productosFiltrados.map(p => (
                    <div key={p.id} style={{ backgroundColor: '#f8fafc', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', backgroundColor: '#dbeafe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0 }}>
                          <IonIcon icon={fastFoodOutline} style={{ fontSize: '20px' }} />
                        </div>
                        <div>
                          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>{p.nombre}</h4>
                          <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#2563eb', fontWeight: '700' }}>{p.precio} <span style={{ color: '#94a3b8', fontWeight: '500' }}>• {p.categoria}</span></p>
                        </div>
                      </div>

                      {/* Botones para ajustar stock manualmente */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          onClick={() => modificarStock(p.id, p.stock - 1, p.nombre)}
                          style={{ width: '28px', height: '28px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#dc2626' }}
                        >
                          <IonIcon icon={removeOutline} />
                        </button>

                        <IonBadge style={{ backgroundColor: p.stock < 5 ? '#fee2e2' : '#dcfce7', color: p.stock < 5 ? '#b91c1c' : '#15803d', fontSize: '12px', fontWeight: '700', padding: '6px 10px', borderRadius: '10px', minWidth: '65px', textAlign: 'center' }}>
                          {p.stock} pzas
                        </IonBadge>

                        <button
                          onClick={() => modificarStock(p.id, p.stock + 1, p.nombre)}
                          style={{ width: '28px', height: '28px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#16a34a' }}
                        >
                          <IonIcon icon={addOutline} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inventario;