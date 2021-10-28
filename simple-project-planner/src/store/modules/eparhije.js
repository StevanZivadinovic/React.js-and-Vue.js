import axios from "axios";
export default {
    state: {
        eparhije: { 
         byId:{
          1:{
            id:1,
            nameOfDiocese:'Niska',
            residence:'',
            adress:''
          },
          2:{
           id:2,
           nameOfDiocese:'Mohacka',
           residence:'',
           adress:''
         },
         3:{
           id:3,
           nameOfDiocese:'Pakracko-slavonska',
           residence:'',
           adress:''
         },
         4:{
           id:4,
           nameOfDiocese:'Sabacka',
           residence:'',
           adress:''
         }
        },
        List:[],
        Total:null
        
        
      }},
      getters:{
        getDiocese: state=>{
          // var Diocese = state.eparhije.byId.map(eparhija=>{
          //   console.log(eparhija)
          //     return {
          //         // name:'**'+eparhija.name+'**'
          //     }
          // })
          let diocese = state.eparhije.byId
          console.log(diocese)
          return diocese;
       }
      },
      mutations:{
       
      },
      actions:{
        getDataJSON:()=>{
          //db/data/eparhije/byId',{params: 1}
          //,{params: {'db':'eparhije'}}
          axios.get('./../../data/db.json/')
          .then(data=>{
            console.log(data)
          })
        }
       
      }
    
    };
    
    