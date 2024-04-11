import React from 'react'
import TopPA from '../principale/top/TopPA'
import { fetchords } from '../../../Services/dossierService';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import "./ordpa.css"

function OrdPa() {
  const [ord, setOrds] = useState([]);
  // const [ord, setOrd] = useState(null);
  const { consid } = useParams();
  // const [ord, setOrd] = useState(null);
  useEffect(() => {
    GetListords();
  }, []);
  const GetListords = async () => {
    await fetchords(consid)
      .then((res) => {
        setOrds(res.data);
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
      pdf.save('ordonnance.pdf');
    });
  };
  return (
   
    <div>
    <TopPA />
    <div style={{ textAlign: 'center' }}>
      <h1> Ordonnance </h1> <br /><br />
    </div >
    <div className='ordP1'>
    <Card style={{ width: '18rem' , display: "flex" }}>
      <Card.Header> Ordonnance </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>  {ord?.DateOrd}</ListGroup.Item>
        <ListGroup.Item>  {ord?.NomMedicaments}</ListGroup.Item>
        <ListGroup.Item> {ord?.DosageMedicaments}</ListGroup.Item>
        <ListGroup.Item>{ord?.FréquanceMedicaments}</ListGroup.Item>
        <ListGroup.Item> {ord?.observation} </ListGroup.Item>

      </ListGroup>

    </Card>
    </div>
    {/* <div className="ordonnance" >
          <div className="ordonnance1" >
            <PictureAsPdfIcon fontSize='large' onClick={printToPDF} /> <br/>

            <div id='pdf-content'>
              <div className='haut'>
                <div className="entete">
                  <p> {user.firstName} {user.lastName} </p>
                  <p>{user.adresse}</p>
                  <p>{user.phone}</p>
                </div>
                <div className='tot'>
                  <p>Médecin {user?.specialiteID.nomsep}</p>
                  <p>{user.certification}</p>
                </div>
              </div>
              <hr />
              <br />
              <h3 className='H3'>Ordonnance Medicale</h3>
              <br />  <br />
              <div className="ordonnance-details" >

                <div className='haut'  >

                  <p></p>
                  <p>Sfax le {ord?.DateOrd}</p>

                </div>
                <div className='haut'  >

                  <p></p>
                  <p>Patient : {ord?.patientID?.nompatient} {ord?.patientID?.prenompatient}   </p>

                </div>

                <div className='contenue'>
                  {ord?.NomMedicaments}&nbsp;
                  &nbsp;
                  <br />
      
                  {ord?.DosageMedicaments}
                  &nbsp;
                  &nbsp;
                  <br />
                
                  {ord?.FréquanceMedicaments}&nbsp;
                  &nbsp;
                  &nbsp;
              
                  <br />
                  {ord?.observation}   &nbsp;
                  &nbsp;
             
                  <br />
             
                </div>
              </div>
              <br />



            </div>
          </div>
        </div> */}
  </div>


  )
}

export default OrdPa