import React from 'react'
import Avatar from '@mui/material/Avatar';
// import "./topPa.css";
import Stack from '@mui/material/Stack';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useSelector} from "react-redux";
 import {urlimage} from "../../../../Axios/Api"
 import LogoutIcon from '@mui/icons-material/Logout';
//  import SettingsApplicationsIcon from '@mui/iconsmaterial/SettingsApplications';
import {Nav, Navbar,Container,Form,FormControl,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom'
// import Sidebar from '../side/Sidebar';
const TopPA=()=>{
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  const {user} = useSelector((state) =>state.auth);
   console.log(user)
   const userId = user._id
console.log(userId);
  return(
    <div className="topbar">
   
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >DrMedicale </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/HomePatient"> Accueil</Nav.Link>
      <Nav.Link as={Link} to={`/MesRend/user/${userId}`}>Mes Rendez-vous</Nav.Link>
      {/* <Nav.Link as={Link} to="/RendezVous">Mes Dossiers médecaux</Nav.Link> */}

      <Nav.Link as={Link} to="/entrecode">Mes Dossiers médicaux</Nav.Link>

    </Nav>
    <Stack direction="row" spacing={2}>
      <Avatar alt={user.firstName} src={urlimage + user.avatar} />

    </Stack>
    </Container>
    <Nav className="me-auto">
    <Nav.Link as={Link} to="/Patientedite" > <h6 style={mystyle}>Bienvenue {user.firstName} {user.lastName}</h6></Nav.Link>
  
    <Nav.Link as={Link} to="/Logout" style={{color:'red'}}><ExitToAppIcon Size='300px'/></Nav.Link>
    </Nav>

  </Navbar>
  </div>
  )

}
export default  TopPA



// import React from 'react'
// import "./topPa.css";
// import img1 from "../../../Home/Images/team-2.jpg"
// // import Avatar from '@mui/material/Avatar';
// import {urlimage} from "../../../../Axios/Api"

// import {useSelector} from "react-redux"
// import { NotificationsNone, Language, Settings } from '@material-ui/icons';
// export default function TopPA() {
//   // const mystyle = {
//   //   color: "white",
//   //   backgroundColor: "DodgerBlue",
//   //   padding: "10px",
//   //   fontFamily: "Arial"
//   // };
//   const {user} = useSelector((state) =>state.auth);
//   console.log(user)

//   return (
//     <>

//     <div className="topbar">
//       <div className="topbarWrapper">
//         <div className="topLeft">
//           <span className="logo">Bienvenu {user.firstName} {user.lastName}</span>
//         </div>
//         <div className="topRight">
//           <div className="topbarIconContainer">
//             <NotificationsNone />
//             {/* <span className="topIconBadge"></span> */}
//           </div>
//           <div className="topbarIconContainer">
//             <Language />
//             {/* <span className="topIconBadge"></span> */}
//           </div>
//           <div className="topbarIconContainer">
//             <Settings />
//           </div>
//           <img src= {urlimage + user.avatar}  alt="Remy Sharp" className="topAvatar"  />
 
         
//         </div>
//       </div>
//     </div>
//     </>

//   )
// }
// // 