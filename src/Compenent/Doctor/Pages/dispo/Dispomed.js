import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { addDispo } from '../../../../Services/disposervice';
import Button from '@mui/material/Button';
import "./styleDipo.css"
export function Dispomed() {

  // const { user } = useSelector((state) => state.auth);
  // console.log(user);
  // const medecinId = user._id
  const [validated, setValidated] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [consultationTime, setConsultationTime] = useState('');
  const [joursdeTravail, setjoursdeTravail] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const dispo = {
        // medecinID: medecinId,
        startTime: startTime,
        endTime: endTime,
        consultationTime: consultationTime,
        joursdeTravail: joursdeTravail,


      }
      addDispo(dispo)
        .then(res => {
          console.log("Insert OK", res);
          //  navigate(`/patient/cons/${id}`);
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




  // const handleDaySelection = (e) => {
  //   const selectedDay = e.target.value;
  //   const updatedDays = [...joursdeTravail];

  //   if (updatedDays.includes(selectedDay)) {
  //     // Si le jour est déjà sélectionné, le supprimer de la liste
  //     const index = updatedDays.indexOf(selectedDay);
  //     updatedDays.splice(index, 1);
  //   } else {
  //     // Sinon, l'ajouter à la liste
  //     updatedDays.push(selectedDay);
  //   }

  //   setjoursdeTravail(updatedDays);
  // };

  return (
    <form validated={validated} onSubmit={handleSubmit} className="availability-form" >
      <div className="form-group">
        <label>
          Heure de début :
          <input
            type="text"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">

        <label>
          Heure de fin :
          <input
            type="text"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">

        <label>
          Temps de consultation (en minutes) :
          <input
            type="text"
            value={consultationTime}
            onChange={(e) => setConsultationTime(e.target.value)}
          />
        </label>
      </div>
    {/* <div className="days-of-week-container">

      <p className="days-of-week-label">Jours de travail :</p>
        <label>
          Lundi
          <input
            type="checkbox"
            className="day-checkbox"
            value="lundi"
            checked={joursdeTravail.includes('lundi')}
            onChange={handleDaySelection}
          />
        </label>
       
        <label>
          Mardi
          <input
            type="checkbox"
            className="day-checkbox"
            value="mardi"
            checked={joursdeTravail.includes('mardi')}
            onChange={handleDaySelection}
          />
        </label>
        </div> */}
        {/* Répétez ces étiquettes pour les autres jours */}
    
      <Button type='submit' variant="contained" >Ajouter Disponibilité</Button>

    </form>
  );
}
