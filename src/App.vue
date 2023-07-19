<template>
  <NavBar />
  <div id="app">
    <div class="content">
      <router-view> </router-view>
    </div>
  </div>
  <Bottom />
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "../src/Layouts/Header.vue";
import Bottom from "../src/Layouts/Footer.vue";

// export default {
//   data() {
//     return {
//       result: "",
//     };
//   },
//   methods: {
//     newEmittedData(emitted_data) {
//       console.log(emitted_data);
//     },
//   },
// };
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
}
</style>
