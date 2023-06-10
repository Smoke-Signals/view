<template>
	<!-- <h1>BuildingComponent</h1> -->

	<div class="building">
        <img :src="buildingImage" @click="changeBuilding" />
    </div>

</template>
  
<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const buildingImage = ref('/assets/building.svg');

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
  .building {
    display: flex;
    justify-content: center;
    height: 100%;
    padding-top: 2.6875rem; /* 43 px padding per design */
  }
  .building img {
    width: 165px;
    height: 357px;
  }
</style>
