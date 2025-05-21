export const initialStore=()=>{
  return{
   contactos:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    
case 'load_contact':{
      const {contactos} = action.payload;
      
      return {
        ...store,
        contactos : contactos
      }
    }
    default:
      throw Error('Unknown action.');
  }    
}
