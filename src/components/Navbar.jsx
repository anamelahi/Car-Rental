import React from "react";

function Navbar(){
    return(
        <div className="navbar">
            <h2 className="brandName">CarLo</h2>
            <ul>
                <li>Cars</li>
                <li>Messages</li>
                <li>History</li>
            </ul>
            <button className="loginbtn">LOGIN</button>
        </div>
    )
}

export default Navbar;