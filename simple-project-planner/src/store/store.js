
import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ],
  },
  getters:{
       saleProducts: state=>{
           var saleProducts1 = state.products.map(product=>{
               return {
                   name:'**'+product.name+'**',
                   price:product.price/2
               }
           })
           return saleProducts1;
        }
  }
});

export default store;
