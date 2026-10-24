import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonChip,
  IonLabel
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
      </IonContent>
    </IonPage>
  );
};

export default Inventario;