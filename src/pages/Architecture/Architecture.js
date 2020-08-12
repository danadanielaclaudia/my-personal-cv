import React from 'react';
import './Architecture.css';
import ImageGallery from 'react-image-gallery';
import { Card } from 'react-bootstrap';

const images = [
  {
    original: 'assets/images/Architecture/Casa Chinteni/1.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/1.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/2.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/2.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/3.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/3.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/4.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/4.jpg',
  },

];

class Architecture extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">

            <div className="col-12 col-lg-4 col-md-6 card-holder">
              <Card>
                <ImageGallery items={images} showPlayButton={false} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 col-md-6 card-holder">
              <Card>
                <ImageGallery items={images} showPlayButton={false} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 col-md-6 card-holder">
              <Card>
                <ImageGallery items={images} showPlayButton={false} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
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

export default Architecture;

