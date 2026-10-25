import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/react';
import { trendingUpOutline, peopleOutline, alertCircleOutline, cartOutline } from 'ionicons/icons';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>ComerciApp - Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ '--background': '#f4f5f8' }}>
        <IonGrid style={{ padding: 0 }}>
          <IonRow>
            <IonCol size="6">
              <IonCard style={{ margin: 0, marginBottom: '12px', borderRadius: '12px' }}>
                <IonCardContent style={{ textAlign: 'center' }}>
                  <IonIcon icon={trendingUpOutline} style={{ fontSize: '32px', color: '#10dc60' }} />
                  <h3 style={{ margin: '8px 0 2px 0', fontSize: '18px', fontWeight: 'bold' }}>$12,450</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '12px' }}>Ventas Hoy</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard style={{ margin: 0, marginBottom: '12px', borderRadius: '12px' }}>
                <IonCardContent style={{ textAlign: 'center' }}>
                  <IonIcon icon={peopleOutline} style={{ fontSize: '32px', color: '#3880ff' }} />
                  <h3 style={{ margin: '8px 0 2px 0', fontSize: '18px', fontWeight: 'bold' }}>8 / 8</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '12px' }}>Personal Activo</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard style={{ margin: 0, marginBottom: '12px', borderRadius: '12px' }}>
                <IonCardContent style={{ textAlign: 'center' }}>
                  <IonIcon icon={cartOutline} style={{ fontSize: '32px', color: '#7044ff' }} />
                  <h3 style={{ margin: '8px 0 2px 0', fontSize: '18px', fontWeight: 'bold' }}>142</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '12px' }}>Transacciones</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard style={{ margin: 0, marginBottom: '12px', borderRadius: '12px' }}>
                <IonCardContent style={{ textAlign: 'center' }}>
                  <IonIcon icon={alertCircleOutline} style={{ fontSize: '32px', color: '#ffce00' }} />
                  <h3 style={{ margin: '8px 0 2px 0', fontSize: '18px', fontWeight: 'bold' }}>3</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '12px' }}>Stock Bajo</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;