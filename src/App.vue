<template>
  <ion-app>
    <!-- <ion-router-outlet /> -->
    <home-page></home-page>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import HomePage from './views/HomePage.vue';
</script>
