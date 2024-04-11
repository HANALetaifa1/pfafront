import React from 'react';
import'../../../Home/Style.css';
import { Link } from 'react-router-dom';
import {  GrNotification} from "react-icons/gr";
import logo from '../../../Home/Images/Dr.png';
 import SidebarD from '../../sidebar/SidebarD';
function MenuDoctor() {
  return (
    <div>
    <div>
 <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">

   <SidebarD/>

 
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarCollapse">
     <div className="navbar-nav ms-auto py-0">
     <Link to="/Patient/medecin/:medecinId" className="nav-item nav-link">Liste des patients</Link>

       <Link to="/ListRend_vous" className="nav-item nav-link">Liste Rendez-vous</Link>
       <Link to="/CalendrieMed" className="nav-item nav-link"> compte</Link>
       <Link to="/Demdeur" className="nav-item nav-link">Demande Rendez-Vous</Link>

   
           
       <Link to="/Notification" className="nav-item nav-link"> <GrNotification size={30}/></Link>
     </div>

   </div>
 </nav>
</div>
</div>  )
}

export default MenuDoctor