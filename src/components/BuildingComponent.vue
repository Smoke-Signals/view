<template>
	<div class="flex">
		<div class="building-card">
			<div class="building">
				<img :src="buildingImage" @click="changeBuilding" />
			</div>
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
  margin-top: 15px; 
  margin-bottom: 15px;
  margin-left: 5;
  margin-right: 5;
  border-radius: 25px;
}
  .building {
    display: flex;
    justify-content: center;
    height: 100%;
    padding-top: 30px; /* 30 px padding per design */  
  }
  .building img {
    width: 248px;
    height: 342px;
  }
.flex {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	/* margin-top: 10px;
	margin-bottom: 10px; */
}
</style>