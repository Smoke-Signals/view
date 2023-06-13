<template>
	<!-- <h1>BuildingComponent</h1> -->

  <div class="building-card">
	<div class="building">
        <img :src="buildingImage" @click="changeBuilding" />
    </div>
    </div>


</template>

<script lang="ts">
import { ref, computed } from 'vue';

export default {
  setup() {
    const currentBuilding = ref(1);  // Keep track of the current building image

    const changeBuilding = () => {
      currentBuilding.value = currentBuilding.value === 1 ? 2 : 1;
    };

    const buildingImage = computed(() => {
      return currentBuilding.value === 1 ? '/assets/Gebouw - omhoog.svg' : '/assets/Gebouw - omlaag.svg';
    });

    return {
      buildingImage,
      changeBuilding,
    };
  },
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
