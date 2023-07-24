<template>
  <div>
    <nav
      class="navbar navbar-expand-sm navbar-light p-2 sticky-top"
      style="background-color: #fbfbfb"
    >
      <div class="container-fluid d-flex">
        <div class="d-flex" id="navbarSupportedContent">
          <a class="navbar-brand" href="#">
            <img
              src="../assets/foodpandalogo.png"
              height="23"
              alt="foodpanda Logo"
              loading="lazy"
            />
          </a>
          <h6 class="logo">foodpanda</h6>
        </div>

        <div @click="clickbtn">
          <i class="bi bi-cart-fill my-icon"></i>
          <div class="badge badge-warning" id="lblCartCount">
            {{ data.cartItems.length >= 1 ? data.countCartItems : null }}
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAddCartStore } from "../stores/AddCartStore";
const emits = defineEmits(["toggleCart"]);
//get store
const data = useAddCartStore();

let toggle = ref(false);
const clickbtn = () => {
  toggle.value = !toggle.value;
  emits("toggleCart", toggle.value);
};
</script>

<style scoped>
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
