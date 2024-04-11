import React from 'react'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {fetchPatientById,editPatient} from '../../../../Services/patientServices'

import { useNavigate, useParams } from 'react-router-dom';
import TopDoctor from '../../topbarD/TopDoctor';
import { useSelector } from 'react-redux';

export default function EditePatient() {
  const {id} = useParams();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const medecinId = user._id
  console.log(medecinId);
  const navigate=useNavigate();
  const [validated, setValidated] = useState(false);
  const [nompatient, setnompatient] = useState("");
  const [prenompatient, setPrenompatient] = useState("");
  const [emailpatient, setEmailpatient] = useState("");
  const [adressepatient, setAdressepatient] = useState("");
  const [sexepatient, setSexepatient] = useState("");
  const [numtelPa, setNumPa] = useState("");
  const [dateNais, setDateNais] = useState("");
  const [HistoriqueFamilial, setHistoriqueFamilial] = useState("");
  const [profession, setProfession] = useState("");
  useEffect(() => {
  GetUnPatient();
  // GetListMedecin();
  },[]); 
  const GetUnPatient=async()=>{
  fetchPatientById(id)
  .then(res=>{
  setnompatient(res.data.nompatient)
  setPrenompatient(res.data.prenompatient)
  setEmailpatient(res.data.emailpatient)
  setNumPa(res.data.numtelPa)
  setDateNais(res.data.dateNais)
  setSexepatient(res.data.sexepatient)
  setAdressepatient(res.data.adressepatient)
  setHistoriqueFamilial(res.data.HistoriqueFamilial)
  setProfession(res.data.profession)


  })
  .catch(error=>{
  console.log(error)
  })
  } 
  // const GetListCategories=async()=>{
  //   fetchScategories()
  // .then(res=>{
  //   setScategories(res.data)
  //   })
  //   .catch(error=>{
  //   console.log(error)
  //   alert("Erreur ! Modification non effectuée")
  //   })
  //   } 
    const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
    const patient={
    _id:id,
    nompatient: nompatient,
    prenompatient: prenompatient,
    sexepatient : sexepatient,
    dateNais: dateNais,
    emailpatient: emailpatient,
    numtelPa: numtelPa,
    adressepatient:adressepatient,
    HistoriqueFamilial:HistoriqueFamilial,
    profession:profession
    }
    editPatient (patient)
    .then(res=>{
     console.log("Update OK",res);
    navigate(`/Patient/medecin/${medecinId}`);
      })
    .catch(error=>{
    console.log(error)
    })
    }
    setValidated(true);
    };  

  return (
    <div>
      <TopDoctor/>

<div className="container w-100 d-flex justify-content-center">
<div className=' mt-5 w-50'>
<h1 align="center"> Modifier fiche Patient </h1>
<div className='form mt-3'>
<Form className="border p-3" noValidate validated={validated} onSubmit={handleSubmit}>
<Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >Nom </Form.Label>
<Form.Control
required
type="text"
placeholder="Nom"
value={nompatient}
onChange={(e)=>setnompatient(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir Nom Patient 
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Prenom </Form.Label>
<Form.Control
required
type="text"
placeholder="prenom"
value={prenompatient}
onChange={(e)=>setPrenompatient(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir prénom Patient
</Form.Control.Feedback>
</Form.Group>
</Row>
<Row className="mb-2">
<Form.Group className="col-md-6">
<Form.Label>Email </Form.Label>
<InputGroup hasValidation>
<Form.Control
type="email"
required
placeholder="email"
value={emailpatient}
onChange={(e)=>setEmailpatient(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Email Incorrecte
</Form.Control.Feedback>
</InputGroup>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Phone patient</Form.Label>
<Form.Control
type="number"
placeholder="num Phone"
value={numtelPa}
onChange={(e)=>setNumPa(e.target.value)}
/>
</Form.Group>
</Row>
<Row className="mb-3">


<Form.Group className="col-md-6">
<Form.Label>Adresse </Form.Label>
<InputGroup hasValidation>
<Form.Control
type="text"
required
placeholder="Adresse"
value={adressepatient}
onChange={(e)=>setAdressepatient(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
adresse Incorrecte
</Form.Control.Feedback>
</InputGroup>
</Form.Group>

<Form.Group className="col-md-6">
<Form.Label>Date Naissance </Form.Label>
<InputGroup hasValidation>
<Form.Control
type="date"
required
placeholder="date naissance"
value={dateNais}
onChange={(e)=>setDateNais(e.target.value)}
/>

</InputGroup>
</Form.Group>

</Row>

<Row className="mb-3">

<Form.Group as={Col} md="6">
<Form.Label>Historique Familial </Form.Label>
<Form.Control
required
type="text"
placeholder="HistoriqueFamilial"
value={HistoriqueFamilial}
onChange={(e)=>setHistoriqueFamilial(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir Historique Familial
</Form.Control.Feedback>
</Form.Group>

<Form.Group as={Col} md="6">
<Form.Label>Profession</Form.Label>
<Form.Control
required
type="text"
placeholder="profession"
value={profession}
onChange={(e)=>setProfession(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir profession
</Form.Control.Feedback>
</Form.Group>


</Row>

<center><Button type="submit">Enregistrer</Button></center>
</Form>
</div>
</div>
</div>


    </div>
  )
}


