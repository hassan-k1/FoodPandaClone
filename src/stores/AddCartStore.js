import { defineStore } from "pinia";
import { products } from "../data/Products";
export const useAddCartStore = defineStore("addCart", {
  state: () => {
    return {
      product: products,
      cartItems: [],
      isOpen: false,
    };
  },
  getters: {
    countCartItems() {
      return this.cartItems.length;
    },
    getCartItems() {
      return this.cartItems;
    },
  },
  actions: {
    addToCart(item) {
      this.isOpen = true;
      let exitItem = this.cartItems.find((product) => product.id === item.id);
      console.log(exitItem);
      if (exitItem) {
        exitItem.quantity++;
      } else {
        this.cartItems.push({ ...item, quantity: 1 });
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
      }
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(
            (product) => product.id !== item.id
          );
        }
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(
        (product) => product.id !== item.id
      );
    },
    toggleNav() {
      this.isOpen = !this.isOpen;
    },
  },
});
