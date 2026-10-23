import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Asistencia: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>ComerciApp - Asistencia</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <h2>Módulo de Asistencia</h2>
    </IonContent>
  </IonPage>
);

export default Asistencia;