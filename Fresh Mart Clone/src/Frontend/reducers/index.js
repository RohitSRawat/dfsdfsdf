import { combineReducers } from "redux";
// import _ from "lodash";
const admin = (state = {},action) => {
  switch(action.type){

    
     
      case "fetchadmindata":
        return action.payload
       
      default:
       return state ;
  }
}
const ticket = (state = [],action) => {
    switch(action.type){
  
      case 'getthedata':
        return action.payload
      
        default:
         return state ;
    }
  }
  const checktoken = (state = {},action) => {
    switch(action.type){
  
      
       
      case "checktheuser":
        return action.payload
        case "destorytoken":
          return action.payload
        default:
         return state ;
    }
  }
  const fielderror = (state = null,action) => {
    switch(action.type){
  
      
       
      case "fielderror":
        return action.payload
         
        default:
         return state ;
    }
  }
  const Productcreate = (state = null,action) => {
    switch(action.type){
  
      
       
      case "createproducts":
        return action.payload
        
        default:
         return state ;
    }
  }
  const Producterror = (state = null,action) => {
    switch(action.type){
  
      
       
     
        case "productsfielderror":
          return action.payload
        default:
         return state ;
    }
  }
  export default combineReducers({
    productget:ticket,
    admin:admin,
    checktoken:checktoken,
    fielderror:fielderror,
    Productcreate:Productcreate,
    Producterror:Producterror
  });
  
  