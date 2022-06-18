const initialState = {

};

export default function catagories(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATAGORIES':
      console.log(action.payload)
      return {...state,catagories:action.payload};
    case 'GET_ACTIVE_CATAGORY':
        let activeCatagory = state.catagories.find((catagory)=> action.payload === catagory.id)
      return {...state,activeCatagory};
    default:
      return state;
  }
}

export const getCatagories=()=>{
return {
    type:'GET_CATAGORIES'
}
}

export const getActiveCatagory=(id)=>{
return {
    type:'GET_ACTIVE_CATAGORY',
    payload: id
}
}