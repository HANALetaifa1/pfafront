import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchpaById } from '../../../Services/dossierService';
import TopPA from '../principale/top/TopPA';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Button from "@mui/material/Button";
import { useSelector } from 'react-redux';

// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import { pink } from '@mui/material/colors';
function Monfiche() {

    const [patients, setPatient] = useState([]);
   const { user } = useSelector((state) => state.auth);
    const { code } = useParams();
  
  
    useEffect(() => {
      GetListpatient();
    }, []);
    const GetListpatient = async () => {
  
        await fetchpaById(code)
        .then((res) => {
          console.log(res)
          setPatient(res.data);
        }).catch(er => console.log(er))
        ;
    }
    const printToPDF = () => {
        const input = document.getElementById('pdf-content');
        html2canvas(input).then((canvas) => {
            const pdf = new jsPDF();
            const imgData = canvas.toDataURL('image/png');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('FichePatient.pdf');
        });
    };

  
  return (
    <div>
    <TopPA/>

{/* <div>
    <br/>
    <h3>Bienvenue {user?.firstName} <br/>
    C'est votre fiche de medecin :
    <br/>
<p> 
    </p> 
  {patients?.medecinID?.email}
  {patients?.medecinID?.phone} 
   </h3>
</div> */}

    <div className='allfich'>
                <div className='fiche'>

                    <PictureAsPdfIcon fontSize='large' onClick={printToPDF} />

                    <div id='pdf-content'>
                        <h1 className='H111'>Fiche Patient</h1>
                        <br /> 
                      
                        <h3 className='H33'>  Num Fiche : <span> {patients?.numfiche} </span>  </h3>
                        <br />
                        <h3 className='H33'> Identifiant Patient : <span>  {patients?.cinPa} </span> </h3>
                        <br />
                        <h3 className='H33'>  Nom & Prénom Patient : <span>  {patients?.nompatient} {patients?.prenompatient} </span>  </h3>
                        <br />
                        <h3 className='H33'> Date de Naissance:  <span>  {patients?.dateNais} </span></h3>
                        <br />
                        <h3 className='H33'> sexe : <span>  {patients?.sexepatient} </span></h3>
                        <br />
                        <h3 className='H33'> N°Teléphone: <span>  {patients?.numtelPa} </span> </h3>
                        <br />
                        <h3 className='H33'> Email :  <span>  {patients?.emailpatient} </span></h3>
                        <br />
                        <h3 className='H33'> Adresse:  <span>  {patients?.adressepatient} </span></h3>
                        <br />
                        <h3 className='H33'> Historique Familial:  <span>  {patients?.HistoriqueFamilial} </span></h3>
                        <br />
                        <h3 className='H33'> Profession:  <span>  {patients?.profession} </span></h3>
                        <br />
                        <h3 className='H33'> Medecin : <span> {patients?.medecinID?.firstName}    {patients?.medecinID?.lastName}</span></h3>
                        <br />
                        <h3 className='H33'> Email Medecin : <span>{patients?.medecinID?.email}</span></h3>
                        <br />
                        <h3 className='H33'> Phone Medecin : <span> {patients?.medecinID?.phone} </span></h3>
                        <br />

                    </div>   
  
                </div>
                {<Link to={`/DossiersPa/${code}`} >
                        <Button type="submit" variant="contained" className="submit-btn">
                            Voir Les consultations
                        </Button>
                    </Link>
                    }
            </div>
    </div>
  )
}

export default Monfiche
