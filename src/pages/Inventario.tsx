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
  IonCardContent
} from '@ionic/react';

const Inventario: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>ComerciApp - Inventario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSearchbar placeholder="Buscar por nombre, SKU o código..." />
        
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <IonChip color="primary">
            <IonLabel>Todos</IonLabel>
          </IonChip>
          <IonChip color="danger" outline>
            <IonLabel>• Stock Bajo</IonLabel>
          </IonChip>
        </div>

        <IonCard>
          <IonCardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, fontWeight: 'bold' }}>Aceite Vegetal 1L</h3>
                <p style={{ margin: '4px 0', color: '#666', fontSize: '12px' }}>SKU: AB-9821</p>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Inventario;