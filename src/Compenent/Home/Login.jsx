// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../../feautures/AuthSlice';
// import { Link, useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import img from './Images/img-4.png'; // Assurez-vous que le chemin d'accès est correct
// import { DOCTOR, PATIENT } from '../../utils/roles';
// import Menu from './Menu';
// import Footer from './Footer';

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isLoggedIn, user, isError, errorMessage } = useSelector((state) => state.auth);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const objetuser = {
//       email: email,
//       password: password,
//     };
//     dispatch(login(objetuser));
//   };

//   if (isLoggedIn) {
//     if (user.role === DOCTOR) navigate('/PrincipaleDo');
//     else if (user.role === PATIENT) navigate('/HomePatient');
//   }

//   return (
//     <>
//       <Menu />
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 offset-md-3">
//             <div className="auth-container">
//               <h1 className="text-center mb-4">CONNEXION</h1>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="formBasicEmail">
//                   <Form.Label>Email : </Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(event) => setEmail(event.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword">
//                   <Form.Label>Password : </Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(event) => setPassword(event.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="w-100 mt-3">
//                   Se Connecter
//                 </Button>
//                 {isError && <p className="text-danger mt-2">{errorMessage}</p>}
//                 <br />
//                 <Link to="/register2" className="text-center d-block mt-3">Inscription !</Link>
//               </Form>
//             </div>
//           </div>
//         </div>
//         <div className="row mt-5">
//           <div className="col-md-6 offset-md-3 text-center">
//             <img src={img} alt="login" className="img-fluid" style={{ maxWidth: '300px' }} /> {/* Ajustez la taille ici */}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Login;
import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../feautures/AuthSlice";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from './Images/img-4.png';
import { DOCTOR, PATIENT } from '../../utils/roles';
import './Login.css';
import Menu from "./Menu";
import Footer from './Footer';
const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user, isError, errorMessage } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const objetuser = {
      email: email,
      password: password
    };

    dispatch(login(objetuser));

  }

  if (isLoggedIn) {
    console.log(user)
    if (user.role === DOCTOR) navigate("/PrincipaleDo");
    else if (user.role === PATIENT) navigate("/HomePatient");
    else navigate("/Home");
  }

  return (
    <>
      <Menu />
      <div className="auth-container" style={{ paddingTop: "40px", paddingBottom: "100px" }}>
        <div className="description-auth">
          <Form onSubmit={handleSubmit} >
            <h1>CONNEXION</h1>
            <Form.Group className="mb-3"  >
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                name="password"
                required
                label="Password"
                id="password"
                autoComplete="current-password"

              />
            </Form.Group>
            <br />
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Remember me" />
    </Form.Group> */}

            <Button variant="primary" type="submit" >
              {/* onClick={(event)=>handleSubmit(event)} */}
              Se Connecter
            </Button>
            {isError?<p>{errorMessage}</p>:""}
            <br />     <br />
            <Link to='/register2' >Inscription !!!</Link>
          </Form>

        </div>
        <div className="ima">
          <img src={img} width="250" height="250" />
        </div>
      </div>
      <Footer />
    </>
  );
}



export default Login

