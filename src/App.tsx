import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { timeOutline, cubeOutline, barChartOutline } from 'ionicons/icons';

// 1. Importamos el AppProvider de nuestro Contexto Global
import { AppProvider } from './context/AppContext';

// Páginas de la Aplicación
import Asistencia from './pages/Asistencia';
import Inventario from './pages/Inventario';
import Dashboard from './pages/Dashboard';

/* CSS Obligatorio de Ionic */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* 2. Envolvemos toda la app con AppProvider para proveer las funciones e interacciones */}
    <AppProvider>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/asistencia" element={<Asistencia />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="/asistencia" replace />} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="asistencia" href="/asistencia">
              <IonIcon icon={timeOutline} />
              <IonLabel>Asistencia</IonLabel>
            </IonTabButton>

            <IonTabButton tab="inventario" href="/inventario">
              <IonIcon icon={cubeOutline} />
              <IonLabel>Inventario</IonLabel>
            </IonTabButton>

            <IonTabButton tab="dashboard" href="/dashboard">
              <IonIcon icon={barChartOutline} />
              <IonLabel>Dashboard</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </AppProvider>
  </IonApp>
);

export default App;