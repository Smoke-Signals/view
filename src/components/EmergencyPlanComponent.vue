<template>
	<h1>EmergencyPlanComponent</h1>
	<!-- De code hier onder is niet meer geschikt volgens het design -->

	<!-- <h1 class="text" style="padding-top: 20px;">Fire : 5th floor</h1>
	<div class="flex" id="home-container">
			<ion-icon :icon="flameIcon" style="font-size: 3rem;" class="red"></ion-icon>
			<ion-icon :icon="homeIcon" style="font-size: 3rem;"></ion-icon>
	</div>
	<ion-content>
		<h1 class="text">Go down</h1>
		<div class="flex">
			<ion-icon :icon="arrowDownIcon" style="font-size: 3rem;"></ion-icon>
		</div>
	</ion-content> -->
</template>
  
<script lang="ts">
import { IonIcon, IonContent } from '@ionic/vue';
import { home, arrowDown, flame, settings } from 'ionicons/icons';

export default {
  components: {
    // IonIcon,
    // IonContent,
  },
  computed: {
    homeIcon() {
      return home;
    },
    arrowDownIcon() {
      return arrowDown;
    },
    flameIcon() {
      return flame;
    }
  }
};
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