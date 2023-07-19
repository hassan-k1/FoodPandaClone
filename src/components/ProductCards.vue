<template>
  <div class="container mt-5 mb-5">
    <h2 class="mb-4 text-muted">Resturants</h2>
    <div class="row justify-content-center">
      <div class="col-md-3 col-lg-3 col-sm-12" v-for="item in data.product">
        <div class="card mb-3" style="width: 17rem">
          <div :key="item.id">
            <img :src="item.image" class="card-img-top" alt="image" />
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">$ {{ item.price }}</p>
              </div>
              <p class="card-text">
                {{ item.size }}
              </p>
              <button class="btn orderbutton" @click="data.addToCart(item)">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//get store
import { useAddCartStore } from "../stores/AddCartStore";
const data = useAddCartStore();
</script>

<style scoped>
.orderbutton {
  background-color: rgb(247, 143, 178);
  color: white;
}
.orderbutton:hover {
  background-color: rgb(186, 89, 121);
  color: white;
}
</style>
