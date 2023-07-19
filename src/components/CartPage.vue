<template>
  <div class="row my-4">
    <h4 class="cartheading">Shopping Cart</h4>
    <div class="col-md-12">
      <div v-if="data.cartItems.length >= 1">
        <div class="card-body px-3 py-3">
          <table class="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data.getCartItems" :key="item.id">
                <td>
                  <img
                    :src="item.image"
                    class="fluid rounded"
                    width="40"
                    height="35"
                    :alt="item.name"
                  />
                </td>
                <td>
                  {{ item.name }}
                </td>
                <td>
                  <i @click="data.decrementQ(item)" class="bi bi-dash"></i>
                  <span class="mx-2">
                    {{ item.quantity }}
                  </span>
                  <i @click="data.incrementQ(item)" class="bi bi-plus"></i>
                </td>
                <td>${{ item.price }}</td>
                <td>${{ item.price * item.quantity }}</td>
                <td>
                  <i
                    @click="data.removeFromCart(item)"
                    class="bi bi-trash-fill text-danger"
                  ></i>
                </td>
              </tr>
              <tr>
                <th colSpan="3" class="text-center">Total</th>
                <td colSpan="3" class="text-center">
                  <span class="badge cartTotalHeading rounded-pill p-2">
                    ${{
                      data.cartItems.reduce(
                        (acc, item) => (acc += item.price * item.quantity),
                        0
                      )
                    }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <img src="../assets/foodpandagif.gif" alt="checkInImage" />
        </div>
        <router-link to="/checkin"
          ><button
            class="p-2 text-center btn btnProceedCheck"
            @click="data.toggleNav()"
          >
            Proceed to check
          </button></router-link
        >
      </div>
      <div v-else>
        <div class="container">
          <img
            src="../assets/cartemty.png"
            width="400"
            height="300"
            alt="emtyCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAddCartStore } from "../stores/AddCartStore";
//get store
const data = useAddCartStore();
</script>

<style scoped>
.cartheading {
  color: palevioletred;
  font-weight: 500;
}
.cartTotalHeading {
  background-color: palevioletred;
}
.btnProceedCheck {
  background-color: rgb(228, 129, 162);
  color: white;
}
.btnProceedCheck:hover {
  background-color: rgb(186, 89, 121);
  color: white;
}
</style>
../stores/AddCartStore
