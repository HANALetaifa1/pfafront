import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addRend, fetchRendM } from '../../../../Services/RendServices';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import TopDoctor from '../../topbarD/TopDoctor';
import { toast } from 'react-toastify';
import "./rdv.css"
function Ajoutercontrol() {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [Daterd, setDaterd] = useState('');
    const [timerd, setTimerd] = useState('');
    const [Rend, setRend] = React.useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        /* créer le rendez-vous */
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            const rend = {
                medecinID: id,
                //   userID: userId,
                etatrend: "contrôle",
                Daterd: Daterd,
                timerd: timerd,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email:email
            }

            if (form.checkValidity() === true) {
                console.log("valeurs valides")
            };
            setValidated(true);
              // Vérification de la disponibilité
              fetchRendM(id).then((res) => {
                if (res && res.Daterd) {
                  const rendezVousExiste = res.Daterd.some((Rend) => {
                    return Rend.Daterd === Daterd && Rend.timerd === timerd;
                  });
                  if (rendezVousExiste) {
                    toast.warning("Ce rendez-vous est déjà réservé. Veuillez choisir une autre date ou heure", {
                        position: toast.POSITION.LEFT,
                        autoClose: 3000,
                      });
              
                  }
                };
              })
            addRend(rend).then(res => {
                console.log("Insertion OK", res);
                toast.success("Le rendezvous est enregistrer", 
                {
                    position: toast.POSITION.LEFT,
                    autoClose: 3000,
                  });
                navigate(`/request/medecin/${id}`)
            }).catch(error => {
                console.log(error)
                alert("Erreur ! Insertion non effectuée")

            })
        }
    };


    return (
        <div>
             <TopDoctor/>
             <br />
             <div className='entetrdv1'>
        <Form validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
               <Form.Label> Nom :</Form.Label>
            <Form.Control
                type="text"
                id="prename"
                name="prename"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
             </Form.Group>
            <br />
            <Form.Group>
               <Form.Label>Prénom :</Form.Label>
            <Form.Control
                type="text"
                id="nom"
                name="nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
              </Form.Group>
            <br />
            <Form.Group>
               <Form.Label> Phone :</Form.Label>
            <Form.Control
                type="number"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}

                required
            />
</Form.Group>
            <br />
            <Form.Group>
               <Form.Label> Email :</Form.Label>
               <Form.Control
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
             </Form.Group>
            <br />

            <Form.Group>
               <Form.Label>Date du rendez-vous :</Form.Label>
            <Form.Control
                type="date"
                id="date"
                name="date"
                value={Daterd}
                onChange={(e) => setDaterd(e.target.value)}
                required
            />
             </Form.Group>
            <br />
            <Form.Group>
               <Form.Label> du rendez-vous :</Form.Label>
            <Form.Control
                type="time"
                id="heure"
                value={timerd}
                name="heure"
                // min="08:00"
                // max="15:00"
                // step="1800"
                required
         
                onChange={(e) => setTimerd(e.target.value)}
            />
             </Form.Group>
            <br />
            <br />
            <Button type='submit' variant="contained" >Réserver</Button>
        </Form>
        </div>
    </div>
    )
}

export default Ajoutercontrol
