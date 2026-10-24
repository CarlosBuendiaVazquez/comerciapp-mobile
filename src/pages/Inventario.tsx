import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar
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
      </IonContent>
    </IonPage>
  );
};

export default Inventario;