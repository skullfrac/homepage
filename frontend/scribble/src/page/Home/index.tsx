import * as React from 'react';

import {
  IonContent,
  IonSlide,
  IonSlides
} from '@ionic/react';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

const Home = () => (
  <>
    <IonContent>
      <IonSlides>
        <IonSlide>
          <p> Hello World </p>
        </IonSlide>
      </IonSlides>
    </IonContent>
  </>
);

export default Home;
