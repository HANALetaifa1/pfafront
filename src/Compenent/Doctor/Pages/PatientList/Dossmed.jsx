import React, { useEffect, useState } from 'react'
//
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { pink } from '@mui/material/colors';

//
import TopDoctor from '../../topbarD/TopDoctor'
import "./doss.css"
import { fetchPatientById } from '../../../../Services/patientServices';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function Dossmed() {
    const { user } = useSelector((state) => state.auth);
    const { id } = useParams();
    console.log(id);

    const [patients, setPatient] = useState([]);
    useEffect(() => {
        GetListPatient();
    }, []);
    const GetListPatient = async () => {

        //affiche les patients 

        // await fetchPatient()
        //   .then((res) => {
        //     setPatient(res.data);
        //   });
        await
            fetchPatientById(id)
                .then((res) => {
                    setPatient(res.data);
                    console.log(res.data);
                });
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

//

const [showCode, setShowCode] = useState(false);


const handleToggleCode = () => {
  setShowCode(!showCode);
};
//
    return (
        <>
            <TopDoctor />
            <div className='allfich'>
                <div className='fiche'>

                    <PictureAsPdfIcon fontSize='large' onClick={printToPDF} />

                    <div id='pdf-content'>
                        <h1 className='H111'>Fiche Patient</h1>
                        <br />
                        <h3 className='H33'>  Num Fiche : <span>  {patients?.numfiche} </span>  </h3>
                        <br />
                        <h3 className='H33'> Identifient Patient : <span>  {patients?.cinPa} </span> </h3>
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



                        {/* <h2 className='H22'> Consultation : </h2> */}

                        {/* <div className='impr1'>
        <LocalPrintshopIcon fontSize='large' />
    </div> */}
                    </div>
                </div>
    <h3 className='H33'>
        <input
            type={showCode ? "text" : "password"}
            value={patients?._id}
            readOnly
            size="200px"
        />
        <RemoveRedEyeIcon fontSize='large' sx={{ color: pink[500] }} onClick={handleToggleCode} />
        </h3>
            </div>
        </>
    )
}

export default Dossmed
