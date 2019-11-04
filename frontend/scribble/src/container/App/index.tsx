import * as React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import {
  IonApp,
  IonContent,
  IonPage,
  IonReactRouter,
  IonSlides,
  IonSlide
  } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

import Home from '/srv/app/frontend/src/page/Home';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage>
        <Home />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App
