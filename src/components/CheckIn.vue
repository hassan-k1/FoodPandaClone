<template>
  <div class="container p-3 mt-4 mb-5 checkContainer">
    <h5 class="text-center header">Order Detail Page</h5>
    <div class="row mt-5">
      <div class="col-lg-6 pt-3">
        <form>
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form3Example1">Name</label>
                <input
                  type="text"
                  id="form3Example1"
                  class="form-control shadow-none"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Phone</label>
            <input
              type="number"
              id="form3Example1"
              class="form-control shadow-none"
              autocomplete="off"
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Country</label>
            <b-form-select
              v-model="data.selectCountry"
              :options="data.listItem.data"
              text-field="name"
              class="shadow-none"
              @input="data.handleChange(data.selectCountry)"
            ></b-form-select>
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">State</label>
            <b-form-select
              v-model="data.selectedState"
              :options="data.stateList"
              text-field="name"
              class="shadow-none"
              @input="data.handleChangeState()"
            ></b-form-select>
          </div>
          <label class="form-label" for="form3Example3">City</label>
          <div class="form-outline mb-4">
            <b-form-select
              v-model="data.selectedCity"
              :options="data.cityList"
              class="shadow-none"
            ></b-form-select>
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Address</label>
            <input
              type="text"
              id="form3Example1"
              class="form-control shadow-none"
              v-model="data.Adress"
              @input="saveInput"
            />
          </div>
          <button
            type="submit"
            class="btn orderbutton btn-block mt-3"
            @click="formSubmit"
            :disabled="
              !data.selectedCity ||
              !data.selectedState ||
              data.Adress.length < 10 ||
              !data.selectCountry
            "
          >
            Order Now
          </button>
        </form>
      </div>
      <div class="col-lg-6">
        <div class="card mb-4">
          <div class="card-header py-3 text-center">
            <h5 class="mb-0 text-white">Summary</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
              >
                Products
                <span>
                  ${{
                    Total.cartItems.reduce(
                      (acc, item) => (acc += item.price * item.quantity),
                      0
                    )
                  }}</span
                >
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center px-0"
              >
                Shipping
                <span>Gratis</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"
              >
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p class="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span
                  ><strong
                    >${{
                      Total.cartItems.reduce(
                        (acc, item) => (acc += item.price * item.quantity),
                        0
                      )
                    }}</strong
                  ></span
                >
              </li>
            </ul>
          </div>
        </div>
        <img
          src="../assets/foodpandagif.gif"
          alt="image"
          style="width: 50%; margin-left: 25%"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAddCartStore } from "../stores/AddCartStore";
import { useCheckInStore } from "../stores/CheckInStore";
const Total = useAddCartStore();
const data = useCheckInStore();
data.country_is();
</script>
<style scoped>
.header {
  color: palevioletred;
  font-weight: 800;
}

.card-header {
  background-color: palevioletred;
}
.checkContainer {
  box-shadow: 2px 2px 4px 4px #d8d8d8;
  width: 70%;
  height: 50%;
}
.orderbutton {
  background-color: rgb(247, 143, 178);
  color: white;
}
</style>
