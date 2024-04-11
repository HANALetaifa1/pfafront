import React from 'react'
import './GSmed.css'
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import {  fetchMedecin}  from '../../../../Services/DoctorServices';
import Button from 'react-bootstrap/Button';
import Top from '../../topbar/Top'

function GestionMedecins() {
  const[medecin,setMedecin]=useState([])
  useEffect(()=>{
    fetchMedecin().then(res=>{
      setMedecin(res.data)
      console.log(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  },[])
  return (
    <>
   {/* <Top/> */}
    <div className='gestion'>   
<h1 className='GSmed'>Liste des demandes de Médecin</h1>
      <Table striped bordered hover>
    
    <thead>
      <tr>
        <th>nom</th>
        <th>Email</th>
        <th>Adresse</th>
        <th>Num telephone</th>
        <th>specialites</th>
        <th>Accepter</th>
        <th>Refuser</th>
      </tr>
    </thead>
    <tbody>
      {medecin.map((med,index)=>
      <tr key={index}>

        <td>{med.nom}</td>
        <td>{med.email}</td>
        <td>{med.adressemedecin}</td>
        <td>{med.numtelMd}</td>
        <td>{med.specialiteID?.nomsep}</td>
        <td><Button variant="primary">Accepter</Button></td>
        <td><Button variant="danger">Refuser</Button></td>
     
      </tr>
      )}
    </tbody>

  
  </Table>
    </div>
    </>
  )
}

export default GestionMedecins