import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./EnterCode.css";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IconButton } from "@mui/material";
import TopPA from '../principale/top/TopPA';
import { useEffect } from "react";
import {fetchPatient} from "../../../Services/patientServices"
function CodePa() {
    const [code, setCode] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [showCode, setShowCode] = useState(false);
    const navigate = useNavigate();
    const [patients, setPatient] = useState([]);
     useEffect(() => { GetListPatient(); }, []); 
     const GetListPatient = async () => { 
        await fetchPatient() .then((res) => { 
            setPatient(res.data); console.log(res.data); }); 
        }
    const handleChange = (e) => {
        setCode(e.target.value);
    };

    const handleToggleCode = () => {
        setShowCode(!showCode);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Envoyer le code au serveur ou effectuer d'autres actions


        // Vous pouvez ajouter votre logique ici pour traiter le code entré par le patient
    };





    return (
        <>      
        <TopPA />
     
        <div className="enter-code">
            <h1>Entrez votre code :</h1> <br /> <br />
            {!submitted ? (
                <form onSubmit={handleSubmit} className="form">
                    <div className="code-container">
                        <TextField
                            type={showCode ? "text" : "password"}
                            value={code}
                            onChange={handleChange}
                            label="Code"
                            variant="outlined"
                            className="code-input"
                        />
                        <IconButton onClick={handleToggleCode} className="code-button">
                            {showCode ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </div> <br />
                    {/* {`/request/medecin/${id}/ajouter`} */}
                    
                    {<Link to={`/Monfiche/${code}`} >
                        <Button type="submit" variant="contained" className="submit-btn">
                            Soumettre
                        </Button>
                    </Link>
                    }

                </form>
            ) : (
                <div className="submitted-message">
                    <p>Votre code a été soumis avec succès !</p>
                </div>
            )}
        </div>
        </>
    );
}

export default CodePa;
