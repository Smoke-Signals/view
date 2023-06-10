<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Welcome to the Setting Page</h1>
      <p>This is the content of the Settings Page.</p>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import { IonHeader, IonPage, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton } from '@ionic/vue';
</script>
