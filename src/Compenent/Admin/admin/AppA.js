import React from 'react'
import Top from '../topbar/Top'
import SidebarA from '../sidebar/SidebarA'
import "./appa.css";
import HomeA from '../pages/home/HomeA';
import MenuAd from '../MenuAd';


function AppA() {
    return (
        <div>
            <Top />
            <div className='containerA'>
                <SidebarA />
                <HomeA />
            </div>
           
        </div>
    )
}

export default AppA
