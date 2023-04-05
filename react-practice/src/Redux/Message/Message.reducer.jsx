let initialState ={
    msg:"How r u"
}
let MessageReducer =(state=initialState,action)=>{
    switch(action.type){
       case 'gm':
        return {
            msg:"have a nice day"
        }
        case 'gn':
            return{msg:"have a good day"}
            default:
                return state
    }
}
export {MessageReducer}