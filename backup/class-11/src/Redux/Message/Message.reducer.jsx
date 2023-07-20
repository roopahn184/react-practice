import { GM, GN } from './Message.action';
let initialState = {
    msg: "How r u"
}
let messageReducer = (state = initialState, action) => {
    console.log("My Self Roopa - in reducer")
    console.log(action.type)
    switch (action.type) {
        case GM:
            return {
                msg: "have a nice day"
            }
        case GN:
            return { msg: "have a good day" }
        default:
            return state;
    }
}
export { messageReducer }