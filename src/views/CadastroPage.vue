<template>
    <ion-header>
      <ion-toolbar>
        <ion-title>Central de Cadastro</ion-title>

        <ion-button slot="end" @click="salvar">
    <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
  </ion-button>

      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div style="text-align: center">
      <img src="/public/icone.jpg" width='120px'/>
      </div>  
      <div style="text-align: center">
      Assim que completar o cadastro clique no botao azul acima para continuar
    </div> 
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
  </template>
  
  <script lang="ts">

    import {
      IonButtons,
      IonButton,
      IonHeader,
      IonContent,
      IonToolbar,
      IonTitle,
      IonItem,
      IonInput,
    } from '@ionic/vue';
    import { arrowForwardOutline } from 'ionicons/icons';
    import { defineComponent } from 'vue';

    export default defineComponent({
        components: { IonButtons, IonToolbar},
        data(){

        },
        methods: {

salvar(){
    alert('CADASTRO CONCLUIDO');

window.location.href = '/suporte';

}


        },
        created(){

        },
        setup() {
            return { arrowForwardOutline }
        }

    });
    

    

  </script>