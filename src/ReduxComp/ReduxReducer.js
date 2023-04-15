
export const basicReducer = (storedata = 0, action) =>{
       if(action.type === "increment"){
        return storedata + 1
       }else if (action.type === "decrement"){
        return storedata - 1
       }else if(action.type === "reset"){
            return storedata = 0
       }
    return storedata
}