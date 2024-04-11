import React, { useState } from 'react';
import "./sidebarD.css";
import { Link } from 'react-router-dom';


function SidebarD() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button className="openbtn" onClick={toggleSidebar}>☰</button>
      <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
        <a href="#" className="closebtn" onClick={toggleSidebar}>&times;</a>
        <div className="links-container">

          <div className="link-container">
              <Link to="/ListPatient">Liste fiches Patients</Link>
            </div>
            
            <div className="link-container">
              <Link to="/ListRend_vous">List Rendez-vous </Link>
            </div>

            <div className="link-container">
              <Link to="/Demdeur" > Les Demandes </Link>
            </div>
            
            <div className="link-container">
              <Link to="/Notification" > Notification </Link>
            </div>

            <div className="link-container">
              <Link to="/LogoutDoctor" style={{color:"red"}} > deconnecter </Link>
            </div>

{/* 
            <div className="link-container">
              <Link to="/MoncomptePa" >M </Link>
            </div> */}

          </div>
     
      </div>
  
    </div>
  );
}

export default SidebarD;
