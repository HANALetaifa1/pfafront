import React from 'react'
import './GSmed.css'

import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react'
import {  fetchMedecin}  from '../../../../Services/DoctorServices'

function Listmedecin() {
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
   

    <div className='gestion'>
      <h1 className='GSmed'> Liste Médecins Accepter </h1>
         <Table striped bordered hover>
    
    <thead>
      <tr>
        <th>nom</th>
        <th>Email</th>
        <th>Adresse</th>
        <th>Num telephone</th>
        <th> Specialité </th>

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
      </tr>
      )}
    </tbody>

  
  </Table>
    </div>

  )
}

export default Listmedecin

