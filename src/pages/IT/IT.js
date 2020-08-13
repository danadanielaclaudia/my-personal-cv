import React from 'react';
import './IT.css';
import ImageGallery from 'react-image-gallery';
import { Card } from 'react-bootstrap';


const imagesProject1 = [
    {
        original: 'assets/images/It/it-card.jpg',
        thumbnail: 'assets/images/It/it-card.jpg',
    },
];

const imagesProject2 = [
    {
        original: 'assets/images/It/it-card.jpg',
        thumbnail: 'assets/images/It/it-card.jpg',
    },
];

const imagesProject3 = [
    {
        original: 'assets/images/It/it-card.jpg',
        thumbnail: 'assets/images/It/it-card.jpg',
    },
];
class IT extends React.Component {
    componentDidMount() {
        document.body.classList.add('body-it');
      }
    
      componentWillUnmount() {
        document.body.classList.remove('body-it');
      }
    render() {
        return (
            <>
                <div className="archi-it-title">
                    <h1>IT Portfolio</h1>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-lg-4 col-md-6 card-holder">
                            <Card>
                                <ImageGallery items={imagesProject1} showPlayButton={false} />
                                <Card.Body>
                                    <Card.Title>Project 1</Card.Title>
                                    <Card.Text>
                                        <p>Description for Project 1</p>
                                        <a href="https://github.com/danadanielaclaudia" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-12 col-lg-4 col-md-6 card-holder">
                            <Card>
                                <ImageGallery items={imagesProject2} showPlayButton={false} />
                                <Card.Body>
                                    <Card.Title>Project 1</Card.Title>
                                    <Card.Text>
                                        <p>Description for Project 1</p>
                                        <a href="https://github.com/danadanielaclaudia" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-12 col-lg-4 col-md-6 card-holder">
                            <Card>
                                <ImageGallery items={imagesProject3} showPlayButton={false} />
                                <Card.Body>
                                    <Card.Title>Project 1</Card.Title>
                                    <Card.Text>
                                        <p>Description for Project 1</p>
                                        <a href="https://github.com/danadanielaclaudia" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default IT;


