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
  IonListHeader,
  IonIcon,
  IonNote
} from '@ionic/react';
import { personCheckmarkOutline, warningOutline, cubeOutline } from 'ionicons/icons';

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
          <IonItem>
            <IonIcon icon={personCheckmarkOutline} slot="start" color="success" />
            <IonLabel>
              <h2>Carlos Mendoza</h2>
              <p>Entrada registrada • Suc. Insurgentes</p>
            </IonLabel>
            <IonNote slot="end" style={{ fontSize: '12px' }}>Hace 4m</IonNote>
          </IonItem>

          <IonItem>
            <IonIcon icon={warningOutline} slot="start" color="danger" />
            <IonLabel>
              <h2>Alerta Stock Crítico</h2>
              <p>Aceite Nutrioli (4 pzas) • Suc. Centro</p>
            </IonLabel>
            <IonNote slot="end" style={{ fontSize: '12px' }}>Hace 12m</IonNote>
          </IonItem>

          <IonItem>
            <IonIcon icon={cubeOutline} slot="start" color="primary" />
            <IonLabel>
              <h2>Ajuste de Mercancía</h2>
              <p>+50 pzas Lácteos • Suc. Polanco</p>
            </IonLabel>
            <IonNote slot="end" style={{ fontSize: '12px' }}>Hace 28m</IonNote>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;