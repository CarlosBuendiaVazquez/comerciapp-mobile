import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import {
  notificationsOutline,
  storefront,
  chevronDown,
  refreshOutline,
  personAddOutline,
  archiveOutline,
  timeOutline
} from 'ionicons/icons';
import { useApp } from '../context/AppContext';

const Dashboard: React.FC = () => {
  const { actividades, productos, marcajes } = useApp();

  const stockCriticoCount = productos.filter(p => p.stock < 5).length;
  const porcentajeAsistencia = Math.min(100, Math.round((marcajes.length / 4) * 100)) || 94;

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar style={{ '--background': '#ffffff', padding: '6px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '38px', height: '38px', backgroundColor: '#2563eb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', flexShrink: 0 }}>
                <IonIcon icon={storefront} style={{ fontSize: '22px' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <IonTitle style={{ padding: 0, fontSize: '18px', fontWeight: '800', color: '#1e3a8a', lineHeight: '1.2' }}>
                  ComerciApp
                </IonTitle>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500', lineHeight: '1.2' }}>
                  Dashboard
                </span>
              </div>
            </div>
            <IonButtons>
              <IonButton fill="clear" color="dark">
                <IonIcon icon={notificationsOutline} style={{ fontSize: '22px', color: '#475569' }} />
              </IonButton>
            </IonButtons>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" style={{ '--background': '#f8fafc' }}>
        <IonGrid style={{ maxWidth: '900px', margin: '0 auto', padding: 0 }}>
          <IonRow>
            {/* Selector de Sucursales */}
            <IonCol size="12">
              <div style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', marginBottom: '12px' }}>
                <div style={{ backgroundColor: '#f1f5f9', borderRadius: '12px', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IonIcon icon={storefront} style={{ color: '#1d4ed8', fontSize: '18px' }} />
                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Todas las Sucursales (4 activas)</span>
                  </div>
                  <IonIcon icon={chevronDown} style={{ color: '#64748b', fontSize: '16px' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', backgroundColor: '#15803d', borderRadius: '50%', display: 'inline-block' }}></span>
                    En vivo • Hace 1 min
                  </span>
                  <button onClick={() => window.location.reload()} style={{ backgroundColor: 'transparent', border: 'none', color: '#2563eb', fontSize: '13px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                    <IonIcon icon={refreshOutline} style={{ fontSize: '15px' }} /> Actualizar
                  </button>
                </div>
              </div>
            </IonCol>

            {/* Metric Card 1: Asistencia */}
            <IonCol size="12" sizeSm="6">
              <div style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Asistencia</span>
                  <IonIcon icon={personAddOutline} style={{ fontSize: '20px', color: '#10b981' }} />
                </div>
                <div style={{ marginTop: '16px' }}>
                  <h2 style={{ margin: 0, fontSize: '36px', fontWeight: '900', color: '#0f172a' }}>{porcentajeAsistencia}%</h2>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', fontWeight: '700', color: '#15803d' }}>
                    {marcajes.length} Marcajes de hoy
                  </p>
                </div>
              </div>
            </IonCol>

            {/* Metric Card 2: Alertas de Stock */}
            <IonCol size="12" sizeSm="6">
              <div style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Alertas Stock</span>
                  <IonIcon icon={archiveOutline} style={{ fontSize: '20px', color: '#dc2626' }} />
                </div>
                <div style={{ marginTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <h2 style={{ margin: 0, fontSize: '36px', fontWeight: '900', color: '#dc2626' }}>{stockCriticoCount}</h2>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: '#475569' }}>críticos</span>
                  </div>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', fontWeight: '700', color: '#dc2626' }}>
                    {stockCriticoCount > 0 ? 'Requiere reabastecimiento' : 'Stock en buen nivel'}
                  </p>
                </div>
              </div>
            </IonCol>

            {/* Actividad Reciente Dinámica */}
            <IonCol size="12" style={{ marginTop: '8px' }}>
              <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IonIcon icon={timeOutline} style={{ fontSize: '20px', color: '#1d4ed8' }} />
                    <h3 style={{ margin: 0, fontSize: '17px', fontWeight: '800', color: '#0f172a' }}>Actividad Reciente</h3>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#64748b' }}>En vivo</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {actividades.map((act, index) => (
                    <div key={act.id} style={{ padding: '12px 0', borderBottom: index !== actividades.length - 1 ? '1px solid #f1f5f9' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '800', color: act.esAlerta ? '#dc2626' : '#0f172a' }}>{act.titulo}</h4>
                        <p style={{ margin: '3px 0 0 0', fontSize: '12px', color: '#64748b', fontWeight: '500' }}>{act.subtitulo}</p>
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', whiteSpace: 'nowrap', marginLeft: '12px' }}>{act.tiempo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;