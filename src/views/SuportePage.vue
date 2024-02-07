<template>
    <ion-header>
    <ion-toolbar>
      <ion-title>Suporte Central</ion-title>
    </ion-toolbar>
  </ion-header>
        <h2>Selecione a Empresa Abaixo:</h2>
        <ion-radio-group value="overlay" v-model="menuType">
          <ion-item>
            <ion-radio value="overlay">
              <code>Samsung</code>
            </ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio value="reveal">
              <code>Xiaomi</code>
            </ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio value="push">
              <code>Iphone</code>
            </ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio value="Law">
              <code>Asus</code>
            </ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio value="Order">
              <code>LG</code>
            </ion-radio>
          </ion-item>
        </ion-radio-group>
        <br />
        <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Contato Suporte</ion-button>
    <div></div>
      <ion-content class="ion-padding">
      </ion-content>
      <ion-modal ref="modal" trigger="open-modal" :enter-animation="enterAnimation" :leave-animation="leaveAnimation">
      <ion-content>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="dismiss()">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
        <ion-list>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>Connor Kent</h2>
              <p>1999-887-853</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=a"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>Daniel Souza</h2>
              <p>1999-228-2463</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=d"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>Michael Adams</h2>
              <p>1999-266-387</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=e"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>Zoey Smith</h2>
              <p>1999-3845-3483</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>
  
  <script lang="ts" setup>
  import {
    createAnimation,
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonAvatar,
    IonImg,
    IonLabel,
  } from '@ionic/vue';
  import { ref } from 'vue';

  const modal = ref();

  const dismiss = () => modal.value.$el.dismiss();

  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root.querySelector('ion-backdrop'))
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(root.querySelector('.modal-wrapper'))
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl) => {
    return enterAnimation(baseEl).direction('reverse');
  };
</script>