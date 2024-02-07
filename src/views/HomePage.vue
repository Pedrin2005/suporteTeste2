<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Assistencia Tecnica Central</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">

    <div style="text-align: center">
  <img src="/public/reparo.jpg" width="120px" />
    </div>
  <div style="text-align: center">

    <ion-button id="open-modal" expand="block" @click="salta">Entrar</ion-button>
    <p>{{ message }}</p>

    </div>


    <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="cancel()">Cancel</ion-button>
          </ion-buttons>
          <ion-title>Welcome</ion-title>
          <ion-buttons slot="end">
            <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-input
            label="Digite seu Nome"
            label-placement="stacked"
            ref="input"
            type="text"
            placeholder="Nome Completo"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            label="Digite seu Email"
            label-placement="stacked"
            ref="input"
            type="text"
            placeholder="Email"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            label="Digite sua Senha"
            label-placement="stacked"
            ref="input"
            type="text"
            placeholder="Senha"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            label="Digite seu CPF"
            label-placement="stacked"
            ref="input"
            type="text"
            placeholder="CPF"
          ></ion-input>
        </ion-item>
      </ion-content>
    </ion-modal>

  </ion-content>
</template>

<script lang="ts" setup>
  import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
  } from '@ionic/vue';
  import { OverlayEventDetail } from '@ionic/core/components';
  import { ref } from 'vue';

  const message = ref('Bem vindo a Assistencia Tecnica Central. Somos especializados em Samsung, Xiaomi, Iphone, Asus e LG. Garantimos qualidade e rapidez, pois manteremos contato direto com as respectivas empresas para oferecer o melhor serviço. Para isso precisamos que voçê conclua seu cadastro para que possamos dar inicio a sua assistencia.');

  const modal = ref();
  const input = ref();

  const cancel = () => modal.value.$el.dismiss(null, 'cancel');

  const confirm = () => {
    const name = input.value.$el.value;
    modal.value.$el.dismiss(name, 'confirm');
  };

  const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
    if (ev.detail.role === 'confirm') {
      message.value = `Hello, ${ev.detail.data}!`;
    }
  };

  const salta = (ev: CustomEvent<OverlayEventDetail>) => {

    window.location.href = '/cadastro';

  };

</script>