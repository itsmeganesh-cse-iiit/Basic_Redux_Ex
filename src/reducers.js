export const counter=(state = 0, action) =>{
    switch (action.type) {
      case 'INCREMENT':
        return state + action.payload
      case 'DECREMENT':
        return state - action.payload
      default:
        return state
    }
  }


export const todoAppState=(state=[],action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state,{id: action.id, text: action.text, completed:false}]
        default:
            return state
    }
}