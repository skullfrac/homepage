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
  IonList,
  IonRow,
  IonTitle
} from '@ionic/react';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './blog.css';
import { logoGithub, book } from 'ionicons/icons';

const Blog = () => (
  <>
    <IonContent>
    <IonHeader translucent>
      <IonTitle>BLOG</IonTitle>
    </IonHeader>
    <IonList>
      <IonItem>
        <IonLabel>
          <h1>Welcome to my Blog</h1>
          <h2>this is an example entry</h2>
          <p>It was meant to be good, and here we are...</p>
        </IonLabel>
      </IonItem>
    </IonList>
    </IonContent>
  </>
);

export default Blog;
