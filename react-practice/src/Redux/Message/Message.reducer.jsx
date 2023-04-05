let initialState ={
    msg:"How r u"
}
let MessageReducer =(state=initialState,action)=>{
    switch(action.type){
       case 'hii':
        return {
            msg:"have a nice day"
        }
        case 'hlo':
            return{msg:"have a good day"}
            default:
                return state
    }
}
export {MessageReducer}