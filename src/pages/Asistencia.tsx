import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonBadge,
  IonAvatar,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonList,
  IonListHeader
} from '@ionic/react';
import { checkmarkCircleOutline, qrCodeOutline } from 'ionicons/icons';

interface Marcaje {
  id: string;
  usuario: string;
  hora: string;
  tipo: 'Entrada' | 'Salida';
  estado: 'A tiempo' | 'Retardo';
}

const mockMarcajes: Marcaje[] = [
  { id: '1', usuario: 'Sofía Morales', hora: '08:31 AM', tipo: 'Entrada', estado: 'A tiempo' },
  { id: '2', usuario: 'Sofía Morales', hora: '01:15 PM', tipo: 'Salida', estado: 'A tiempo' },
  { id: '3', usuario: 'Sofía Morales', hora: '02:05 PM', tipo: 'Entrada', estado: 'Retardo' }
];

const Asistencia: React.FC = () => {
  const [hora, setHora] = useState<string>('');
  const [marcajes] = useState<Marcaje[]>(mockMarcajes);

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
      <IonContent className="ion-padding" style={{ '--background': '#f4f5f8' }}>
        <IonCard style={{ margin: 0, marginBottom: '16px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <IonCardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ margin: 0, fontWeight: 'bold', fontSize: '15px' }}>Sucursal Centro</h2>
              <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '12px' }}>ID: SUC-001 • Av. Juárez 240</p>
            </div>
            <IonBadge color="success" style={{ borderRadius: '6px' }}>Abierta</IonBadge>
          </IonCardContent>
        </IonCard>

        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <p style={{ color: '#666', fontSize: '13px', margin: '0 0 4px 0' }}>Miércoles, 24 de Octubre de 2024</p>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#0054e9', margin: 0 }}>{hora || '00:00:00 PM'}</h1>
        </div>

        <IonCard style={{ margin: 0, marginBottom: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <IonCardContent>
            <IonItem lines="none" style={{ '--padding-start': 0 }}>
              <IonAvatar slot="start">
                <img alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.ionic.png" />
              </IonAvatar>
              <IonLabel>
                <h2 style={{ fontWeight: 'bold', fontSize: '15px' }}>Sofía Morales Valdez</h2>
                <p style={{ fontSize: '13px' }}>Encargada de Turno • Sucursal Centro</p>
                <IonBadge color="success" style={{ marginTop: '6px', borderRadius: '6px' }}>En Turno Activo</IonBadge>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonButton expand="block" color="success" size="large" style={{ fontWeight: 'bold', marginBottom: '12px', '--border-radius': '10px' }}>
          <IonIcon slot="start" icon={checkmarkCircleOutline} />
          Registrar Entrada / Salida
        </IonButton>

        <IonButton expand="block" fill="outline" color="primary" style={{ marginBottom: '24px', '--border-radius': '10px' }}>
          <IonIcon slot="start" icon={qrCodeOutline} />
          Escanear Código QR
        </IonButton>

        <IonListHeader style={{ padding: 0, minHeight: '30px', marginBottom: '8px' }}>
          <IonLabel style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>Marcajes de Hoy</IonLabel>
        </IonListHeader>

        <IonList lines="full" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          {marcajes.map(m => (
            <IonItem key={m.id}>
              <IonLabel>
                <h2 style={{ fontWeight: 'bold', fontSize: '14px' }}>{m.hora}</h2>
                <p>{m.tipo === 'Entrada' ? 'Entrada de Turno' : 'Salida de Turno'}</p>
              </IonLabel>
              <IonBadge color={m.estado === 'A tiempo' ? 'success' : 'warning'} slot="end" style={{ borderRadius: '6px' }}>
                {m.estado}
              </IonBadge>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Asistencia;