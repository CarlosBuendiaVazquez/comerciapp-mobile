import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonListHeader
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

        <IonGrid style={{ padding: 0, marginBottom: '20px' }}>
          <IonRow>
            <IonCol size="6">
              <IonCard style={{ margin: 0 }}>
                <IonCardContent>
                  <p style={{ margin: 0, color: '#666', fontSize: '12px' }}>Asistencia Hoy</p>
                  <h1 style={{ margin: '8px 0', color: '#10dc60', fontWeight: 'bold' }}>94%</h1>
                  <span style={{ fontSize: '11px', color: '#888' }}>32/34 Presentes</span>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard style={{ margin: 0 }}>
                <IonCardContent>
                  <p style={{ margin: 0, color: '#666', fontSize: '12px' }}>Alertas Stock</p>
                  <h1 style={{ margin: '8px 0', color: '#f04141', fontWeight: 'bold' }}>8</h1>
                  <span style={{ fontSize: '11px', color: '#f04141' }}>Stock crítico</span>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonListHeader style={{ padding: 0, minHeight: '30px' }}>
          <IonLabel style={{ fontWeight: 'bold', fontSize: '16px' }}>Actividad Reciente</IonLabel>
        </IonListHeader>

        <IonList lines="full" style={{ borderRadius: '8px', overflow: 'hidden' }}>
          {/* Próximamente ítems del feed */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;