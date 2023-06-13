<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <!-- Eventuele knoppen aan het begin van de navigatiebalk -->
          </ion-buttons>
          <ion-title>View</ion-title>
          <ion-buttons slot="end">
            <ion-button router-link="/settings-page" router-direction="forward">
              <ion-icon slot="icon-only" :ios="settingsIcon" :md="settingsIcon"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <!-- Hier de components -->
        <div class="flex-container">
          <div class="top-section">
            <!-- De building moet circa 70% van het scherm hebben -->
            <BuildingComponent />
          </div>
          <div class="bottom-section">
            <!-- De stappenplan moet circa 30% van het scherm hebben (onderaan) -->
            <EmergencyPlanComponent />
          </div>
        </div>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonTitle, IonPage, IonButton, IonButtons, IonToolbar, IonHeader, IonIcon, IonContent } from '@ionic/vue';
import { settings } from 'ionicons/icons';
import BuildingComponent from "@/components/BuildingComponent.vue"
import EmergencyPlanComponent from "@/components/EmergencyPlanComponent.vue"

export default {
  components: {
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
      return settings;
    },
  }
};
</script>

<style>
  .flex-container {
    display: flex;
    flex-direction: column;
    height: 100vh; /* Volledige hoogte van het scherm */
  }

  .top-section {
    flex: 0 0 70%; /* 70% van de flexcontainerhoogte */
    background-color: red; /* Vervang dit met de gewenste achtergrondkleur */
  }

  .bottom-section {
    flex: 0 0 30%; /* 30% van de flexcontainerhoogte */
    background-color: #fafafa; /* Vervang dit met de gewenste achtergrondkleur */
  }
</style>