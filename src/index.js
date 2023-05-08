import React from "react"
import ReactDOM from "react-dom"
function MyApp(){
    return(
        <ul>
            <li>Italy</li>
            <li>France</li>
        </ul>
    )
}
ReactDOM.render(<MyApp/>,document.getElementById("root"))