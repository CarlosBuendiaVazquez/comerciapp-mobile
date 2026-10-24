import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonChip,
  IonLabel,
  IonCard,
  IonCardContent,
  IonBadge,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton
} from '@ionic/react';
import { addOutline, removeOutline, qrCodeOutline } from 'ionicons/icons';
import { scanBarcode } from '../services/qrService';

interface Producto {
  id: string;
  nombre: string;
  sku: string;
  stock: number;
  minStock: number;
}

const INITIAL_PRODUCTS: Producto[] = [
  { id: '1', nombre: 'Aceite Vegetal 1L', sku: 'AB-9821', stock: 4, minStock: 10 },
  { id: '2', nombre: 'Harina de Trigo 1kg', sku: 'AB-4321', stock: 15, minStock: 5 },
  { id: '3', nombre: 'Arroz Blanco 1kg', sku: 'AB-5512', stock: 2, minStock: 8 },
];

const Inventario: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>(INITIAL_PRODUCTS);
  const [search, setSearch] = useState<string>('');
  const [filterLowStock, setFilterLowStock] = useState<boolean>(false);

  const handleStockChange = (id: string, delta: number) => {
    setProductos(prev =>
      prev.map(p => (p.id === id ? { ...p, stock: Math.max(0, p.stock + delta) } : p))
    );
  };

  const handleScan = async () => {
    const code = await scanBarcode();
    if (code) {
      alert(`Código escaneado: ${code}`);
    }
  };

  const filteredProducts = productos.filter(p => {
    const matchesSearch = p.nombre.toLowerCase().includes(search.toLowerCase()) ||
                          p.sku.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterLowStock ? p.stock < p.minStock : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>ComerciApp - Inventario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSearchbar
          value={search}
          onIonInput={(e) => setSearch(e.detail.value!)}
          placeholder="Buscar por nombre, SKU o código..."
        />
        
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <IonChip
            color={!filterLowStock ? 'primary' : 'medium'}
            onClick={() => setFilterLowStock(false)}
          >
            <IonLabel>Todos</IonLabel>
          </IonChip>
          <IonChip
            color={filterLowStock ? 'danger' : 'medium'}
            outline={!filterLowStock}
            onClick={() => setFilterLowStock(true)}
          >
            <IonLabel>• Stock Bajo</IonLabel>
          </IonChip>
        </div>

        {filteredProducts.map(prod => (
          <IonCard key={prod.id}>
            <IonCardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ margin: 0, fontWeight: 'bold' }}>{prod.nombre}</h3>
                  <p style={{ margin: '4px 0', color: '#666', fontSize: '12px' }}>SKU: {prod.sku}</p>
                  <IonBadge color={prod.stock < prod.minStock ? 'danger' : 'success'}>
                    {prod.stock < prod.minStock ? 'Stock Bajo' : 'Stock Ok'}
                  </IonBadge>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IonButton size="small" fill="outline" onClick={() => handleStockChange(prod.id, -1)}>
                    <IonIcon slot="icon-only" icon={removeOutline} />
                  </IonButton>
                  <strong style={{ fontSize: '16px' }}>{prod.stock} pzas</strong>
                  <IonButton size="small" fill="solid" onClick={() => handleStockChange(prod.id, 1)}>
                    <IonIcon slot="icon-only" icon={addOutline} />
                  </IonButton>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
        ))}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="primary" onClick={handleScan}>
            <IonIcon icon={qrCodeOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Inventario;