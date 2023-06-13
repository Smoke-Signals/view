<template>
	<div id="container">
    <h1 class="text">Wat moet je doen?</h1>
      <ion-img class="steps" src="/assets/stappen.svg"></ion-img>
    <div class="flex">
      <ion-button shape="round" fill="outline" expand="full">
        Ik heb hulp nodig
        <ion-icon slot="end" :icon="arrowForward" :md="arrowForward"></ion-icon>
      </ion-button>
    </div>
  </div>
</template>
  
<script lang="ts">
import { arrowForward } from 'ionicons/icons';
// import { stappen } from '/assets/stappen.svg';
// import { fireLogo } from 'assets/fireLogo';
import { defineComponent } from 'vue';

  export default defineComponent ({
    setup() {
      return {arrowForward}
    }
  });
</script>

<style scoped>

#container {
  border-radius: 25px;
  background-color: #000033;
  margin: 2em;
  padding: 4px;
}

.steps {
  margin: 30px;
}
    .text {
        text-align: center;
        color: white;
    }

    ion-icon {
        color:white;
        margin-left: 60px;
    }
    .flex {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    ion-button {
    --color: #BF2828;

    --border-radius: 25px;
    --border-color: white;
    --border-style: solid;
    --border-width: 1px;

    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

    --padding-top: 10px;
    --padding-bottom: 10px;
  }
</style>