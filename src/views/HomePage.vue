<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start"></ion-buttons>
          <ion-title class="ion-text-center">
            <div class="logo-container">
              <ion-img class="view-logo" src="assets/logo.svg"></ion-img>
            </div>
          </ion-title>
          <ion-buttons slot="end">
            <ion-button router-link="/settings-page" router-direction="forward">
              <ion-icon slot="icon-only" :ios="settingsIcon" :md="settingsIcon" id="settingsIcon"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <!-- Hier de components -->
        <div class="flex-container">
          <div class="top-section">
            <!-- De building moet circa 35% van het scherm hebben -->
            <BuildingComponent />
          </div>
          <div class="bottom-section">
            <!-- De stappenplan neemt de resterende ruimte in beslag -->
            <EmergencyPlanComponent />
          </div>
        </div>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonImg, IonTitle, IonPage, IonButton, IonButtons, IonToolbar, IonHeader, IonIcon, IonContent } from '@ionic/vue';
import { settingsOutline } from 'ionicons/icons';
import BuildingComponent from "@/components/BuildingComponent.vue"
import EmergencyPlanComponent from "@/components/EmergencyPlanComponent.vue"

export default {
  components: {
    IonImg,
    IonPage,
    IonTitle,
    IonButton,
    IonButtons,
    IonToolbar,
    IonHeader,
    IonIcon,
    IonContent,
    BuildingComponent,
    EmergencyPlanComponent
  },
  computed: {
    settingsIcon() {
      return settingsOutline;
    },
  }
};
</script>

<style>
  #settingsIcon{
    color: black;
  }
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  /* .view-logo {
    width: 105.53px;
    height: 26px;
  } */

  .flex-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .top-section {
    flex: 0 0 20%;
    background-color: #FAFAFA;
  }

  .bottom-section {
    flex: 1;
    background-color: #FAFAFA;
  }
</style>
