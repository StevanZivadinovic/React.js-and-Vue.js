import { bounds } from "leaflet";

let initialState = {
    status: {
     bounds:[]
    },
  };
  
  const rootReducer = (state = initialState, action) => {
  
    if(action.type === 'SET_BOUNDS'){
      console.log('akcija')
      return{

          status:{
                  
                 bounds:[JSON.parse(localStorage.getItem('bounds'))]
                }
      }
      
    }
    // if(action.type === 'VALIDATION_TEXTAREA_TRUE'){
    //   console.log('truetextareaTRUE');
    //   console.log(state.status.textarea)
    //   return{
        
    //     status:{
    //       ...state,
    //       textarea:true
    //     }
        
    //   }
    // }
  
    
  
    return state;
    
  
    
  
  };
  
  export default rootReducer;