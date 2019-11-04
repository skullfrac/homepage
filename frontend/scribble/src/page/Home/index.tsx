import * as React from 'react';

import {
  IonContent,
  IonSlide,
  IonSlides
} from '@ionic/react';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import Landing from '/srv/app/frontend/src/component/Landing';


const Home = () => {

  const slideOpts = {
    length: 2,
    slidesPerView: 1,
    centeredSlides: true
  }

  return (
  <>
    <IonContent>
      <IonSlides pager={true} options={slideOpts} >
        <IonSlide >
          <Landing />
        </IonSlide>
        <IonSlide >
          <Landing />
        </IonSlide>
      </IonSlides>
    </IonContent>
  </>
  )
};

export default Home;
