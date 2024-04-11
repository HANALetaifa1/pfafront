import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import MenuDoctor from "../HomeDoctor/MenuDoctor";
import { addPatient } from '../../../../Services/patientServices';
import TopDoctor from '../../topbarD/TopDoctor';
import { useSelector } from 'react-redux';

const generateCode = () => {
  const length = 6; // Longueur du numfiche généré
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Caractères possibles pour le numfiche
  let numfiche = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    numfiche += characters.charAt(randomIndex);
  }
  console.log(numfiche);
  return numfiche;

};

export default function Insertpatient() {

  // const {medecinId} = useParams();
  // const {id} =user._id ;
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const medecinId = user._id
  console.log(medecinId);
  const numfiche = generateCode();
  const [validated, setValidated] = useState(false);
  const [cinPa, setCinPa] = useState("");
  // const [numfiche, SetNumfiche] = useState("");
  const [dateNais, setdateNais] = useState("");
  const [nompatient, setNompatient] = useState("");
  const [prenompatient, setPrenompatient] = useState("");
  const [emailpatient, setEmailpatient] = useState("");
  const [adressepatient, setAdressepatient] = useState("");
  const [sexepatient, setSexepatient] = useState("");
  const [numtelPa, setNumtelPa] = useState("");
  const [HistoriqueFamilial, setHistoriqueFamilial] = useState("");
  const [profession, setProfession] = useState("");


  const navigate = useNavigate();


  //    useEffect(() => {
  //     GetListPatient();
  //     },[]);

  // const GetListPatient = async () => {

  //     //affiche les patients 

  //     await fetchPatient()
  //       .then((res) => {
  //         setPatient(res.data);
  //       });
  //   }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const patient = {
        medecinID: medecinId,
        numfiche: numfiche,
        cinPa: cinPa,
        nompatient: nompatient,
        prenompatient: prenompatient,
        emailpatient: emailpatient,
        adressepatient: adressepatient,
        sexepatient: sexepatient,
        numtelPa: numtelPa,
        dateNais: dateNais,
        profession: profession,
        HistoriqueFamilial: HistoriqueFamilial,
      }


      addPatient(patient)
        .then(res => {
          console.log("Insert OK", res);
          navigate(`/Patient/medecin/${medecinId}`);
        })
        .catch(error => {
          console.log(error)
          alert("Erreur ! Insertion non effectuée")
        })
    }

    if (form.checkValidity() === true) {
      console.log("valeurs valides")

    };
    setValidated(true);
  }

  return (
    <>
      <TopDoctor />
      <div className="container w-100 d-flex justify-content-center">
        <div className=' mt-5 w-50'>
          <h1 align="center">Ajouter fiche patient</h1>
          <div className='form mt-3'>
            <Form className="border p-3" noValidate validated={validated}
              onSubmit={handleSubmit}>

              <Row className="mb-2">
                <Form.Group as={Col} className="col-md-6 ">
                  <Form.Label>Num Fiche *</Form.Label>
                  <Form.Control
  // required
  
   readOnly
  type="text"
  placeholder="Num fiche"
  value={numfiche}
  // onChange={(e) => SetNumfiche(e.target.value)}
/>

                  <Form.Control.Feedback type="invalid">
                    Saisir Numéro de fiche
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="col-md-6 ">
                  <Form.Label>Cin  *</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Cin patient"
                    value={cinPa}
                    onChange={(e) => setCinPa(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Saisir Numéro de fiche
                  </Form.Control.Feedback>
                </Form.Group>

                </Row>
                <Row className="mb-2">
                <Form.Group as={Col} className="col-md-6 " >
                  <Form.Label >Nom *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="nom de patient "
                    value={nompatient}
                    onChange={(e) => setNompatient(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Saisir nom Patient
                  </Form.Control.Feedback>
                </Form.Group>
             
                <Form.Group as={Col} className="col-md-6 ">
                  <Form.Label>Prénom *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="prenom de patient"
                    value={prenompatient}
                    onChange={(e) => setPrenompatient(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Saisir Prénom
                  </Form.Control.Feedback>
                </Form.Group>
                </Row>

                 <Row className="mb-2">
                <Form.Group as={Col} className="col-md-6 ">
                  <Form.Label> Email * </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={emailpatient}
                    onChange={(e) => setEmailpatient(e.target.value)}
                    placeholder="email "
                  />
                  <Form.Control.Feedback type="invalid">
                    Email incorrect
                  </Form.Control.Feedback>
                </Form.Group>
           
                <Form.Group as={Col} md="col-md-6 ">
                  <Form.Label> Adresse * </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Adresse"
                    value={adressepatient}
                    onChange={(e) => setAdressepatient(e.target.value)}
                  />
                   <Form.Control.Feedback type="invalid">
                    Saisir Adresse
                  </Form.Control.Feedback>
                </Form.Group>
</Row>


                <Row className="mb-2">
               
                <Form.Group as={Col} md="col-md-6 ">
                  <Form.Label>NumPhone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Phone"
                    value={numtelPa}
                    onChange={(e) => setNumtelPa(e.target.value)}
                  />
                </Form.Group>
               

                <Form.Group as={Col} md="col-md-6 ">
                  <Form.Label>date de Naissance</Form.Label>
                  <Form.Control
                    type="date"
                    required
                    placeholder="date naissance"
                    value={dateNais}
                    onChange={(e) => setdateNais(e.target.value)}
                  />
                </Form.Group>
                </Row>
               
            
            
              
         
              <Form.Group as={Col} md="6">
                  <Form.Label>Sexe</Form.Label>
                <br/>
                    <Form.Check
                      inline
                      label="Masculin"
                      type="radio"
                      id="radio-masculin"
                      checked={sexepatient === 'masculin'}
                      onChange={(e) => setSexepatient('masculin')}
                    />
                    <Form.Check
                      inline
                      label="Féminin"
                      type="radio"
                      id="radio-feminin"
                      checked={sexepatient === 'feminin'}
                      onChange={(e) => setSexepatient('feminin')}
                    />
                </Form.Group>
               
            

              <Row className="mb-2">

                <Form.Group as={Col} className="col-md-6 " >
                  <Form.Label >La profession</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="profession"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} className="col-md-6 " >
                  <Form.Label>HistoriqueFamilial</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Historique Familial "
                    value={HistoriqueFamilial}
                    onChange={(e) => setHistoriqueFamilial(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <center><Button className="btn-primary" type="submit" onClick={generateCode} >Enregistrer</Button></center>
            </Form>
          </div>
        </div>
      </div>
    </>


  )
}


