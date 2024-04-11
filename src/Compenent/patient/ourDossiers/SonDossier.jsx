import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../Home/Style.css";
import TopPA from '../principale/top/TopPA';

const SonDossier = () => {
  return (
    <>
 <TopPA/>
    <div className="Card1">
        <Card style={{ width: '18rem' , display: "flex" }}>
      <Card.Header>Dossier 1 </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> NomDossier</ListGroup.Item>
        <ListGroup.Item>  Date dossier</ListGroup.Item>
        <ListGroup.Item> Ordonnance</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Header> Dossier 2</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> NomDossier</ListGroup.Item>
        <ListGroup.Item>  Date dossier</ListGroup.Item>
        <ListGroup.Item> Ordonnance</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Header> Dossier 3</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> NomDossier</ListGroup.Item>
        <ListGroup.Item>  Date dossier</ListGroup.Item>
        <ListGroup.Item> Ordonnance</ListGroup.Item>
      </ListGroup>
    </Card>
    </div></>
  )
}

export default SonDossier
