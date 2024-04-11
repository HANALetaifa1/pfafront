import React from 'react'
// import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { addRend } from '../../../../Services/RendServices';
import { fetchRendMA } from '../../../../Services/RendServices';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import TopDoctor from '../../topbarD/TopDoctor';
import { toast } from 'react-toastify';
import "./rdv.css"
export default function Ajouterdv() {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [Daterd, setDaterd] = useState(new Date().toISOString().split('T')[0]);
    const [timerd, setTimerd] = useState('');
    const [Rend, setRend] = React.useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    // const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    // const [today, setToday] = useState(new Date().toISOString().split('T')[0]);
    // const handleDateChange = (event) => {
    //     setDaterd(event.target.value);
    // };

    //   useEffect(() => {
    //     GetListRend();
    //   }, []);

    //   const GetListRend = async () => {
    //     await fetchRendMA(id).then((res) => {
    //       const sortedRend = res.data.sort((a, b) => {
    //         const dateA = moment(a.Daterd + " " + a.timerd, 'YYYY-MM-DD HH:mm').valueOf();
    //         const dateB = moment(b.Daterd + " " + b.timerd, 'YYYY-MM-DD HH:mm').valueOf();

    //         if (dateA === dateB) {
    //           return moment(a.timerd, 'HH:mm').valueOf() - moment(b.timerd, 'HH:mm').valueOf();
    //                 } else {
    //           return dateA - dateB;
    //         }
    //       });
    //       setRend(sortedRend);
    //     });
    //   };

    const todayAppointments = Rend.filter(Rend =>
        moment(Rend.Daterd).isSame(moment(), 'day')
    );

    const handleHeureChange = (event) => {
        setTimerd(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const existant = todayAppointments.find((rend) => rend.timerd === timerd);
        if (existant) {

            alert("Un rendez-vous existe déjà à cette heure !");
            console.log(existant)
        } else 
        {
            /* créer le rendez-vous */

            const form = event.currentTarget;
            if (form.checkValidity() === true) {
                const rend = {
                    medecinID: id,
                    //   userID: userId,
                    etatrend: "accepter",
                    Daterd: Daterd,
                    timerd: timerd,
                    firstName: firstName,
                    lastName: lastName,
                    phone:phone,
                    email:email
                }

                if (form.checkValidity() === true) {
                    console.log("valeurs valides")
                };
                setValidated(true);
                  // Vérification de la disponibilité
                  fetchRendMA(id).then((res) => {
                    if (res && res.Daterd) {
                      const rendezVousExiste = res.Daterd.some((Rend) => {
                        return Rend.Daterd === Daterd && Rend.timerd === timerd;
                      });
                      if (rendezVousExiste) {
                        alert(
                          "Ce rendez-vous est déjà réservé. Veuillez choisir une autre date ou heure."
                        );
                      }
                    };
                  })
                addRend(rend).then(res => {
                    console.log("Insertion OK", res);
                    // alert("")
                    toast.success("Le rendezvous est enregistrer", 
                    {
                        position: toast.POSITION.LEFT,
                        autoClose: 3000,
                      });
                    navigate(`/ListRendVous/medecin/${id}`)
                }).catch(error => {
                    console.log(error)
                    // alert("Erreur !Ce rendez-vous est déjà réservé. Veuillez choisir une autre date ou heure.")
                    toast.warning("Ce rendez-vous est déjà réservé. Veuillez choisir une autre date ou heure", {
                        position: toast.POSITION.LEFT,
                        autoClose: 3000,
                      });
                })
            }
        }

        ;

    }
    return (

        <div >
 <TopDoctor />
            <br/>
            <div className='entetrdv1'>
            <Form validated={validated} onSubmit={handleSubmit}>
                <Form.Group>
               < Form.Label> Nom  :</Form.Label>
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
               < Form.Label> Prénom :</Form.Label>
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
               < Form.Label> Phone :</ Form.Label>
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
                    defaultValue={Daterd}
                    min={Daterd}
                    max={Daterd}
                    required
                />
                </Form.Group>
                <br />
                <Form.Group>
               <Form.Label>Heure du rendez-vous :</Form.Label>
                <Form.Control
                    type="time"
                    id="heure"
                    value={timerd}
                    name="heure"
                    // min="08:00"
                    // max="15:00"
                    // step="1800"
                    required
                    onChange={handleHeureChange}
                />
                </Form.Group>
                <br />
                <Button variant="contained" type='submit'>Réserver</Button>
            </Form>
        </div>

        </div>

    )
}
