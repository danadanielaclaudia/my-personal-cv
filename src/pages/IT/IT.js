import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './IT.css';

function IT() {
    return (

        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Architecture Projects
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                   IT Projects
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default IT;

