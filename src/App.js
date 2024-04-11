
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from "react-redux";

//home
import Menu from './Compenent/Home/Menu';
// import { Logout, PriceChange } from '@mui/icons-material';
import Principale from './Compenent/Home/Principale';
import About from './Compenent/Home/About'
import TopBar from './Compenent/Home/TopBar';
import Service from './Compenent/Home/Service';
import Register2 from './Compenent/Home/Register2';
import Footer from './Compenent/Home/Footer';
import Contact from './Compenent/Home/Contact';
import Login from './Compenent/Home/Login';
import Register from './Compenent/Home/Register';
import OurDoctor from './Compenent/patient/doctors/OurDoctor'
import ButtonBar from './Compenent/Home/ButtonBar';



// Doctor interface
import Consultation from './Compenent/Doctor/Pages/consultation/Consultation';
import Ordonnance from './Compenent/Doctor/Pages/ordonnance/Ordonnance';

import Insertpatient from './Compenent/Doctor/Pages/PatientList/Insertpatient';
import MenuDoctor from './Compenent/Doctor/Pages/HomeDoctor/MenuDoctor';
import ListRendVous from './Compenent/Doctor/Pages/RendezVous/ListRendVous';
import Demdeur from './Compenent/Doctor/Pages/RendezVous/Demdeur';
import EditePatient from './Compenent/Doctor/Pages/PatientList/EditePatient';
import ListPatient from "./Compenent/Doctor/Pages/PatientList/ListPatient";


// patient interface
// import MenuPa from './Compenent/patient/principale/MenuPa';

import DossiersPa from './Compenent/patient/ourDossiers/DossiersPa';

import MesRend from './Compenent/patient/RendezVous/histoireRend/MesRend';

import SidebarD from './Compenent/Doctor/sidebar/SidebarD';

import Prendrerend_vous from './Compenent/patient/RendezVous/Prendrerend_vous';
import SonDossier from './Compenent/patient/ourDossiers/SonDossier';
// import MoncomptePa from './Compenent/patient/ProfilePa/MoncomptePa';

import PrincipaleDo from './Compenent/Doctor/Pages/HomeDoctor/PrincipaleDo';
import Patientedite from './Compenent/patient/ProfilePa/Patientedite';
import HomePatient from './Compenent/patient/principale/HomePatient';
import Modifiercompte from './Compenent/Doctor/Pages/modificationcompte/Modifiercompte';
import CalendrieMed from './Compenent/Doctor/Pages/RendezVous/CalendrieMed';
// import ConsPa from './Compenent/patient/ourDossiers/ConsPa';
import OrdPa from './Compenent/patient/ourDossiers/OrdPa';
import ListsepPa from './Compenent/patient/principale/ListsepPa';
import Logout from './Compenent/patient/principale/Logout';
import TopPA from './Compenent/patient/principale/top/TopPA';
import DetailsCons from './Compenent/Doctor/Pages/consultation/DetailsCons';
import EditeCons from './Compenent/Doctor/Pages/consultation/EditeCons';
import Paientedite from './Compenent/patient/ProfilePa/Patientedite';
import TopDoctor from './Compenent/Doctor/topbarD/TopDoctor';
import ProtectedRoutesMedecin from './Compenent/Home/ProtectedRoutesMedecin';
import Dossmed from './Compenent/Doctor/Pages/PatientList/Dossmed';

