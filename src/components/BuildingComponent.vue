<template>
	<!-- <h1>BuildingComponent</h1> -->

  <div class="building-card">
	<div class="building">
        <img :src="buildingImage" @click="changeBuilding" />
    </div>
    </div>


</template>
  
<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const buildingImage = ref('/assets/Gebouw - omhoog.svg');

    const changeBuilding = () => {
      // Code to change the building image goes here.
      // For now, it doesn't do anything.
    };

    return {
      buildingImage,
      changeBuilding
    }
  }
};
</script>

<style scoped>
.building-card {
  background: white;
  width: 341px;
  height: 402px;
  margin: 24px; 
  border-radius: 25px;
}
  .building {
    display: flex;
    justify-content: center;
    height: 100%;
    padding-top: 30px; /* 43 px padding per design */  
  }
  .building img {
    width: 248px;
    height: 342px
;
  }
</style>
