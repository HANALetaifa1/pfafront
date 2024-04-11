// import React, { useState, useEffect } from "react";
// import { registerUser } from './axios';
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { register } from "../../feautures/AuthSlice";
// import { fetchSpecialite } from "../../Services/SpecialiteServices";
// import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';
// //ADMIN
// import { PATIENT, DOCTOR } from '../../utils/roles'
// import { buildFormData } from "../../utils/ConvertFormData";
// import Menu from "./Menu";
// import { Alert } from "react-bootstrap";
// import { TextField } from "@mui/material";
// import { toast } from 'react-toastify';
// import Footer from "./Footer";

// function Register() {
//   const navigate = useNavigate()
//   const [searchParams, setSearchParams] = useSearchParams()
//   const role = searchParams.get('role') || PATIENT
//   const dispatch = useDispatch();

//   const [firstName, setFirstName] = useState("")
//   const [lastName, setLastName] = useState("")
//   const [adresse, setAdresse] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [password2, setPassword2] = useState("");
//   const [avatar, setAvatar] = useState("");
//   const [matricule, setMatricule] = useState("");
//   const [certification, setCertification] = useState("");
//   //
//   const [validated, setValidated] = useState(false);
//   // const [startTime, setStartTime] = useState('');
//   // const [endTime, setEndTime] = useState('');
//   // const [consultationTime, setConsultationTime] = useState('');
//   // const [joursdeTravail, setjoursdeTravail] = useState([]);
//   //
//   const [specialiteID, setSpecialiteID] = useState("")
//   const [specialite, setSpecialite] = useState([])

//   useEffect(() => {
//     fetchSpecialite().then(res => {
//       setSpecialite(res.data)
//       //console.log(res.data)
//     })
//       .catch(error => {
//         console.log(error)
//       })
//   }, [])

//   //
//   const [error, setError] = useState(false);

//   const handlePhoneChange = (event) => {
//     const value = event.target.value;
//     if (value.length !== 8) {
//       setError(true);
//     } else {
//       setError(false);
//     }
//     setPhone(value);
//   };

//   const { user, isSuccess, isError, errorMessage } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (isSuccess && !error) {

