import React from 'react'
import "../../admin/appa.css";
import Top from '../../topbar/Top';

import SidebarA from '../../sidebar/SidebarA';
import HomeUserA from './HomeUserA';
function AppUser() {
  return (
    <div>
            <Top />
            <div className='containerA'>
                <SidebarA />
                <HomeUserA/>


            </div>
        </div>
  )
}

export default AppUser
