
import { createStore } from 'vuex';
// import modules from './modules';
import products from './../store/modules/products'
import bogoslovije from './modules/bogoslovije';
import eparhije from './modules/eparhije';
import djaci from './modules/djaci';
const store = createStore({
  modules:{
    products,
    bogoslovije,
    eparhije,
    djaci
  }
 
});


export default store;
