import { useState, useEffect } from 'react'
// import {urlimage} from "../../../Axios/Api"
// import {  fetchSpecialite}  from '../../../Services/SpecialiteServices';
// import Footer from '../../Home/Footer';
// import Sidebar from './Sidebar';
// import img1 from '../Home/Images/team-1.jpg';
// import img3 from '../Home/Images/team-3.jpg';
import { useParams, useSearchParams } from 'react-router-dom'
import '../../Home/Style.css'
import imageM from '../../Home/Images/doctor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaUserMd, FaAmbulance, FaProcedures, FaMicroscope, FaPills } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { TbStethoscope } from "react-icons/tb";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import img2 from '../../Home/Images/team-2.jpg';
import { fetchMedecin } from '../../../Services/DoctorServices';
import { urlimage } from "../../../Axios/Api"
import TopPA from '../principale/top/TopPA';
import { fetchMedecinBySpeciality } from '../../../Services/UserServices';

function OurDoctor() {
    const [users, setUsers] = useState([])

//     console.log(users.length > 0 ? users[0]._id : null);
//   const id = users.length > 0 ? users[0]._id : null;
//     console.log(id)
    const [searchParams, setSearchParams] = useSearchParams()
    const specialite = searchParams.get('specialite')
    useEffect(() => {
        fetchMedecinBySpeciality(specialite).then(res => {
            setUsers(res.data)
            console.log(res.data)
        })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>

            <TopPA />
            {/* //search */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Les Médecins</h5>
                        <h3 className="display-6">Les Médecins "{specialite}"</h3>
                    </div>
                    {/* <div className='serach1'>
                        <Form className="d-flex" style={{ paddingRight: "400px", paddingLeft: "400px" }}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"

                            />

                            <Button variant="outline-success"><BsSearch /></Button>
                        </Form>
                    </div> */}
                    <div className="owl-carousel team-carousel position-relative">
                        {users.map((user, index) =>
                            <div className="team-item" key={index}>
                                <div className="row g-0 bg-light rounded overflow-hidden">
                                    <div className="col-12 col-sm-5 h-100">
                                        <img className="img-fluid h-100" src={user.avatar ? urlimage + user.avatar : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} style={{ objectFit: 'cover' }} alt={user.firstName} />
                                        {/* <img src={urlimage +sep.Icon} alt={sep.Icon} style={{ maxWidth: '50%', height: 'auto' }} />  */}

                                        {/* <img  alt="med" src={urlimage + medecin.photo} /> */}
                                    </div>
                                    <div className="col-12 col-sm-7 h-50 d-flex flex-column">
                                        <div className="mt-auto p-3">
                                            <h3>{user.firstName}  {user.lastName}</h3>
                                            <h6 className="fw-normal fst-italic text-primary mb-3">{user.email}</h6>
                                            <p className="m-0">{user.adresse}</p>
                                            <p className="m-0"> +216 {user.phone}</p>
                                            <p className="m-0">{user.specialiteID?.nomsep}</p>
                                            {/* <p>{user._id}</p> */}
                                        </div>
                                        <div className="d-flex mt-auto border-top p-4">
                                            <Link to={`/Prendrerend_vous/medecin/${user._id}`}> 
                                            <button className="btn btn-primary w-100 py-3" type="submit" style={{ fontSize: "15px" }}>
                                                Rendez-Vous</button> 
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>



            {/* tearm end */}
            {/* <Footer /> */}
        </div>
    )
}

export default OurDoctor