//     }
//   }, [isSuccess]);

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (password.length < 6) {
//       // alert('');
//       toast.warning("Le mot de passe doit comporter au moins 6 caractères!!", {
//         position: toast.POSITION.LEFT,
//         autoClose: 3000,
//       });
//       return;
//     }
//     if (!/[A-Z]/.test(password)) {
//       // alert('');
//       toast.warning("Le mot de passe doit contenir au moins une lettre majuscule!!", {
//         position: toast.POSITION.LEFT,
//         autoClose: 3000,
//       });
//       return;
//     }

//     if (!/\d/.test(password)) {
//       // alert('');
//       toast.warning("Le mot de passe doit contenir au moins un chiffre!!",
//         {
//           position: toast.POSITION.LEFT,
//           autoClose: 3000,
//         });
//       return;
//     }


//     if (password !== password2) {
//       // alert('')
//       toast.error("Les mots de passe ne correspondent pas!!",
//         {
//           position: toast.POSITION.LEFT,
//           autoClose: 3000,
//         });
//     } else {
//       const doctorData = role === DOCTOR ? {
//         specialiteID,
//         matricule,
//         certification,
//         // startTime,
//         // endTime , 
//         // consultationTime , 
//         // joursdeTravail

//       } : {}
//       const userData = {
//         firstName: firstName,
//         lastName: lastName,
//         adresse: adresse,
//         phone: phone,
//         email: email,
//         avatar: avatar,
//         password: password,
//         role: role,
//         ...doctorData
//       }
//       const formData = new FormData();
//       buildFormData(formData, userData);
//       dispatch(register(formData));
//       navigate("/login");

//     }
//   };
//   return (
//     <div>
//       <Menu />

//       <div className="container-fluid bg-primary my-5 py-5" >
//         <div className="container py-5">
//           <div className="row gx-5">
//             <div className="col-lg-6 mb-5 mb-lg-0">
//               <div className="mb-4">
//                 <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Inscription {role === DOCTOR ? 'médecin' : 'patient'}</h5>
//                 <h1 className="display-4"> Créer un compte </h1>
//               </div>
//               <p className="text-white mb-5"> vous devez créer un compte pour consulter service de {role === DOCTOR ? 'médecin' : 'patient'} </p>
//               <Link className="btn btn-dark rounded-pill py-3 px-5 me-3" to="/login"> Connecter </Link>

//             </div>
//             <div className="col-lg-6">
//               <div className="bg-white text-center rounded p-5">
//                 <h1 className="mb-4"> Inscrivez-vous </h1>

//                 <form onSubmit={handleSubmit} >
//                   <div className="row g-3" style={{ alignItems: 'center' }}>
//                     <div className="col-12 col-sm-6">
//                       <input type="text"
//                         className="form-control bg-light border-0"
//                         id="lastName"
//                         required
//                         autoComplete="family-name"
//                         label="Last Name"
//                         name="lastName"
//                         onChange={(event) => setLastName(event.target.value)}
//                         placeholder="Nom"
//                         style={{ height: '55px' }} />
//                     </div>
//                     <div className="col-12 col-sm-6">
//                       <input type="text"
//                         className="form-control bg-light border-0"
//                         placeholder="Prénom"
//                         name="firstName"
//                         autoComplete="given-name"
//                         required
//                         id="firstName"
//                         label="First Name"
//                         onChange={(event) => setFirstName(event.target.value)}
//                         style={{ height: '55px' }}
//                       />
//                     </div>

//                     <div className="col-12 col-sm-6">
//                       {/* <input
//                         type="text"
//                         className="form-control bg-light border-0"
//                         placeholder="Numéro mobile"
//                         style={{ height: '55px' }}
//                         name="phone"
//                         autoComplete="given-phone"
//                         required
//                         id="phone"
//                         label="phone"
//                         onChange={handlePhoneChange} /> */}
//                       {/* <Grid item xs={12} sm={6}> */}
//                       <input
//                         type="text"
//                         required
//                         fullWidth
//                         className="form-control bg-light border-0"
//                         id="telephone"
//                         label="Télephone "
//                         name="telephone"
//                         autoComplete="Telephone"
//                         placeholder="+(216)"
//                         style={{ height: '55px' }}
//                         error={error}
//                         // onChange={(event) => setPhone(event.target.value)}

//                         onChange={handlePhoneChange}
//                       />
//                       {error && <Alert severity="error">Le numéro se compose de 8 chiffres</Alert>}
//                       {/* </Grid> */}
//                     </div>

//                     <div className="col-12 col-sm-6">
//                       <input
//                         type="text"
//                         className="form-control bg-light border-0"
//                         placeholder="adresse"
//                         name="adresse"
//                         autoComplete="given-addresse"
//                         required
//                         id="adresse"
//                         label="adresse"
//                         onChange={(event) => setAdresse(event.target.value)}
//                         style={{ height: '55px' }} />
//                     </div>

//                     <div className="col-12 col-sm-6">
//                       <input
//                         type="email"
//                         className="form-control bg-light border-0"
//                         placeholder="Email"
//                         required
//                         id="email"
//                         label="Email Address"
//                         name="email"
//                         autoComplete="email"
//                         onChange={(event) => setEmail(event.target.value)}
//                         style={{ height: '55px' }} />
//                     </div>

//                     {
//                       role === DOCTOR && (
//                         <div className="col-12 col-sm-6">
//                           <input type="text"
//                             className="form-control bg-light border-0"
//                             id="certification"
//                             required
//                             label="Certification"
//                             name="certification"
//                             onChange={(event) => setCertification(event.target.value)}
//                             placeholder="Diplôme"
//                             style={{ height: '55px' }} />
//                         </div>
//                       )
//                     }

//                     {/* // photo personnelle*/}
//                     <div className="col-12 col-sm-6">
//                       <h6>Mettre Photo Personnelle</h6>
//                       <input
//                         type="file"
//                         name="photo"
//                         label="photo"
//                         id="photo"
//                         onChange={(event) => setAvatar(event.target.files[0])}
//                       // onChange={(event) => setAvatar(event.target.files[0])}
//                       // className="form-control bg-light border-0" style={{ height: '55px' }}
//                       />
//                     </div>
//                     {
//                       role === DOCTOR && (
//                         <div className="col-12 col-sm-6">
//                           <input type="text"
//                             className="form-control bg-light border-0"
//                             id="matricule"
//                             required
//                             label="matricule"
//                             name="matricule"
//                             onChange={(event) => setMatricule(event.target.value)}
//                             placeholder="MatriculeFiscale"
//                             style={{ height: '55px' }} />
//                         </div>
//                       )
//                     }
//                     {/* {
//                       role === DOCTOR && (
//                         <div className="col-12 col-sm-6">
//                           <h5>Mettre votre vérification </h5>
//                           <input
//                             type="file"
//                             name="matricule"
//                             label="matricule"
//                             id="matricule"
//                             onChange={(event) => setMatricule(event.target.files[0])}
//                             className="form-control bg-light border-0" style={{ height: '55px' }}
//                           />
//                         </div>
//                       )
//                     } */}

//                     {/* liste specilites */}
//                     {
//                       role === DOCTOR && (
//                         <div className="col-12 col-sm-6">
//                           <select className="form-control bg-light border-0"
//                             style={{ height: '55px' }}
//                             required
//                             as="select"
//                             type="select"
//                             value={specialiteID}
//                             onChange={(e) => setSpecialiteID(e.target.value)}
//                           >
//                             <option>choisie votre specialite</option>
//                             {specialite ? specialite.map((sep) => <option key={sep._id}
//                               value={sep._id}>{sep.nomsep}</option>) : null}
//                           </select>
//                         </div>
//                       )
//                     }
//                     <br />

//                     {/* {
//                       role === DOCTOR && (
//                         <div className="col-12 col-sm-6">
// start time :
//                           <input
//                             placeholder="Heure de début"
//                             className="form-control bg-light border-0" style={{ height: '55px' }}
//                             type="time"
//                             value={startTime}
//                             onChange={(e) => setStartTime(e.target.value)}
//                           />
//                         </div>
//                       )
//                     }
// end time:
//                     {
//                       role === DOCTOR && (
//                         <div className="col-12 col-sm-6">

//                           <input
//                             type="time"
//                             placeholder="Heure de Fin"

//                             value={endTime}
//                             onChange={(e) => setEndTime(e.target.value)}
//                             className="form-control bg-light border-0" style={{ height: '55px' }}
//                           />

//                         </div>
//                       )
//                     } */}

//                     {/* {
//                       role === DOCTOR && (
//                         <div className="col-12 col-sm-6">

//                           <input
//                             placeholder="Temps de consultation (en minutes)"

//                             className="form-control bg-light border-0" style={{ height: '55px' }}
//                             type="text"
//                             value={consultationTime}
//                             onChange={(e) => setConsultationTime(e.target.value)}
//                           />

//                         </div>
//                       )
//                     } */}

//                     <div className="col-12 col-sm-6">
//                       <input type="password"
//                         className="form-control bg-light border-0"
//                         placeholder="Mot de passe"
//                         required
//                         name="password"
//                         label="Password"
//                         id="password"
//                         autoComplete="new-password"
//                         onChange={(event) => setPassword(event.target.value)}
//                         style={{ height: '55px' }} />
//                     </div>

//                     <div className="col-12 col-sm-6">
//                       <input
//                         type="password"
//                         className="form-control bg-light border-0"
//                         placeholder="confirmer Mot de passe"
//                         required
//                         name="password2"
//                         label="Confirm Password"
//                         id="cpassword"
//                         autoComplete="Confirm-password"
//                         onChange={(event) => setPassword2(event.target.value)}
//                         style={{ height: '55px' }} />
//                     </div>

//                     <div className="col-12">
//                       <button className="btn btn-primary w-100 py-3" type="submit" style={{ width: "30px", fontSize: "30px" }}>S'inscrire</button>
//                     </div>
//                     {isError ? <p>{errorMessage}</p> : null}
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div >
//       <br /> <br />
//       {/* Appointment End */}
//       <Footer />
//     </div >
//   )
// }
// const formData = new FormData();
//       buildFormData(formData, userData);
//       try {
//         const response = await registerUser(formData); // Appel de la fonction registerUser
//         console.log('Inscription réussie:', response.data);
//         navigate("/login");
//       } catch (error) {
//         console.error('Erreur lors de l\'inscription:', error);
//       }
  

// export default Register



import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../feautures/AuthSlice";
import { fetchSpecialite } from "../../Services/SpecialiteServices";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { PATIENT, DOCTOR } from '../../utils/roles';
import { buildFormData } from "../../utils/ConvertFormData";
import Menu from "./Menu";
import { Alert } from "react-bootstrap";
import { TextField } from "@mui/material";
import { toast } from 'react-toastify';
import Footer from "./Footer";

function Register() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const role = searchParams.get('role') || PATIENT
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [avatar, setAvatar] = useState("");
  const [matricule, setMatricule] = useState("");
  const [certification, setCertification] = useState("");
  //
  const [validated, setValidated] = useState(false);
  // const [startTime, setStartTime] = useState('');
  // const [endTime, setEndTime] = useState('');
  // const [consultationTime, setConsultationTime] = useState('');
  // const [joursdeTravail, setjoursdeTravail] = useState([]);
  //
  const [specialiteID, setSpecialiteID] = useState("")
  const [specialite, setSpecialite] = useState([])

  useEffect(() => {
    fetchSpecialite().then(res => {
      setSpecialite(res.data)
      //console.log(res.data)
    })
      .catch(error => {
        console.log(error)
      })
  }, [])

  //
  const [error, setError] = useState(false);

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    if (value.length !== 8) {
      setError(true);
    } else {
      setError(false);
    }
    setPhone(value);
  };

  const { user, isSuccess, isError, errorMessage } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess && !error) {

    }
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.length < 6) {
      // alert('');
      toast.warning("Le mot de passe doit comporter au moins 6 caractères!!", {
        position: toast.POSITION.LEFT,
        autoClose: 3000,
      });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      // alert('');
      toast.warning("Le mot de passe doit contenir au moins une lettre majuscule!!", {
        position: toast.POSITION.LEFT,
        autoClose: 3000,
      });
      return;
    }

    if (!/\d/.test(password)) {
      // alert('');
      toast.warning("Le mot de passe doit contenir au moins un chiffre!!",
        {
          position: toast.POSITION.LEFT,
          autoClose: 3000,
        });
      return;
    }


    if (password !== password2) {
      // alert('')
      toast.error("Les mots de passe ne correspondent pas!!",
        {
          position: toast.POSITION.LEFT,
          autoClose: 3000,
        });
    } else {
      const doctorData = role === DOCTOR ? {
        specialiteID,
        matricule,
        certification,
        // startTime,
        // endTime , 
        // consultationTime , 
        // joursdeTravail

      } : {}
      const userData = {
        firstName: firstName,
        lastName: lastName,
        adresse: adresse,
        phone: phone,
        email: email,
        avatar: avatar,
        password: password,
        role: role,
        ...doctorData
      }
      const formData = new FormData();
      buildFormData(formData, userData);
      dispatch(register(formData));
      navigate("/login");

    }
  };
  return (
    <div>
      <Menu />

      <div className="container-fluid bg-primary my-5 py-5" >
        <div className="container py-5">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Inscription {role === DOCTOR ? 'médecin' : 'patient'}</h5>
                <h1 className="display-4"> Créer un compte </h1>
              </div>
              <p className="text-white mb-5"> vous devez créer un compte pour consulter service de {role === DOCTOR ? 'médecin' : 'patient'} </p>
              <Link className="btn btn-dark rounded-pill py-3 px-5 me-3" to="/login"> Connecter </Link>

            </div>
            <div className="col-lg-6">
              <div className="bg-white text-center rounded p-5">
                <h1 className="mb-4"> Inscrivez-vous </h1>

                <form onSubmit={handleSubmit} >
                  <div className="row g-3" style={{ alignItems: 'center' }}>
                    <div className="col-12 col-sm-6">
                      <input type="text"
                        className="form-control bg-light border-0"
                        id="lastName"
                        required
                        autoComplete="family-name"
                        label="Last Name"
                        name="lastName"
                        onChange={(event) => setLastName(event.target.value)}
                        placeholder="Nom"
                        style={{ height: '55px' }} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text"
                        className="form-control bg-light border-0"
                        placeholder="Prénom"
                        name="firstName"
                        autoComplete="given-name"
                        required
                        id="firstName"
                        label="First Name"
                        onChange={(event) => setFirstName(event.target.value)}
                        style={{ height: '55px' }}
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      {/* <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Numéro mobile"
                        style={{ height: '55px' }}
                        name="phone"
                        autoComplete="given-phone"
                        required
                        id="phone"
                        label="phone"
                        onChange={handlePhoneChange} /> */}
                      {/* <Grid item xs={12} sm={6}> */}
                      <input
                        type="text"
                        required
                        fullWidth
                        className="form-control bg-light border-0"
                        id="telephone"
                        label="Télephone "
                        name="telephone"
                        autoComplete="Telephone"
                        placeholder="+(216)"
                        style={{ height: '55px' }}
                        error={error}
                        // onChange={(event) => setPhone(event.target.value)}

                        onChange={handlePhoneChange}
                      />
                      {error && <Alert severity="error">Le numéro se compose de 8 chiffres</Alert>}
                      {/* </Grid> */}
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="adresse"
                        name="adresse"
                        autoComplete="given-addresse"
                        required
                        id="adresse"
                        label="adresse"
                        onChange={(event) => setAdresse(event.target.value)}
                        style={{ height: '55px' }} />
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Email"
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(event) => setEmail(event.target.value)}
                        style={{ height: '55px' }} />
                    </div>

                    {
                      role === DOCTOR && (
                        <div className="col-12 col-sm-6">
                          <input type="text"
                            className="form-control bg-light border-0"
                            id="certification"
                            required
                            label="Certification"
                            name="certification"
                            onChange={(event) => setCertification(event.target.value)}
                            placeholder="Diplôme"
                            style={{ height: '55px' }} />
                        </div>
                      )
                    }

                    {/* // photo personnelle*/}
                    <div className="col-12 col-sm-6">
                      <h6>Mettre Photo Personnelle</h6>
                      <input
                        type="file"
                        name="photo"
                        label="photo"
                        id="photo"
                        onChange={(event) => setAvatar(event.target.files[0])}
                      // onChange={(event) => setAvatar(event.target.files[0])}
                      // className="form-control bg-light border-0" style={{ height: '55px' }}
                      />
                    </div>
                    {
                      role === DOCTOR && (
                        <div className="col-12 col-sm-6">
                          <input type="text"
                            className="form-control bg-light border-0"
                            id="matricule"
                            required
                            label="matricule"
                            name="matricule"
                            onChange={(event) => setMatricule(event.target.value)}
                            placeholder="MatriculeFiscale"
                            style={{ height: '55px' }} />
                        </div>
                      )
                    }
                    {/* {
                      role === DOCTOR && (
                        <div className="col-12 col-sm-6">
                          <h5>Mettre votre vérification </h5>
                          <input
                            type="file"
                            name="matricule"
                            label="matricule"
                            id="matricule"
                            onChange={(event) => setMatricule(event.target.files[0])}
                            className="form-control bg-light border-0" style={{ height: '55px' }}
                          />
                        </div>
                      )
                    } */}

                    {/* liste specilites */}
                    {
                      role === DOCTOR && (
                        <div className="col-12 col-sm-6">
                          <select className="form-control bg-light border-0"
                            style={{ height: '55px' }}
                            required
                            as="select"
                            type="select"
                            value={specialiteID}
                            onChange={(e) => setSpecialiteID(e.target.value)}
                          >
                            <option>choisie votre specialite</option>
                            {specialite ? specialite.map((sep) => <option key={sep._id}
                              value={sep._id}>{sep.nomsep}</option>) : null}
                          </select>
                        </div>
                      )
                    }
                    <br />

                    {/* {
                      role === DOCTOR && (
                        <div className="col-12 col-sm-6">
start time :
                          <input
                            placeholder="Heure de début"
                            className="form-control bg-light border-0" style={{ height: '55px' }}
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                          />
                        </div>
                      )
                    }
end time:
                    {
                      role === DOCTOR && (
                        <div className="col-12 col-sm-6">

                          <input
                            type="time"
                            placeholder="Heure de Fin"

                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="form-control bg-light border-0" style={{ height: '55px' }}
                          />

                        </div>
                      )
                    } */}

                    {/* {
                      role === DOCTOR && (
                        <div className="col-12 col-sm-6">

                          <input
                            placeholder="Temps de consultation (en minutes)"

                            className="form-control bg-light border-0" style={{ height: '55px' }}
                            type="text"
                            value={consultationTime}
                            onChange={(e) => setConsultationTime(e.target.value)}
                          />

                        </div>
                      )
                    } */}

                    <div className="col-12 col-sm-6">
                      <input type="password"
                        className="form-control bg-light border-0"
                        placeholder="Mot de passe"
                        required
                        name="password"
                        label="Password"
                        id="password"
                        autoComplete="new-password"
                        onChange={(event) => setPassword(event.target.value)}
                        style={{ height: '55px' }} />
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="password"
                        className="form-control bg-light border-0"
                        placeholder="confirmer Mot de passe"
                        required
                        name="password2"
                        label="Confirm Password"
                        id="cpassword"
                        autoComplete="Confirm-password"
                        onChange={(event) => setPassword2(event.target.value)}
                        style={{ height: '55px' }} />
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit" style={{ width: "30px", fontSize: "30px" }}>S'inscrire</button>
                    </div>
                    {isError ? <p>{errorMessage}</p> : ""}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
      <br /> <br />
      {/* Appointment End */}
      <Footer />
    </div >
  )
}

export default Register