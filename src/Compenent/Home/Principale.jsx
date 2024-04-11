import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import imageM from './Images/doctor.png';
import Defdr from './Images/doctorsmart.png';
import Defpa from './Images/espace patient.png';
import back from './Images/backround.png';

import Footer from './Footer';
import Menu from "./Menu";
import ButtonBar from './ButtonBar';
import { FaStethoscope, FaUser, FaEnvelope, FaFileAlt } from "react-icons/fa";

function Principale() {
  return (
    <div>
      <Menu />
      <div className="hero-section" style={{backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '700px', display: 'flex', alignItems: 'center'}}>
        <div className="container py-5 text-center text-light">
          <h1 className="display-1 my-4 text-primary">Explorez nos services exceptionnels</h1>
          <div className="pt-2">
            <Link to='/register?role=doctor' className="btn btn-primary rounded-pill py-3 px-5 mx-2"> Espace Médecin </Link>
            <Link to='/register?role=user' className="btn btn-outline-primary rounded-pill py-3 px-5 mx-2"> Espace Patient </Link>
          </div>
        </div>
      </div>

      <main className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <img className="w-100 rounded" src={imageM} alt="about" />
          </div>
          <div className="col-lg-6">
            <h5 className="text-primary text-uppercase border-bottom border-5">Présentation</h5>
            <p className="text-muted">
              Doctor's est une plateforme en ligne qui simplifie la prise de rendez-vous pour les patients, facilite la gestion des activités des médecins et offre un suivi des dossiers médicaux.
            </p>
            <div className="row g-3 pt-3">
              <div className="col-md-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <FaStethoscope size={50} className="text-primary mb-3" />
                  <h6>Services pour les médecins</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <FaUser size={50} className="text-primary mb-3" />
                  <h6>Services pour les patients</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <FaEnvelope size={50} className="text-primary mb-3" />
                  <h6>Contact Médecin/Patient</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <FaFileAlt size={50} className="text-primary mb-3" />
                  <h6>Libre utilisation</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center py-5">
          <div className="col-md-6">
            <h5 className="text-primary text-uppercase border-bottom border-5">À PROPOS DU Médecin</h5>
            <p className="text-muted">
              Doctor's facilite la gestion des activités et des rendez-vous à venir des médecins, y compris les fiches médicales, les résultats des consultations, les médicaments prescrits, etc...
            </p>
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={Defdr} className="w-100 rounded" alt="about doctor" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <img className="w-100 rounded" src={Defpa} alt="about" />
          </div>
          <div className="col-lg-6">
            <h5 className="text-primary text-uppercase border-bottom border-5">À PROPOS DU PATIENT</h5>
            <p className="text-muted">
              Doctor's offre aux patients la possibilité de prendre des rendez-vous et d'accéder à leurs propres dossiers médicaux via la plateforme, ce qui leur permet de consulter leurs informations médicales à tout moment.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <ButtonBar />
    </div>
  )
}

export default Principale
