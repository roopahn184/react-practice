
let GM = "GM"
let GN = "GN"
let gmAction = () => {
  console.log("Test Case - gmAction")
    return { type: GM }
}

let gnAction = () => {
    return { type: GN }
}
export { gmAction, gnAction, GM, GN }
