import { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonBadge
} from '@ionic/react';

const Asistencia: React.FC = () => {
  const [hora, setHora] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setHora(now.toLocaleTimeString('es-MX'));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>ComerciApp - Asistencia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard style={{ margin: 0, marginBottom: '16px' }}>
          <IonCardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ margin: 0, fontWeight: 'bold' }}>Sucursal Centro</h2>
              <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '12px' }}>ID: SUC-001 • Av. Juárez 240</p>
            </div>
            <IonBadge color="success">Abierta</IonBadge>
          </IonCardContent>
        </IonCard>

        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <p style={{ color: '#666', fontSize: '13px', margin: '0 0 4px 0' }}>Miércoles, 24 de Octubre de 2024</p>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#0054e9', margin: 0 }}>{hora || '00:00:00 PM'}</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Asistencia;