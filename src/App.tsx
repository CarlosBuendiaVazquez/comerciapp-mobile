import React from 'react';
import { Route, Redirect } from 'react-router-dom';
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

// Importación de Páginas
import Asistencia from './pages/Asistencia';
import Inventario from './pages/Inventario';
import Dashboard from './pages/Dashboard';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/asistencia" component={Asistencia} />
          <Route exact path="/inventario" component={Inventario} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/">
            <Redirect to="/asistencia" />
          </Route>
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
  </IonApp>
);

export default App;