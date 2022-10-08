import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar=({children})=>{
    const menuItems=[
        {
            path:"/",
            name:"Home"
        },
        {
            path:"/products",
            name:"Products"
        },
        {
            path:"/settings",
            name:"Settings"
        }
    ]
    return(
        <div className="container">
            <div className="sidebar">
                {menuItems.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className='nav_text'>{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>

        </div>
    );
};

export default Sidebar;