import React from 'react'
import '../home/homeA.css';
// import UserListA from "./UserListA";
import User from '../userall/User';
import GestionMedecins from '../GestionMed/GestionMedecins';
function HomeUserA() {
  return (
    <div className='home'>
    {/* <UserListA/> */}
   {/* <User/> */}
   <GestionMedecins/>
  </div>
  )
}

export default HomeUserA
