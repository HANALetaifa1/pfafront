import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editRendR, fetchRendtById } from '../../../../Services/RendServices';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Button } from '@mui/material';
import "./rdv.css"
import TopDoctor from '../../topbarD/TopDoctor';
function Editrdv() {
    const { id } = useParams();
    const { user } = useSelector((state) => state.auth);
    const medecinId = user._id
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [Daterd, setDaterd] = useState("");
    const [timerd, setTimerd] = useState("");
    // const [Daterd, onChange] = useState(new Date());
    useEffect(() => {
        GetUnRend();

    }, []);
    const GetUnRend = async () => {
        fetchRendtById(id)
            .then(res => {
                setDaterd(res.data.Daterd)
                setTimerd(res.data.timerd)

            })
            .catch(error => {
                console.log(error)
            })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            const rend = {
                _id: id,
                Daterd: Daterd,
                timerd: timerd
            }
            editRendR(rend)
                .then(res => {
                    console.log("Update OK", res);
                 navigate(`/request/medecin/${medecinId}`);
                })
                .catch(error => {
                    console.log(error)
                })
        }
        setValidated(true);
    };
    return (
        <>
        <TopDoctor/>
        <div className='centered-container'>
            <h1 > Modifier Rendez_Vous</h1>
         <br />
            <div class="calendar-container">
                <Form validated={validated} onSubmit={handleSubmit} className='rdvpa'>
                    {/* <Calendar onChange={onChange} value={Daterd} /> <br/> */}

                    <Form.Group>
                        {/* <Form.Label>Choisir Date :</Form.Label> */}
                        <Form.Control type="date"
                            className='TimeM'
                            required
                            value={Daterd}
                            onChange={(e) => setDaterd(e.target.value)}
                        />
                    </Form.Group>
                    <br />


                    <Form.Group className='TimeM' >
                        {/* <Form.Label>Choisir Temps :</Form.Label> */}
                        <Form.Control type="time"
                            className='TimeM'
                            required
                            value={timerd}
                            onChange={(e) => setTimerd(e.target.value)}
                        />

                    </Form.Group>
                    <br />
                    <Button type="submit" variant="contained">Enregistrer</Button>
                </Form>
            </div>
        </div>
        </>
    )
}

export default Editrdv
