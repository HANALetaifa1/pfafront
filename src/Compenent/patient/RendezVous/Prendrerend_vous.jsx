import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import TopPA from '../principale/top/TopPA';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addRend, fetchRendM } from '../../../Services/RendServices';
import Calendar from 'react-calendar';
import "./rdvP.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
 import { fetchUserById } from '../../../Services/UserServices';
function Prendrerend_vous() {
  const { id } = useParams();
  console.log(id)
  //
   const[medecin, setMedecin]=useState([])
   useEffect(() => {
    GetListmedecin();
  }, []);
  const GetListmedecin = async () => {

    
    await fetchUserById(id)
      .then((res) => {
        setMedecin(res.data);
        console.log(res.data);
      });
  }


 

  const [Daterd, setDaterd] = useState('');
  const [timerd, setTimerd] = useState('');
  // const [rend, setRend] = useState('');
  //  const [Descrd, setDescrd] = useState('');
  //  const [etatrend, setEtatrend] = useState('');
  const [validated, setValidated] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const userId = user._id
  console.log(userId);
  const navigate = useNavigate();
  const [reservationMessage, setReservationMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const startTime = new Date(`1970-01-01T08:00:00`);
  const endTime = new Date(`1970-01-01T15:00:00`);


  const currentDate = new Date().toISOString().split("T")[0];



  const handleSubmit = (event) => {
    event.preventDefault();

    // const currentDate = new Date();
    // const selectedDateTime = new Date(Daterd);

    // if (selectedDateTime < currentDate) {
    //   // alert('La date sélectionnée est passée. Veuillez choisir une date future.');
    //   toast.warning("La date sélectionnée est passée !!!", {
    //     position: toast.POSITION.LEFT,
    //     autoClose: 3000,
    //   });
    //   return;
    // }



  // Obtenir la date actuelle au format ISO (AAAA-MM-JJ)
    setSubmitted(true);


    const form = event.currentTarget;

    // Vérification de la date
    const selectedDate = new Date(Daterd);
    if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
      toast.warning("Vous ne pouvez pas prendre rendez-vous le samedi ou le dimanche!!", {
        position: toast.POSITION.LEFT,
        autoClose: 3000,
      });
      // alert("Vous ne pouvez pas prendre rendez-vous le samedi ou le dimanche!!");
      return;
    }

    // Vérification de l'heure
    // const selectedTime = new Date(`1970-01-01T${timerd}`);
    // if (selectedTime.getHours() < 8 || selectedTime.getHours() >= 14) {
    //   alert("Les rendez-vous ne sont disponibles que de 09h00 à 14h00.");
    //   return;
    // }






    
//verifier time
    const selectedTime = new Date(`1970-01-01T${timerd}`);
    if (selectedTime < startTime || selectedTime >= endTime) {
       toast.warning("Les rendez-vous ne sont disponibles que de 08h00 à 14h00!!", {
      position: toast.POSITION.LEFT,
      autoClose: 3000,
    });
      return;
    }
    
    const minutes = selectedTime.getMinutes();
    if (minutes % 30 !== 0) {
      toast.warning("Les rendez-vous ne sont disponibles que toutes les 30 minutes!", {
        position: toast.POSITION.LEFT,
        autoClose: 3000,
      });
    
      return;
    }


    // À implémenter en interrogeant la base de données pour récupérer les rendez-vous déjà réservés

    if (form.checkValidity() === true) {
      const rend = {
        medecinID: id,
        userID: userId,
        Daterd: Daterd,
        timerd: timerd,
      }

      if (form.checkValidity() === true) {
       
        console.log("valeurs valides")
      };
      setValidated(true);

    // Vérification de la disponibilité
    // fetchRendM(id).then((res) => {
    //   if (res && res.Daterd) {
    //     const rendezVousExiste = res.Daterd.some((Rend) => {
    //       return Rend.Daterd === Daterd && Rend.timerd === timerd;
    //     });
    //     if (rendezVousExiste) {
    //       alert(
    //         "Ce rendez-vous est déjà réservé. Veuillez choisir une autre date ou heure."
    //       );
    //     }
    //   };
    // })

  //   addRend(rend)
  // .then(res => {
  //   console.log("Insertion OK", res);
  //   alert("Votre rendez-vous est enregistré.");
  //   // navigate("/HomePatient");
  // })
 
    addRend(rend).then(res => {
        console.log("Insertion OK", res);
        toast.success("RendezVous enregistrer avec succès , Attendez la confirmation de medecin", {
          position: toast.POSITION.LEFT,
          autoClose: 3000,
        });
        //  alert("votre rendezvous est enregistrer")
        navigate("/HomePatient");
      }).catch(error => {
          console.log(error)
             toast.warning("Ce Rendez_vous est reserver!!!", {
        position: toast.POSITION.LEFT,
        autoClose: 3000,
      });
          // alert("Erreur ! Rendez_vous est reserver")
     
        })
     }
  }

//
// function getTomorrowDate() {
//   const tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);

//   const year = tomorrow.getFullYear();
//   const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
//   const day = String(tomorrow.getDate()).padStart(2, '0');

//   return ${year}-${month}-${day};
// }

//


  return (
    <div>
      <TopPA />
      <div className='tourdv'>
        <br/>
        <br/>
        <h3 style={{ textAlign: "center" }}>Prendre rendez-vous : {medecin.firstName} {medecin.lastName} </h3>
        <div className="prendrdv">
          <Form validated={validated} onSubmit={handleSubmit} className='rdvpa'>
            <Form.Group>
              <Form.Label>Choisir Date :</Form.Label>
              <Form.Control type="date"
                required
                value={Daterd}
                min={currentDate}
                onChange={(e) => setDaterd(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Choisir Temps :</Form.Label>
              <Form.Control type="time"
                required
                  // min={startTime}
                  // max={endTime}
                  // step="30min"
                value={timerd}
                onChange={(e) => setTimerd(e.target.value)}

              />

            </Form.Group>
            <br />
            <Button variant="success"
              type="submit"
              size='50px'
            // onClick={verifierDisponibilite}
            > Confirmer </Button>
            &nbsp;&nbsp;&nbsp;

          </Form>
       
           
        </div>
      </div>
    </div>
  )
}

export default Prendrerend_vous