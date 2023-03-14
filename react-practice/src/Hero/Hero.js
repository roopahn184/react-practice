import React from "react";
let Hero = () =>{
    let Hero_Name = "jimmy"
    let Hero_Image= "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80";
    return <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                      <img src={Hero_Image} alt="" width="300px" height="400px" />
                    </div>
                    <div className="card-body">
                      <h3>{Hero_Name}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Hero