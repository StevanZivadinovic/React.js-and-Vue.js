<template>
  <div>
    <main :class="Math.round(weather.main.temp)>15 ? 'warm':''">
      <!-- <div class="background"></div> -->
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Search..."
          v-model="query"
          @keypress="fetchData($event)"
        />
      </div>

      <div class="weather-box" v-if="weather">
        <div class="location">{{ weather.name }}</div>
        <div class="date">{{dateConverter()}}</div>
        <div class="temperature">{{Math.round(weather.main.temp)}}°C</div>
        <div class="weather">{{weather.weather[0].description}}</div>
      </div>
    </main>
    <New />
  </div>
</template>

<script>
import New from "./components/New.vue";

export default {
  data() {
    return {
      api_key: "617a0843ba56532c1a023a3815616443",
      url_base:'https://api.openweathermap.org/data/2.5/',
      query:null,
      weather:null
    };
  },
  methods: {
    fetchData: function (e) {
        if(e.key ==='Enter'){
           let a = `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`;
            fetch(a)
            .then(data=>{
                console.log(data)
                return data.json()
            }).then(data=>{
                console.log(data)
                this.weather = data
            })
        }
    },

    dateConverter(){
        const d = new Date();

        let dan = d.getDay();
        let mesec = d.getMonth();
        let danUMesecu = d.getDate();
        let godina = d.getFullYear()

        let dani = ['Ponedeljak', 'Utorak','Sreda','Cetvrtak', 'Petak',
        'Subota','Nedelja'];

        let meseci = ['Januar','Februar','Mart','April','Maj','Jun','Jul',
        'Avgust','Septembar','Oktobar','Novembar','Decembar'];

        return `${dani[dan-1]},${danUMesecu}.${meseci[mesec]} ${godina}`

    }
  },
};
</script>

<style>
</style>





