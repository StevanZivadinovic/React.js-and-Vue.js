
export default {
state: {
    bogoslovije: [
      { name: "Karlovacka", price: 20 },
      { name: "Niška", price: 40 },
      { name: "Cetinjska", price: 60 },
      { name: "Prizrenska", price: 80 },
    ]
  },
  getters:{
    getSeminary: state=>{
      var Seminary = state.bogoslovije.map(eparhija=>{
          return {
              name:'**'+eparhija.name+'**'
          }
      })
      return Seminary;
   }
  },
  mutations:{
   
  },
  actions:{
   
  }

};

