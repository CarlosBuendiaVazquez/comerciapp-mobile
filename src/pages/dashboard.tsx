import { useState } from 'react';
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
import { personCheckmarkOutline, warningOutline, cubeOutline, timeOutline } from 'ionicons/icons';
import { EventoActividad } from '../types';

const mockActividad: EventoActividad[] = [
  { id: '1', titulo: 'Carlos Mendoza', descripcion: 'Entrada registrada • Suc. Insurgentes', tiempo: 'Hace 4m', tipo: 'asistencia' },
  { id: '2', titulo: 'Alerta Stock Crítico', descripcion: 'Aceite Nutrioli (4 pzas) • Suc. Centro', tiempo: 'Hace 12m', tipo: 'alerta' },
  { id: '3', titulo: 'Ajuste de Mercancía', descripcion: '+50 pzas Lácteos • Suc. Polanco', tiempo: 'Hace 28m', tipo: 'inventario' },
  { id: '4', titulo: 'Registro de Retardo', descripcion: 'Juan Gómez (+14m) • Suc. Polanco', tiempo: 'Hace 45m', tipo: 'asistencia' }
];

const Dashboard: React.FC = () => {
  const [actividades] = useState<EventoActividad[]>(mockActividad);

  const getIcon = (tipo: EventoActividad['tipo']) => {
    switch (tipo) {
      case 'asistencia': return personCheckmarkOutline;
      case 'alerta': return warningOutline;
      case 'inventario': return cubeOutline;
      default: return timeOutline;
    }
  };

  const getColor = (tipo: EventoActividad['tipo']) => {
    switch (tipo) {
      case 'asistencia': return 'success';
      case 'alerta': return 'danger';
      case 'inventario': return 'primary';
      default: return 'medium';
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>ComerciApp - Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ '--background': '#f4f5f8' }}>
        <IonItem lines="none" style={{ borderRadius: '12px', marginBottom: '16px', border: '1px solid #e0e0e0', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
          <IonLabel style={{ fontWeight: 'bold', fontSize: '14px' }}>Sucursal:</IonLabel>
          <IonSelect defaultValue="todas" interface="popover" style={{ fontSize: '14px' }}>
            <IonSelectOption value="todas">Todas las Sucursales (4 activas)</IonSelectOption>
            <IonSelectOption value="centro">Sucursal Centro</IonSelectOption>
            <IonSelectOption value="insurgentes">Sucursal Insurgentes</IonSelectOption>
            <IonSelectOption value="polanco">Sucursal Polanco</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonGrid style={{ padding: 0, marginBottom: '20px' }}>
          <IonRow>
            <IonCol size="6">
              <IonCard style={{ margin: 0, borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <IonCardContent>
                  <p style={{ margin: 0, color: '#666', fontSize: '12px', fontWeight: 'bold' }}>Asistencia Hoy</p>
                  <h1 style={{ margin: '8px 0', color: '#10dc60', fontWeight: 'bold', fontSize: '28px' }}>94%</h1>
                  <span style={{ fontSize: '11px', color: '#888' }}>32/34 Presentes</span>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard style={{ margin: 0, borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <IonCardContent>
                  <p style={{ margin: 0, color: '#666', fontSize: '12px', fontWeight: 'bold' }}>Alertas Stock</p>
                  <h1 style={{ margin: '8px 0', color: '#f04141', fontWeight: 'bold', fontSize: '28px' }}>8</h1>
                  <span style={{ fontSize: '11px', color: '#f04141', fontWeight: 'bold' }}>Stock crítico</span>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonListHeader style={{ padding: 0, minHeight: '30px', marginBottom: '8px' }}>
          <IonLabel style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>Actividad Reciente</IonLabel>
        </IonListHeader>

        <IonList lines="full" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          {actividades.map(act => (
            <IonItem key={act.id}>
              <IonIcon icon={getIcon(act.tipo)} slot="start" color={getColor(act.tipo)} />
              <IonLabel>
                <h2 style={{ fontWeight: 'bold', fontSize: '14px' }}>{act.titulo}</h2>
                <p>{act.descripcion}</p>
              </IonLabel>
              <IonNote slot="end" style={{ fontSize: '12px', color: '#888' }}>{act.tiempo}</IonNote>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;