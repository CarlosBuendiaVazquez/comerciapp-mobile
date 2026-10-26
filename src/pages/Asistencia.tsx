import React, { useState, useEffect } from 'react';
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
  IonCol,
  IonModal
} from '@ionic/react';
import {
  notificationsOutline,
  storefront,
  chevronDown,
  calendarOutline,
  timeOutline,
  checkmarkCircle,
  checkmarkCircleOutline,
  qrCodeOutline,
  logInOutline,
  restaurantOutline,
  logOutOutline,
  chevronForward,
  closeOutline
} from 'ionicons/icons';
import { useApp } from '../context/AppContext';

const Asistencia: React.FC = () => {
  const { marcajes, registrarMarcaje } = useApp();
  const [hora, setHora] = useState<string>('');
  const [showQRModal, setShowQRModal] = useState<boolean>(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hrs = now.getHours();
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      const ampm = hrs >= 12 ? 'PM' : 'AM';
      hrs = hrs % 12 || 12;
      setHora(`${String(hrs).padStart(2, '0')}:${mins}:${secs} ${ampm}`);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

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
                  Asistencia
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
            {/* Sucursal Card */}
            <IonCol size="12">
              <div style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#dbeafe', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                    <IonIcon icon={storefront} style={{ fontSize: '22px' }} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>Sucursal Centro</h3>
                      <IonIcon icon={chevronDown} style={{ fontSize: '14px', color: '#64748b' }} />
                    </div>
                    <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#64748b' }}>ID: SUC-001 • Av. Juárez 240</p>
                  </div>
                </div>
                <span style={{ backgroundColor: '#10b981', color: '#ffffff', fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px' }}>• Abierta</span>
              </div>
            </IonCol>

            {/* Reloj y Acciones */}
            <IonCol size="12" sizeMd="6">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '24px 16px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#f1f5f9', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', color: '#475569', fontWeight: '600', marginBottom: '12px' }}>
                    <IonIcon icon={calendarOutline} style={{ fontSize: '14px' }} /> Domingo, 25 de Octubre
                  </div>
                  <h1 style={{ margin: 0, fontSize: '42px', fontWeight: '900', color: '#1d4ed8' }}>{hora || '07:19:00 PM'}</h1>
                  <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#64748b', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                    <IonIcon icon={timeOutline} style={{ fontSize: '14px' }} /> Zona Horaria: CDMX (GMT-6)
                  </p>
                </div>

                <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '18px' }}>SM</div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>Sofía Morales Valdez</h3>
                    <p style={{ margin: '2px 0 6px 0', fontSize: '12px', color: '#64748b' }}>Encargada de Turno • Sucursal Centro</p>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <IonIcon icon={checkmarkCircle} style={{ fontSize: '12px' }} /> En Turno
                    </span>
                  </div>
                </div>

                {/* Botón de Registro de Marcaje Interactivo */}
                <button
                  onClick={registrarMarcaje}
                  style={{ width: '100%', backgroundColor: '#047857', color: '#ffffff', border: 'none', borderRadius: '14px', padding: '16px', fontSize: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(4, 120, 87, 0.2)' }}
                >
                  <IonIcon icon={checkmarkCircleOutline} style={{ fontSize: '20px' }} />
                  Registrar Marcaje
                </button>

                {/* Botón de Escáner QR */}
                <button
                  onClick={() => setShowQRModal(true)}
                  style={{ width: '100%', backgroundColor: '#ffffff', color: '#1d4ed8', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '14px', fontSize: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}
                >
                  <IonIcon icon={qrCodeOutline} style={{ fontSize: '20px' }} />
                  Escanear Código QR
                </button>
              </div>
            </IonCol>

            {/* Lista de Marcajes de Hoy */}
            <IonCol size="12" sizeMd="6">
              <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '17px', fontWeight: '800', color: '#0f172a' }}>Marcajes de Hoy</h3>
                    <span style={{ backgroundColor: '#f1f5f9', color: '#475569', fontSize: '12px', fontWeight: '700', borderRadius: '12px', padding: '2px 8px' }}>
                      {marcajes.length}
                    </span>
                  </div>
                  <a href="#" style={{ fontSize: '13px', fontWeight: '700', color: '#2563eb', textDecoration: 'none' }}>
                    Ver semana <IonIcon icon={chevronForward} />
                  </a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {marcajes.map(m => (
                    <div key={m.id} style={{ backgroundColor: '#f8fafc', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{ width: '42px', height: '42px', backgroundColor: m.bgIcono, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: m.colorIcono }}>
                          <IonIcon icon={m.icono} style={{ fontSize: '22px' }} />
                        </div>
                        <div>
                          <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '800', color: '#0f172a' }}>{m.hora}</h4>
                          <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: '#64748b' }}>{m.tipo}</p>
                        </div>
                      </div>
                      <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '12px' }}>
                        {m.estado}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Modal Simulador de Escáner QR */}
        <IonModal isOpen={showQRModal} onDidDismiss={() => setShowQRModal(false)}>
          <div style={{ padding: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#0f172a', color: '#ffffff' }}>
            <IonButton fill="clear" color="light" onClick={() => setShowQRModal(false)} style={{ position: 'absolute', top: '16px', right: '16px' }}>
              <IonIcon icon={closeOutline} style={{ fontSize: '28px' }} />
            </IonButton>
            <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>Escanear QR de Empleado</h2>
            <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>Apunta la cámara al código QR para validar la asistencia.</p>
            <div style={{ width: '220px', height: '220px', border: '3px dashed #2563eb', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
              <IonIcon icon={qrCodeOutline} style={{ fontSize: '80px', color: '#60a5fa' }} />
            </div>
            <button
              onClick={() => {
                registrarMarcaje();
                setShowQRModal(false);
              }}
              style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '14px', padding: '14px 24px', fontSize: '15px', fontWeight: '700', cursor: 'pointer' }}
            >
              Simular Lectura de QR
            </button>
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Asistencia;