let INCR='INCR';
let DECR='DECR';
let increAction=()=>{
 return {type:INCR}
}
    
let decreAction=()=>{
return {type:DECR}
}
export {increAction,decreAction , INCR,DECR}