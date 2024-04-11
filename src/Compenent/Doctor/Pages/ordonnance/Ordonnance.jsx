import React from 'react'
//
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

//
import "./ord.css"
import TopDoctor from '../../topbarD/TopDoctor'
import { useSelector } from "react-redux";
import { urlimage } from "../../../../Axios/Api";
import { fetchOrd, addOrd } from '../../../../Services/ordServices';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
function Ordonnance() {
  const { user } = useSelector((state) => state.auth);
  const { id, patientid } = useParams();

  const [ord, setOrd] = useState(null);
  const [validated, setValidated] = useState(false);
  const [NomMedicaments, setNomMedicaments] = useState("");
  const [DosageMedicaments, setDosageMedicaments] = useState("");
  const [FréquanceMedicaments, setFréquanceMedicaments] = useState("");
  const [FormeMedicaments, setFormeMedicaments] = useState("");
  const [DateOrd, setDateOrd] = useState(new Date().toISOString().split('T')[0]);
  const [observation, setObservation] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const ord1 = {
        consID: id,
        DateOrd: DateOrd,
        NomMedicaments: NomMedicaments,
        DosageMedicaments: DosageMedicaments,
        FréquanceMedicaments: FréquanceMedicaments,
        FormeMedicaments: FormeMedicaments,
        patientID: patientid,
        observation: observation
      }
      addOrd(ord1)
        .then(res => {
          console.log("Insert OK", res);
          setOrd(res.data)
          // console.log(ord1)
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


  useEffect(() => {
    GetListOrd();
  }, []);
  const GetListOrd = async () => {
    //affiche les consultation 
    await fetchOrd(id)
      .then((res) => {
        setOrd(res.data);
        console.log(res.data)
      });
  }
  //

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

  //




  return (
    <div className='Ord1'>

      <TopDoctor />

      <div className="tiltle">
        <h1 className='H1'>Gestion de Ordonnance </h1>
      </div>
      <br />
      <div className='ord' style={{ border: "2px solid black" }}>
        <div className="row" style={{ display: "flex" }}>
          <fieldset className="col-md-6">
            {/* <legend>Médicaments : </legend> */}
            <div>
              <div className="row g-3" style={{ alignItems: 'center' }}>
                <div className="col-10">
                  <label htmlFor='social'>Date Consultation :</label>
                  <input type='date'
                    className='form-control'
                    id='social'
                    required
                    placeholder='Date Consultations'
                    value={DateOrd}
                    onChange={(e) => setDateOrd(e.target.value)}

                  />
                </div>
                <div className="col-10">
                  <label htmlFor='social'>Nom Médicaments:</label>
                  <textarea
                    placeholder=" Nom Médicaments"
                    required
                    className="form-control"
                    value={NomMedicaments}
                    onChange={(e) => setNomMedicaments(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-10">
                  <label htmlFor='social'>  Dosage Medicaments: </label>
                  <textarea
                    placeholder="Dosage Médicaments "
                    required
                    className="form-control"
                    value={DosageMedicaments}
                    onChange={(e) => setDosageMedicaments(e.target.value)}


                  />
                </div>
                <div className="col-8">
                  <label htmlFor='social'> Fréquance Medicaments :</label>
                  <textarea
                    placeholder="Fréquance Médicaments"
                    className="form-control"
                    value={FréquanceMedicaments}
                    onChange={(e) => setFréquanceMedicaments(e.target.value)}
                    required
                  />
                </div>
                <div className="col-10">
                  <label htmlFor='social'> Forme Medicaments:</label>
                  <textarea
                    placeholder="Antécedents Médecaux"
                    className="form-control"
                    required
                    value={FormeMedicaments}
                    onChange={(e) => setFormeMedicaments(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div className='observation'>
          <fieldset >
            <form validated={validated} onSubmit={handleSubmit}>
              <legend> observation  :</legend>
              <div>
                <textarea rows="9" cols="90" className="form-control"

                  value={observation}
                  onChange={(e) => setObservation(e.target.value)}

                ></textarea>
              </div><br />
              <div className="col-10">
                <button className="btn btn-primary" type="submit">Enregistrer</button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
      <>
        {/* <div className='impr' >
          <button
            style={{ color: "balck", backgroundColor: "blue", height: 60, top: 150, left: 150, cursor: 'pointer' }}
            onClick={printToPDF}
          >
            DOWNLOAD PDF
          </button>
        </div> */}

        <div className="ordonnance" >
          <div className="ordonnance1" >
            <PictureAsPdfIcon fontSize='large' onClick={printToPDF} /> <br />

            <div id='pdf-content'>
              <div className='haut'>
                <div className="entete">
                  <br />

                  <p className='po'> {user.firstName} {user.lastName} </p>
                  <p className='po'>{user.adresse}</p>
                  <p className='po'>{user.phone}</p>
                  {/* <hr/> */}
                </div>
                <div className='tot'>
                  <br />

                  <p className='po'>Médecin {user?.specialiteID.nomsep}</p>
                  {/* <br/>               <br/> */}

                  <p className='po'>{user.certification}</p>
                </div>
              </div>
              <hr />
              <br />
              <h3 className='H3'>Ordonnance Medicale</h3>
              <br />  <br />
              <div className="ordonnance-details" >

                <div className='haut'  >
                  <br />
                  <p></p>
                  <p>Sfax le {ord?.DateOrd}</p>

                </div>
                <div className='haut'  >

                  <p></p>
                  <p>Patient : {ord?.patientID?.nompatient} {ord?.patientID?.prenompatient}   </p>

                </div>

                <div className='contenue'>
                 <h4 className='H4'>{ord?.NomMedicaments}</h4>
                  &nbsp;
                  &nbsp;
                  <br />

                  <h4 className='H4'>{ord?.DosageMedicaments}</h4>
                  &nbsp;
                  &nbsp;
                  <br />

                  <h4 className='H4'>{ord?.FréquanceMedicaments}</h4> &nbsp;
                  &nbsp;
                  &nbsp;
                  <br />
                  <h4 className='H4'>{ord?.FormeMedicaments} </h4>&nbsp;
                  &nbsp;
                  &nbsp;
                
               
                  <br />
                  <h4 className='H4'>{ord?.observation} </h4>  &nbsp;
                  &nbsp;

                  <br />   <br />
                  <br />
                  {/* <div className="signature-tampon">
                    <p> Signature et tampon </p>
                  </div> */}
                </div>
              </div>
              <br />



            </div>
          </div>
        </div>
      </>

    </div>
  )
}

export default Ordonnance