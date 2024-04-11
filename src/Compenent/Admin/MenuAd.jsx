import React from 'react'
import'../Home/Style.css'
import { Link } from 'react-router-dom';
import {  GrNotification} from "react-icons/gr";

function MenuAd() {
  return (
    <div>
         <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
 

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
          <Link to="/" className="nav-item nav-link">Acceuil</Link>
            <Link to="/GestionMedecins" className="nav-item nav-link"> verification </Link>
            <Link to="/ListMedecin" className="nav-item nav-link">List des Médecin</Link>
            <Link to="/Notification" className="nav-item nav-link"> <GrNotification size ={30} /> </Link>
          </div>
       
        </div>
      </nav>
    </div>
    </div>
  )
}

export default MenuAd