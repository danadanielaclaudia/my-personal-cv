import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './MyCv.css';


function MyCv() {
    return (
        <Accordion>
            <div className="body-mycv">
                <div className="row align-items-center">
                    <div className="col-12 col-md-4 photo-container">
                        <img className="circle mx-auto d-block" src="assets/images/move.gif" alt="gif" />
                        <img className="photo mx-auto d-block" src="assets/images/cv-image.jpg" alt="jpg" />
                    </div>
                    <div className="col-12 col-md-4 center">
                        <span>Curriculum Vitae</span>
                        <br></br>
                        <span>Daniela Claudia Moisa</span>
                    </div>
                </div>
                <br></br>
                <br></br>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <p className="section-title"><span><i className="fas fa-info"></i></span>personal information</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="custom-card">
                            <p>Cluj- Napoca</p>
                            <p>Tel: +40 770613999</p>
                            <p>Mail: arhmoisadaniela@gmail.com</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <p className="section-title"><span><i className="fas fa-briefcase"></i></span>work experience</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="custom-card">
                            <p>01/10/2019–Present - Architectural drafter</p>
                            <p>AMB Arhitectura si Consultanta SRL, Cluj-Napoca (Romania)</p>
                            <ul>
                                <li>Draft and prepare architectural layout drawings</li>
                                <li>Produce draft designs and diagrams from sketches</li>
                                <li>Calculate dimensions and allowances with accurate precision</li>
                                <li>Revise drawings and layouts to accommodate changes</li>
                                <li>Designed and prepared plans using computer-aided design and drafting (Archicad) software</li>
                                <li>Produced effective product designs by using an understanding of engineering and manufacturing techniques</li>
                                <li>Added structural details to architectural plans from knowledge of building techniques</li>
                                <li>Prepared multiple versions of designs for review by engineers and architects</li>
                                <li>Specified dimensions materials and procedures for new building projects or products</li>
                                <li>Drafted architectural floor plans, details, and 3D models in Archicad</li>
                                <li>Developed presentation (Lumion, Photoshop) and sales drawings based upon customer requests</li>
                            </ul>
                            <br></br>
                            <div>
                                <p>09/04/2013–01/04/2016 - Casino cashier</p>
                                <p>SC GOLDPREST IMPEX SRL, Cluj- Napoca (Romania)</p>
                                <ul>
                                    <li>Facilitate and execute customers' cage requests in accordance to state regulation and casino policy with a smile and positive attitude</li>
                                    <li>Assisted the vault supervisors with the end of day money counts and ensured proper storage of these funds in the casino vault</li>
                                    <li>Provided customer service transactions: credit card and personal checks, coupon and slot point redemption</li>
                                    <li>Identified and assessed the company goals with regards to service scores and lead team to reach these scores</li>
                                    <li>Issued gaming coins and tokens to customers, and redeemed coins and tokens for cash at customer request</li>
                                    <li>Recorded information regarding all transactions in the computer, and completed all gaming forms and reports</li>
                                    <li>Read and recorded totals shown on cash register tape and verified against cash on hand</li>
                                    <li>Received cash from customers and employees in payment for goods and services, and recorded amounts received</li>
                                    <li>Operated cash register with peripheral electronic data processing equipment, for bar coding</li>
                                </ul>
                            </div>
                            <br></br>
                            <div>
                                <p>01/02/2012–01/04/2012 - Hair stylist</p>
                                <p>Salon Beauty Style, Floresti, Cluj (Romania)</p>
                                <ul>
                                    <li>Cut, trim and shaped hair and hairpieces upon clients instructions</li>
                                    <li>Ensured store cleanliness, organization, and proper product placement</li>
                                    <li>Followed industry standards to maintain a clean and secure workplace at all times</li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        <p className="section-title"><span><i className="fas fa-graduation-cap"></i></span>education and training</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="custom-card">
                            <p>10/03/2020–10/08/2020 - Certificate in Front- End Web Development (Javascript)</p>
                            <p>The Informal School of IT, Cluj- Napoca (Romania)</p>
                            <ul>
                                <li>Web Introduction</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Javascript Advanced</li>
                                <li>Introduction to ReactJS</li>
                                <li>Interview Preparation</li>
                            </ul>
                            <br></br>
                            <div>
                                <p>01/10/2019–01/12/2019 - Intro IT</p>
                                <p>The Informal School of IT, Cluj- Napoca (Romania)</p>
                                <ul>
                                    <li>How does an application come to life?</li>
                                    <li>Must-have skills for the journey</li>
                                    <li>Can you become a developer?</li>
                                    <li>…or what about being a tester?</li>
                                    <li>Show us your skills, we show you the path</li>
                                </ul>
                            </div>
                            <br></br>
                            <div>
                                <p>01/09/2016–Present - Architecture student</p>
                                <p>Faculty of Architecture and Urbanism Cluj Napoca, Cluj Napoca (Romania)</p>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        <p className="section-title"><span><i className="fas fa-check-double"></i></span>personal skills</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="custom-card">
                            <p>Languages</p>
                            <ul>
                                <li>English</li>
                                <li>Italian</li>
                                <li>Spanish</li>
                                <li>Hungarian</li>
                            </ul>
                            <br></br>
                            <p>Communication skills</p>
                            <ul>
                                <li>Assertive listening</li>
                                <li>Understanding and forwarding information</li>
                                <li>Understanding situations on different levels: business, human, proximity, gravity</li>
                                <li>Empathy</li>
                                <li>Attention to detail</li>
                                <li>Trying to resolve problems before they arise</li>
                            </ul>
                            <br></br>
                            <div>
                                <p>Job-related skills</p>
                                <ul>
                                    <li>Motivation</li>
                                    <li>Problem solving</li>
                                    <li>Teamwork</li>
                                    <li>Time management</li>
                                    <li>Conceptualization</li>
                                    <li>Creative thinking</li>
                                </ul>
                            </div>
                            <br></br>
                            <div>
                                <p>Digital skills</p>
                                <ul>
                                    <li>Archicad</li>
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Corel Draw</li>
                                    <li>Lumion</li>
                                    <li>Office Suite</li>
                                    <li>Visual Studio Code</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>ReactJS</li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>
        </Accordion>
    );
}

export default MyCv;