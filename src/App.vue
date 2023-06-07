<template>
  <ion-app>
    <ion-router-outlet>
      <home-page></home-page>
    </ion-router-outlet>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp } from '@ionic/vue';
import HomePage from './views/HomePage.vue';
</script>
