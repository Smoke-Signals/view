<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>VIEW</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">VIEW</ion-title>
          </ion-toolbar>
        </ion-header>
       <alert-component />
      </ion-content>
    </ion-page>
  </template>

  <script setup>
import AlertComponent from "@/components/AlertComponent.vue"
</script>