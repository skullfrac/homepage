import * as React from 'react';

import {
  IonAvatar,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonRow
} from '@ionic/react';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './landing.css';
import { logoGithub } from 'ionicons/icons';

import skull from '/srv/app/frontend/src/component/Landing/punisher.png';

const Landing = () => (
  <>
    <div id="panel-cover">
      <IonGrid id="info-block" >
        <IonRow id="info-block" >
          <div id="panel-main" >
            <IonCard >
              <IonAvatar id="avatar-image" >
                <IonImg src={skull} />
              </IonAvatar>
              <div id="panel-cover--divider"></div>
              <IonRow id="icon-toolbar">
                <IonCol>
                  <IonIcon icon={logoGithub}></IonIcon>
                </IonCol>
              </IonRow>
            </IonCard>
          </div>
        </IonRow>
      </IonGrid>
      <div id="panel-cover--overlay"></div>
    </div>
  </>
);

export default Landing;
