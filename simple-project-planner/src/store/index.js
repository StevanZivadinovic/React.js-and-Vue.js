
import { createStore } from 'vuex';
// import modules from './modules';
import products from './../store/modules/products'
const store = createStore({
  modules:{
    products
  }
 
});


export default store;
