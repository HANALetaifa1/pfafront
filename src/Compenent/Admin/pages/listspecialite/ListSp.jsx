import React from 'react';
import { fetchSpecialite } from "../../../../Services/SpecialiteServices";
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ListSpecialites = () => {
    const[specialites, setSpecialite]=useState([])
    useEffect(()=>{
      fetchSpecialite().then(res=>{
        setSpecialite(res.data)
        console.log(res.data)
      })
     .catch(error=>{
      console.log(error)
     })
    },[])
  return (
    
    <Table striped bordered hover>
    
    <thead>
      <tr>
        <th>Nom</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
  
      {specialites.map((sep,index)=>
      <tr key={index}>
        <td>{sep.nomsep}</td>
      
      </tr>
      )}
    </tbody>

  
  </Table>
  )
}

export default ListSpecialites
