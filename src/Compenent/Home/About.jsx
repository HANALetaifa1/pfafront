import React from 'react';
import about from './Images/medical1.png';
import val from './Images/valeur.png';
import mis from './Images/mission.png';
import Card from 'react-bootstrap/Card';
import mb1 from './Images/membre1.png';
import mb2 from './Images/membre2.png';
import mb3 from './Images/membre3.png';
import mb4 from './Images/membre4.png';
import mb5 from './Images/membre5.png';
import mb6 from './Images/membre6.png';
import './Style.css';
import { FaLightbulb, FaCheckCircle, FaLock } from "react-icons/fa";
import Menu from "./Menu";
import Footer from './Footer';
import ButtonBar from './ButtonBar';

function About() {
    return (
        <div>
            <Menu />
            <div className="container-fluid bg-primary py-5 mb-5 hero-header2">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start" style={{ paddingTop: "100px" }}>
                            <h1 className="display-1 mb-md-4" style={{ fontSize: "50px", textAlign: "center", color: 'black', paddingRight: '200px' }}>Rejoignez-nous dès aujourd'hui et simplifiez vos consultations médicales!</h1>
                            <div className="pt-2"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <img className="w-100 rounded" src={about} style={{ objectFit: "cover" }} alt="about us" />
                    </div>
                    <div className="col-lg-7">
                        <div className="mb-4">
                            <h1 className="display-4 text-primary">Qui nous sommes ?</h1>
                        </div>
                        <p className="text-muted">
                            Doctor's est une plateforme numérique qui simplifie la planification de rendez-vous médicaux pour les patients, optimise la gestion des agendas des praticiens et assure un suivi efficace des historiques médicaux.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-7">
                        <div className="mb-4">
                            <h1 className="display-4 text-primary">Nos valeurs</h1>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center mb-3">
                                <FaLightbulb className="me-2 fs-3 text-primary" />
                                <span className="fs-5">Innovation</span>
                            </div>
                            <p className="text-muted">
                                Nous explorons continuellement de nouvelles technologies pour offrir une expérience optimale à nos utilisateurs.
                            </p>
                            <div className="d-flex align-items-center mb-3">
                                <FaCheckCircle className="me-2 fs-3 text-primary" />
                                <span className="fs-5">Efficacité</span>
                            </div>
                            <p className="text-muted">
                                Nous nous engageons à fournir des solutions simples et intuitives qui répondent aux besoins réels de nos clients.
                            </p>
                            <div className="d-flex align-items-center">
                                <FaLock className="me-2 fs-3 text-primary" />
                                <span className="fs-5">Confiance</span>
                            </div>
                            <p className="text-muted">
                                La sécurité des données et la confidentialité des informations médicales sont au cœur de nos priorités.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <img className="w-100 rounded" src={val} style={{ objectFit: "cover" }} alt="about us" />
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <img className="w-100 rounded" src={mis} style={{ objectFit: "cover" }} alt="about us" />
                    </div>
                    <div className="col-lg-7">
                        <div className="mb-4">
                            <h1 className="display-4 text-primary">Notre mission</h1>
                        </div>
                        <p className="text-muted">
                        Révolutionner l'accès aux soins en offrant une expérience client exceptionnelle, tout en assurant une gestion fluide des agendas des praticiens et une traçabilité optimale de vos données médicales.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row gx-5">
                    <div className="col-lg-12">
                        <div className="mb-4">
                            <h1 className="display-4 text-primary">Notre équipe</h1>
                        </div>
                    </div>
                </div>
                <div className="row gx-5 justify-content-center"> {/* Ajout de la classe justify-content-center */}
                    <div className="col-md-4 mb-4">
                        <Card className='team-card'>
                            <Card.Img variant="top" src={mb1} />
                            <Card.Body>
                                <Card.Title className="text-primary">Membre de l'équipe</Card.Title>
                                <Card.Text className="text-muted">
                                Médecine générale : Soins primaires pour tous.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 mb-4">
                        <Card className='team-card'>
                            <Card.Img variant="top" src={mb2} />
                            <Card.Body>
                                <Card.Title className="text-primary">Membre de l'équipe</Card.Title>
                                <Card.Text className="text-muted">
                                Pédiatrie : Santé des enfants et des adolescents.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 mb-4">
                        <Card className='team-card'>
                            <Card.Img variant="top" src={mb3} />
                            <Card.Body>
                                <Card.Title className="text-primary">Membre de l'équipe</Card.Title>
                                <Card.Text className="text-muted">
                                Gynécologie obstétrique : Santé reproductive des femmes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="row gx-5">
    <div className="col-md-4 mb-4">
        <Card className='team-card'>
            <Card.Img variant="top" src={mb4} />
            <Card.Body>
                <Card.Title className="text-primary">Membre de l'équipe</Card.Title>
                <Card.Text className="text-muted">
                Cardiologie : Santé du cœur et des vaisseaux sanguins.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    <div className="col-md-4 mb-4">
        <Card className='team-card'>
            <Card.Img variant="top" src={mb5} />
            <Card.Body>
                <Card.Title className="text-primary">Membre de l'équipe</Card.Title>
                <Card.Text className="text-muted">
                Dermatologie : Santé de la peau, des cheveux et des ongles.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    <div className="col-md-4 mb-4">
        <Card className='team-card'>
            <Card.Img variant="top" src={mb6} />
            <Card.Body>
                <Card.Title className="text-primary">Membre de l'équipe</Card.Title>
                <Card.Text className="text-muted">
                Orthopédie : Affections musculo-squelettiques et chirurgie orthopédique.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
</div>

                </div>
            </div>

            <Footer />
            <ButtonBar />
        </div>
    )
}

export default About;
