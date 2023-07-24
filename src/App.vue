<template>
  <NavBar @toggle-cart="clicked" />
  <CartPage :drawer="toggle" />
  <div id="app">
    <div class="content">
      <router-view />
    </div>
  </div>
  <Bottom />
</template>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import NavBar from "../src/Layouts/Header.vue";
import Bottom from "../src/Layouts/Footer.vue";
import CartPage from "../src/components/CartPage.vue";

let toggle = ref(false);
const clicked = (value) => {
  toggle.value = value;
};
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

.logo {
  color: palevioletred;
  font-weight: 800;
  font-size: large;
  margin-top: 11px;
}
.my-icon {
  color: palevioletred;
  font-size: x-large;
}
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}
#lblCartCount {
  font-size: 12px;
  background: palevioletred;
  color: #fff;
  padding: 0 5px;
  vertical-align: top;
  margin-left: -8px;
}
.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0px;
  right: 0px;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.opened {
  width: 410px;
}

.cartTotalText {
  background-color: palevioletred;
}

@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}
</style>
