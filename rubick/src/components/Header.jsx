import React from 'react';
import {FaCircle} from "react-icons/fa";

const Header=()=>{
    return(
        <div id="header">
            <h1>Rubick.ai</h1>
            <div id='admin'>
            <h1><FaCircle style={{color:"lightgrey"}}/>Admin</h1>
            </div>
        </div>
    );
};

export default Header;