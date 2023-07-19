import { defineStore } from "pinia";
import axios from "axios";
export const useCheckInStore = defineStore("checkInStore", {
  state: () => {
    return {
      listItem: [],
      selectCountry: "",
      selected: "",
      selectedCity: "",
      cityList: "",
      selectedState: "",
      stateList: "",
      Adress: "",
    };
  },

  actions: {
    async country_is() {
      const res = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/states"
      );
      this.listItem = res.data;
      console.log(this.listItem);
    },
    handleChangeState() {
      axios
        .post("https://countriesnow.space/api/v0.1/countries/state/cities", {
          country: this.selectCountry,
          state: this.selectedState,
        })
        .then((response) => {
          console.log(response.data.data);
          this.cityList = response.data.data;
          // Handle the response data here
        })
        .catch((error) => {
          console.error(error);
          // Handle any errors here
        });
    },
    handleChange(item) {
      this.selected = this.listItem.data.find(
        (country) => country.name === item
      );
      this.stateList = this.selected.states;
    },
  },
});
