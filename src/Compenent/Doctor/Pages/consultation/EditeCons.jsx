import React from 'react'
import TopDoctor from '../../topbarD/TopDoctor'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { fetchConsById, editCons } from '../../../../Services/ConsService';
import "./cons.css"
function EditeCons() {
  const { consid, patientid } = useParams();
  console.log(patientid)
  console.log(consid)
  //     const [cons, setCons] = useState(null);
  console.log(consid)
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [MotifCons, setMotifCons] = useState("");
  const [AntécedentsMédecaux, setAntécedentsMédecaux] = useState("");
  const [TaillePatient,  setTaillePatient] = useState("");
  const [PoisPatient, setPoisPatient] = useState("");
  const [tension, setTension] = useState("");
  const [Température, setTempérature] = useState("");
  
  const [DescriptionExamen, setDescriptionExamen] = useState("");

  useEffect(() => {
    GetUnCons();
    // GetListMedecin();
  }, []);

  const GetUnCons = async () => {
    fetchConsById(consid)
      .then(res => {
        setMotifCons(res.data.MotifCons)
        setAntécedentsMédecaux(res.data.AntécedentsMédecaux)
        setTaillePatient(res.data.TaillePatient)
        setPoisPatient(res.data.PoisPatient)
        setTension(res.data.tension )
        setTempérature(res.data.Température)
        setDescriptionExamen(res.data.DescriptionExamen)

      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const cons = {
        _id: consid,
        MotifCons: MotifCons,
        AntécedentsMédecaux: AntécedentsMédecaux,
        DescriptionExamen: DescriptionExamen,
        PoisPatient: PoisPatient,
        TaillePatient: TaillePatient,
        tension: tension,
        Température: Température,

      }
      editCons(cons)
        .then(res => {
          console.log("Update OK", res);
          // alert("modification avec succès")
          // "/patient/cons/6452c36c27b142a8046da762"
          navigate(`/patient/cons/${patientid}`);
        })
        .catch(error => {
          console.log(error)
        })
    }
    setValidated(true);
  };


  return (
    <div>
      <TopDoctor />

      <div className='cons'>
    <div className="row"  >

        <div className="col-md-6">
                <div className="col-10">
                  Motif de consultation :
                  <input type="text"
                    placeholder="Raison de visite"
                    className="form-control"
                    value={MotifCons}
                    onChange={(e) => setMotifCons(e.target.value)}
                  />
                </div>
                <div className="col-10">
                  Antécedents Médecaux :
                  <input type="text"
                    placeholder="Antécedents Médecaux"
                    className="form-control"
                    value={AntécedentsMédecaux}
                    onChange={(e) => setAntécedentsMédecaux(e.target.value)}
                  />
                </div>
                  </div>
                  <div className="col-md-6">
                  <div className="row g-3">
                <div className="col-10">
                  Pois Patient:
                  <input type="text"
                    placeholder="Historique familial"
                    className="form-control"
                    value={PoisPatient}
                    onChange={(e) => setPoisPatient(e.target.value)}

                  />
                </div>
                <div className="col-10">
                  Taille Patient:
                  <input type="text"
                    placeholder="Historique familial"
                    className="form-control"
                    value={TaillePatient}
                    onChange={(e) => setTaillePatient(e.target.value)}
                  />
                </div>
                <div className="col-10">
                Tension Patient:
                  <input type="text"
                    placeholder="Historique Social"
                    className="form-control"
                    value={tension}
                    onChange={(e) => setTension(e.target.value)}

                  />
                </div>

                <div className="col-10">
                Température Patient:
                  <input type="text"
                    placeholder="Historique Social"
                    className="form-control"
                    value={Température}
                    onChange={(e) => setTempérature(e.target.value)}

                  />
                </div>
              </div>
            </div>
       
        </div>
        <fieldset >
          <form noValidate validated={validated} onSubmit={handleSubmit} >
            <legend>Description d'Examen  :</legend>
            <div>
              <textarea rows="9" cols="80" className="form-control"
                value={DescriptionExamen}
                onChange={(e) => setDescriptionExamen(e.target.value)}
              ></textarea>
            </div><br />
            <div className="col-10">
              <button className="btn btn-primary" type="submit">Enregistrer</button>
            </div>
          </form>
        </fieldset>

      </div>
    </div>
  )
}

export default EditeCons
