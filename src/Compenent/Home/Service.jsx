import React from 'react';
import './Style.css';
import { FaUserMd, FaCalendarAlt, FaStethoscope, FaFileMedical, FaNotesMedical } from "react-icons/fa";
import Menu from './Menu';
import Footer from './Footer';

function Service() {
  return (
    <div>
      <Menu />
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Services Médecin</h5>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <div className="service-icon-circle mb-4">
                    <FaCalendarAlt size={50} />
                  </div>
                  <h4 className="mb-2">Gérer les Rendez-vous</h4>
                  <p className="m-0">Accepter, modifier ou gérer les rendez-vous</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <div className="service-icon-circle mb-4">
                    <FaStethoscope size={50} />
                  </div>
                  <h4 className="mb-3">Consultation & Ordonnance</h4>
                  <p className="m-0">Remplir les consultations et les ordonnances</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <div className="service-icon-circle mb-4">
                    <FaFileMedical size={50} />
                  </div>
                  <h4 className="mb-3">Fiche Médicale</h4>
                  <p className="m-0">Consulter et mettre à jour les informations de la fiche médicale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Services Patient</h5>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <div className="service-icon-circle mb-4">
                    <FaUserMd size={50} />
                  </div>
                  <h4 className="mb-3">Consulter les Médecins</h4>
                  <p className="m-0">Filtrer les médecins selon leur spécialité</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <div className="service-icon-circle mb-4">
                    <FaCalendarAlt size={50} />
                  </div>
                  <h4 className="mb-3">Prise de Rendez-vous</h4>
                  <p className="m-0">Réserver des rendez-vous en ligne</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <div className="service-icon-circle mb-4">
                    <FaNotesMedical size={50} />
                  </div>
                  <h4 className="mb-3">Dossiers Personnels</h4>
                  <p className="m-0">Consulter les informations médicales en toute sécurité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
