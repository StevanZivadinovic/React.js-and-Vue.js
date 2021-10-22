export default {
    state: {
        products: [
          { name: "Banana Skin", price: 20 },
          { name: "Shiny Star", price: 40 },
          { name: "Green Shells", price: 60 },
          { name: "Red Shells", price: 80 },
        ],
    
        Bogoslovija:{
            
        }
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
      },
      mutations:{
          reducePrice:(state,payload)=>{
            //   console.log(mutations)
              state.products.forEach(product=>{
                  console.log(product.price)
                  product.price-=payload;
              })
          }
      },
      actions:{
          reducePrice1:(context, payload)=>{//context je promenlkjiva koja ide uz akcije
              setTimeout(()=>{
                  context.commit('reducePrice', payload);//ovde je pozvana mutacija da se izvrsi
              },2000)
          }
      }
    
    };
    