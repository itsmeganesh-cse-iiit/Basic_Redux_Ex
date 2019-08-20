
export const AddValue=() =>{
    return { type: "INCREMENT", payload:5 }
  };

export const todoAdd=()=>{
  return {type:"ADD_TODO",id: 1, text: "ganesh", completed:true}
}