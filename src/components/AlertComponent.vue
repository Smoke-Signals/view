<template>
    <ion-header>
        <ion-toolbar>
            <ion-title> Safe Pass </ion-title>
                <ion-button slot="end" fill="clear" @click="navigateToNextPage">
                    <ion-icon slot="icon-only" :ios="settings" :md="settings"></ion-icon>
                </ion-button>
  </ion-toolbar>
</ion-header>
        <ion-title class="text" style="padding-top: 20px;">Fire : 5th floor</ion-title>
        <div class="flex" id="home-container">
            <ion-icon :icon="flame" style="font-size: 3rem;" class="red"></ion-icon>
            <ion-icon :icon="home" style="font-size: 3rem;"></ion-icon>
        </div>
        <ion-footer id="footer">
            <ion-title class="text">Go down</ion-title>
            <div class="flex">
            <ion-icon :icon="arrowDown" style="font-size: 3rem;"></ion-icon>
            </div>
        </ion-footer>
</template>

<script setup>
import { IonIcon } from '@ionic/vue';
import { home } from 'ionicons/icons';
import { arrowDown } from 'ionicons/icons';
import { flame } from 'ionicons/icons';
import { settings } from 'ionicons/icons';
import { useRouter } from 'vue-router';

console.log("component ingeladen");

const navigateToNextPage = () => {
    console.log('going to settings')
    const router = useRouter();
    router.push('/settings');
}

</script>

<style scoped>

.text {
text-align: center;
color: white;
}

ion-title {
    color:white;
}

#line {
    background-color: white
}

ion-icon {
    color:white;
    margin-left: 6px;
    margin-right: 6px;
}

.red {
    color: red;
}

ion-title {
    font-weight: bold;
    font-size: 1.5em;
  }

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

#home-container {
    padding-bottom: 80px;
}
</style>