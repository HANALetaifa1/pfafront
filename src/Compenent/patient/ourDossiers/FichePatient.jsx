import React from 'react';
import MenuPa from '../principale/MenuPa';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import { fetchMedecin } from '../../../Services/DoctorServices';
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import TopPA from '../principale/top/TopPA';
import { useSelector } from 'react-redux';
import {  fetchPa } from '../../../Services/dossierService';
// import Sidebar from "../Sidebar";
function FichePatient() {
    // numfiche
    const [patient, setPatient] = useState([]);
    console.log(patient)
//   const { user } = useSelector((state) => state.auth);
  const { code } = useParams();
  console.log(code)
   const { medcinId } = useParams();
  console.log(medcinId)

  useEffect(() => {
    GetListpatient();
  }, []);
  const GetListpatient = async () => {
    await fetchPa(medcinId,code)
      .then((res) => {
        setPatient(res.data);
        console.log(res.data);
      });
  }

  return (
    <div>
    <TopPA />
    <div style={{ textAlign: 'center' }}>
      <h1> Mon Fiche </h1> <br /><br />
    </div>
    <Table striped bordered hover>

      <thead>
        <tr>
          <th>Num Fiche</th>
          <th>Patient</th>
          <th>Date consultation</th>
          <th>Motif Cons</th>
          <th>Antécedents Médecaux</th>
          <th>Historique Familial</th>
          <th>Exemans Complementaires</th>
          <th>Exemans HistoriqueSocial</th>
          <th>Taille & Poid</th>
          <th>tension & Température</th>
          <th>Ordonnances</th>
        </tr>

      </thead>
      <tbody>
        {cons.map((cons, index) => (
          <tr key={cons._id}>
            <td>{cons?.patientID?.numfiche}</td>
            <td>{cons?.patientID?.nompatient}</td>
            <td>{cons?.DateCons}</td>
            <td>{cons?.MotifCons}</td>
            <td>{cons?.AntécedentsMédecaux}</td>
            <td>{cons?.HistoriqueFamilial}</td>
            <td>{cons?.ExemansComplementaires}</td>
            <td>{cons?.HistoriqueSocial}</td>
            <td> {cons?.TaillePatient} & {cons?.PoisPatient}</td>
            <td>{cons?.tension} & {cons?.Température}</td>
            <td>
              {<Link to={`/OrdPa/${cons._id}`} >
                <AssignmentTurnedInIcon />
              </Link>
              }
            </td>
          </tr>
        ))}




      </tbody>


    </Table>

  </div>
  )
}

export default FichePatient