import AjouterCons from './Compenent/Doctor/Pages/consultation/AjouterCons';
import RendezVous from './Compenent/patient/RendezVous/RendezVous';
import { Disponibilité } from './Compenent/Doctor/Pages/RendezVous/Disponibilité';
import { AjouterDispo } from './Compenent/Doctor/Pages/RendezVous/AjouterDispo';
import Ajouterdv from './Compenent/Doctor/Pages/RendezVous/Ajouterdv';
import Ajoutercontrol from './Compenent/Doctor/Pages/RendezVous/Ajoutercontrol';
import Editrdv from './Compenent/Doctor/Pages/RendezVous/Editrdv';
import CodePa from './Compenent/patient/ourDossiers/CodePa';
import Monfiche from './Compenent/patient/ourDossiers/Monfiche';
import ConsultationPa from './Compenent/patient/ourDossiers/consultationPa';
import { Dispomed } from './Compenent/Doctor/Pages/dispo/Dispomed';
// import Pdfimp from './Compenent/Doctor/Pages/imprissionpdf/Pdfimp';
function App() {
  // const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <Router>
        {/* {isLoggedIn? <HomePatient /> :<Login/> } */}
        {/* {isLoggedIn2? <PrincipaleDo /> :<LoginDoctor/> } */}
{/* 
        <TopBar/>  */}
        {/* <Menu/> */}
        <Routes>
          <Route path="/" element={<Principale />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Register2" element={<Register2 />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Dispomed" element={<Dispomed />} />
          {/* <Route path="/AppA" element ={<AppA/>} /> */}



          {/* Doctor  */}
          <Route path="/Patient/edit/:id" element={<EditePatient />} />
          <Route path="/Patient/medecin/:id/insert" element={<Insertpatient />} />
          <Route path="/Patient/cons/:id" element={<Consultation />} />
          <Route path="/Patient/cons/:id/insert" element={<AjouterCons />} />
          <Route path="/Modifiercompte" element={<Modifiercompte />} />
          <Route path="/MenuDoctor" element={<MenuDoctor />} />
          <Route path="/Consultation" element={<Consultation />} />
          <Route path="/ListRendVous/medecin/:id" element={<ListRendVous />} />
          <Route path="/Patient/medecin/:id" element={<ListPatient />} />
          <Route path="/request/medecin/:id" element={<Demdeur />} />
          <Route path="/RendezVous" element={<RendezVous />} />
          {/* <Route path="/Pdfimp" element={<Pdfimp />} /> */}
          <Route path="/Patient/fiche/:id" element={<Dossmed />} />
        
          <Route path="/Disponibilite" element={<Disponibilité />} />
          <Route path="/entrecode" element={<CodePa />} />
          
          <Route path="/AjouterDispo" element={<AjouterDispo />} />

          <Route path="/ListRendVous/medecin/:id/Ajoute" element={<Ajouterdv />} />
       
          <Route path="/request/medecin/:id/Ajouter" element={<Ajoutercontrol />} />
        
          <Route path="/Patient/cons/:id/:consid" element={<DetailsCons />} />

          <Route path="/Patient/:patientid/cons/edit/:consid" element={<EditeCons />} />

          <Route path="/Patient/:patientid/cons/ord/:id" element={<Ordonnance />} />
          

          <Route path="/PrincipaleDo" element={<PrincipaleDo />} />

          <Route path="/Patient/:id" element={<Editrdv />} />
          <Route path="/Patient/medecin/:id" element={<ListPatient />} />

          <Route path="/SidebarD" element={<SidebarD />} />
          <Route path="/CalendrieMed" element={<CalendrieMed />} />
          <Route path="/TopDoctor" element={<TopDoctor />} />
          {/* /patient/ */}
          <Route path="/HomePatient" element={<HomePatient />} />
          <Route path="/Patientedite" element={<Patientedite />} />
          {/* <Route path="/MenuPa" element={<MenuPa />} /> */}
          <Route path="/MesRend/user/:userId" element={<MesRend />} />
          <Route path="/DossiersPa/:code" element={<DossiersPa />} />
          
          <Route path="/Monfiche/:code" element={<Monfiche />} />

          {/* <Route path="/ConsPa" element={<ConsPa />} /> */}
          <Route path="/DetailsDossier/:code" element={<SonDossier />} />
          <Route path="/OrdPa/:consid" element={<OrdPa />} />
       
          <Route path="/ConsultationPa/:consid" element={<ConsultationPa />} />
       
          <Route path="/OurDoctor" element={<OurDoctor />} />
          <Route path="/Patient/medecin/:id" element={<ListPatient />} />
          <Route path="/Prendrerend_vous/medecin/:id" element={<Prendrerend_vous />} />
       
          {/* <Route path='/MoncomptePa'element={<MoncomptePa/>}/> */}
          <Route path="/ListsepPa" element={<ListsepPa />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/TopPA" element={<TopPA />} />
          {/* <Route path="/Cons" element={<Cons/>} /> */}
          <Route path="/Paientedite" element={<Paientedite />} />

        </Routes>
      </Router>
    </>);
}


export default App;
