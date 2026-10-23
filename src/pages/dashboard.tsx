import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonLabel
} from '@ionic/react';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>ComerciApp - Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem lines="none" style={{ borderRadius: '8px', marginBottom: '16px', border: '1px solid #e0e0e0' }}>
          <IonLabel style={{ fontWeight: 'bold' }}>Sucursal:</IonLabel>
          <IonSelect defaultValue="todas" interface="popover">
            <IonSelectOption value="todas">Todas las Sucursales (4 activas)</IonSelectOption>
            <IonSelectOption value="centro">Sucursal Centro</IonSelectOption>
            <IonSelectOption value="insurgentes">Sucursal Insurgentes</IonSelectOption>
            <IonSelectOption value="polanco">Sucursal Polanco</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;