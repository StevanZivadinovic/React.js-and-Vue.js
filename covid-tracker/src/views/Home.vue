<template>
  <div class="home">
    <div
      v-if="loading"
      class="
        flex flex-col
        justify-center
        w-30
        text-center
        mx-auto
        text-gray-600
      "
    >
      <h2 class="text-3xl">{{ title }}</h2>
      <p class="text-xl">{{ dataDate }}</p>

      <div class="flex flex-col justify-center">
        <div class="flex flex-col bg-blue-300 py-5 px-20 rounded mt-2">
          <h3 class="text-2xl">Cases</h3>
          <p>
            <span class="font-bold text-gray-900">New:</span>
            {{ numberWithCommas(stats.NewConfirmed) }}
          </p>
          <p>
            <span class="font-bold text-gray-900">Total:</span
            >{{ numberWithCommas(stats.TotalConfirmed) }}
          </p>
        </div>
        <div class="flex flex-col bg-blue-500 py-5 px-20 rounded mt-2">
          <h3 class="text-2xl">Deaths</h3>
          <p>
            <span class="font-bold text-gray-900">New:</span
            >{{ numberWithCommas(stats.NewDeaths) }}
          </p>
          <p>
            <span class="font-bold text-gray-900">Total:</span
            >{{ numberWithCommas(stats.TotalDeaths) }}
          </p>
        </div>
      </div>
      <!-- v-model='selected' hvata value vrednost selectovanog elementa, to je ovde country.ID i stavlja tu vrednost u promenljivu 
      selected koju smo definisali dole u data()-->
      <select
        v-model="selected"
        class="form-select mt-10 block w-full border p-3 rounded"
        @change="change"
      >
        <option value="0">Select Country</option>
        <option v-for="country in countries" :key="country" :value="country.ID">
          {{ country.Country }}
        </option>
      </select>
    </div>
    <div v-else>
      <img :src="loadingImage" alt="" />
      Loading...
    </div>
    <button @click='clearCountry' class="bg-green-700 text-white p-4 rounded mt-10">Clear Country</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},

  data() {
    return {
      n: "text text",
      podaci: {},
      dataDate: "",
      loading: false,
      title: "Global",
      stats: [],
      countries: [],
      loadingImage: require("./../img/Hourglass.gif"),
      selected: 0,
    };
  },
  name: "Home",
  components: {},
  methods: {
    getApiData() {
      fetch("https://api.covid19api.com/summary")
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          this.dataDate = data.Date;
          this.countries = data.Countries;
          this.stats = data.Global;
          console.log(data);
          return data;
        });
    },
    numberWithCommas(x) {
      if (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },
    change() {
      const country = this.countries.find((item) => item.ID === this.selected);
      console.log(country, this.selected);
      this.title = country.Country;
      this.stats = country;

      return country;
    },
    clearCountry(){
       this.getApiData();
      this.loading = true;
      this.title = 'Global'
    }
  },
  created() {
    this.getApiData();
    this.loading = true;
  },
};
</script>
