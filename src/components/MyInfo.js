import React from "react";

function MyInfo(){
    let divStyle = {
        color: 'blue',      
      };
      let h1Style = {color:'Tomato'};
    // let h1Style = {"color:Tomato; text-align:center"}
        

    return(
        <div>
        <h1 style={h1Style}>Sunny Singh</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adip.
        Lorem ipsum dolor sit amet, consectetur adip
        Lorem ipsum dolor sit amet, consectetur adip</p>
        
        <p>Vacation places:</p>
        <ul style={divStyle}>
            <li>Italy</li>
            <li>Sweden</li>
            <li>Finland</li>
        </ul>
        </div>
    )
}

export default MyInfo