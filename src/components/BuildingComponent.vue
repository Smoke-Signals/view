<template>
	<!-- <h1>BuildingComponent</h1> -->

	<div class="building">
        <img src="/assets/building.svg" />
      </div>

</template>
  
<script lang="ts">
export default {};
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
