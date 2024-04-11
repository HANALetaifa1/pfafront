import React from 'react'
import "./cons.css";
import { useState, useEffect } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import MUIDataTable from "mui-datatables";
import { fetchCons,addCons , deleteCons} from '../../../../Services/ConsService';
import { IconButton, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import MedicationIcon from '@mui/icons-material/Medication'
import TopDoctor from '../../topbarD/TopDoctor';


function AjouterCons() {
    const {id} = useParams();
   const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [cons, setCons] = useState([]);
  const [MotifCons, setMotifCons] = useState("");
  const [AntécedentsMédecaux, setAntécedentsMédecaux] = useState("");
  // const [HistoriqueSocial, setHistoriqueSocial] = useState("");
  // const [ExemansComplementaires, setExemansComplementaires] = useState("");
  // const [HistoriqueFamilial, setHistoriqueFamilial] = useState("");
  const [DescriptionExamen, setDescriptionExamen] = useState("");
  const [DateCons, setDateCons] = useState(new Date().toISOString().split('T')[0]);
  // const [Daterd, setDaterd] = useState(new Date().toISOString().split('T')[0]);
  const [TaillePatient, setTaillePatient] = useState("");
  const [PoisPatient, setPoisPatient] = useState("");
  const [tension, setTension] = useState("");
  const [Température, setTempérature] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const cons1 = {
        patientID:id,
        MotifCons: MotifCons,
        AntécedentsMédecaux: AntécedentsMédecaux,
        // HistoriqueSocial: HistoriqueSocial,
        // ExemansComplementaires: ExemansComplementaires,
        // HistoriqueFamilial: HistoriqueFamilial,
        DescriptionExamen:DescriptionExamen,
        DateCons :DateCons,
        TaillePatient:TaillePatient,
        PoisPatient:PoisPatient,
        tension:tension,
        Température:Température,

      }
      addCons (cons1)
      .then(res=>{
        console.log("Insert OK",res);
         navigate(`/patient/cons/${id}`);
        })
        .catch(error=>{
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
                 <TopDoctor/>

<div className="tiltle">   
<h1>Gestion de consultation </h1>
</div>
 <br/>
 
  <div className='cons'>
    <div className="row"  >

      <fieldset className="col-md-6">
        <legend>Antécedents :</legend>
        <div>
          <div className="row g-3" style={{ alignItems: 'center' }}>
          <div className="col-10">
              Date Consultation : 
              <input type="date"
               placeholder="Raison de visite" 
               className="form-control"
               value={DateCons}
               onChange={(e)=>setDateCons(e.target.value)}
               required
               />
            </div>
            <div className="col-10">
              Motif de consultation :
               <input type="text"
                placeholder="Raison de visite" 
                className="form-control" 
                value={MotifCons}
                onChange={(e)=>setMotifCons(e.target.value)}
                required
                />
            </div>
            <div className="col-10">
              Antécedents Médicaux : 
              <input type="text"
               placeholder="Antécedents Médicaux" 
               className="form-control" 
               value={AntécedentsMédecaux}
               onChange={(e)=>setAntécedentsMédecaux(e.target.value)}
               required
               />
            </div>
            {/* <div className="col-10">
              Historique familial : 
              <input type="text" 
              placeholder="Historique familial"
               className="form-control" 
               value={HistoriqueFamilial}
               onChange={(e)=>setHistoriqueFamilial(e.target.value)}
           required
               />
            </div>
            <div className="col-10">
              Exemans complementaires : 
              <input type="text" 
              placeholder="Historique familial" 
              className="form-control"
              value={ExemansComplementaires}
              onChange={(e)=>setExemansComplementaires(e.target.value)}
              required
              />
            </div>
            <div className="col-10">
              Historique Social : 
              <input type="text"
               placeholder="Historique Social" 
              className="form-control"
              value={HistoriqueSocial}
              onChange={(e)=>setHistoriqueSocial(e.target.value)}
              required
              />
            </div> */}
           
          </div>
        </div>
      </fieldset>

      <fieldset className="col-md-6">
        <legend>Examen :</legend>
        <div>
          <div className="row g-3">
          {/* <div className="col-10">
              Numéro de Cons :
               <input type="number" 
               className="form-control"
               
               
               />
            </div>
            <div className="col-10">
              Numéro de Fiche : <input type="number" className="form-control" />
            </div> */}
            <div className="col-10">
              Taille de patient : 
            <input type="text" className="form-control" 
             onChange={(e)=>setTaillePatient(e.target.value)}
            value={TaillePatient}
                      />
            </div>
            <div className="col-10">
              Poid de patient :
               <input type="text"
                className="form-control" 
                onChange={(e)=>setPoisPatient(e.target.value)}
            value={PoisPatient}
               />
            </div>
            <div className="col-10">
              tension artérielle:
               <input type="number" 
               className="form-control" 
               onChange={(e)=>setTension(e.target.value)}
               value={tension}
               />
            </div>
            <div className="col-10">
              Température: 
              <input type="text"
               className="form-control"
               onChange={(e)=>setTempérature(e.target.value)}
               value={Température}
               />
            </div>
            {/* <div className="col-10">
              Périmètre de patient: <input type="number" className="form-control" />
            </div> */}
          </div>
        </div>
      </fieldset>
    </div>

    <div >
      
      <form validated={validated} onSubmit={handleSubmit}>
        <legend> Description d'Examen  :</legend>
        <div>
          <textarea rows="9" cols="80" className="form-control"
         required
          value={ DescriptionExamen}
          onChange={(e)=>setDescriptionExamen(e.target.value)}
          ></textarea>
        </div><br/>
        <div className="col-10">
              <button className="btn btn-primary" type="submit">Enregistrer</button>
            </div>
      </form>
    </div>


  </div>
    </>
  )
}

export default AjouterCons
