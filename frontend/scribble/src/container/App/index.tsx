import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
  IonApp,
  IonContent,
  IonPage,
  IonSlides,
  IonSlide
  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import Home from '/srv/app/frontend/src/page/Home';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App
