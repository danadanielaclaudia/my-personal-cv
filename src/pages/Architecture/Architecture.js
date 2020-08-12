import React from 'react';
import './Architecture.css';
import ImageGallery from 'react-image-gallery';
import { Card } from 'react-bootstrap';

const imagesChinteni = [
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
  {
    original: 'assets/images/Architecture/Casa Chinteni/5.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/5.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/6.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/6.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/7.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/7.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/8.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/8.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/9.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/9.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/10.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/10.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/11.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/11.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/12.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/12.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/13.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/13.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/FATADA1.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/FATADA1.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/FATADA2.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/FATADA2.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/FATADA3.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/FATADA3.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/FATADA4.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/FATADA4.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/PLAN AMENAJARI.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/PLAN AMENAJARI.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/PLAN DEMISOL.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/PLAN DEMISOL.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/PLAN PARTER.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/PLAN PARTER.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/PLAN ETAJ.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/PLAN ETAJ.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/PLAN INVELITOARE.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/PLAN INVELITOARE.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/PLAN ORG EXECUTIE.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/PLAN ORG EXECUTIE.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/SECTIUNE A-A.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/SECTIUNE A-A.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Chinteni/SECTIUNE B-B.jpg',
    thumbnail: 'assets/images/Architecture/Casa Chinteni/SECTIUNE B-B.jpg',
  },
];

const imagesFinisel = [
  {
    original: 'assets/images/Architecture/Casa Finisel/randare11.jpg',
    thumbnail: 'assets/images/Architecture/Casa Finisel/randare11.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Finisel/randare22.jpg',
    thumbnail: 'assets/images/Architecture/Casa Finisel/randare22.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Finisel/randare33.jpg',
    thumbnail: 'assets/images/Architecture/Casa Finisel/randare33.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Finisel/Plan parter.jpg',
    thumbnail: 'assets/images/Architecture/Casa Finisel/Plan parter.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Finisel/Plan etaj.jpg',
    thumbnail: 'assets/images/Architecture/Casa Finisel/Plan etaj.jpg',
  },
];

const imagesPata = [
  {
    original: 'assets/images/Architecture/Casa Pata/fatada1-2.jpg',
    thumbnail: 'assets/images/Architecture/Casa Pata/fatada1-2.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Pata/fatada 3-4.jpg',
    thumbnail: 'assets/images/Architecture/Casa Pata/fatada 3-4.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Pata/plan subsol.jpg',
    thumbnail: 'assets/images/Architecture/Casa Pata/plan subsol.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Pata/plan parter.jpg',
    thumbnail: 'assets/images/Architecture/Casa Pata/plan parter.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Pata/plan invelitoare.jpg',
    thumbnail: 'assets/images/Architecture/Casa Pata/plan invelitoare.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Pata/sectiune.jpg',
    thumbnail: 'assets/images/Architecture/Casa Pata/sectiune.jpg',
  },
];

const imagesRandari = [
  {
    original: 'assets/images/Architecture/Casa randari/1.jpg',
    thumbnail: 'assets/images/Architecture/Casa randari/1.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa randari/2.jpg',
    thumbnail: 'assets/images/Architecture/Casa randari/2.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa randari/3.jpg',
    thumbnail: 'assets/images/Architecture/Casa randari/3.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa randari/4.jpg',
    thumbnail: 'assets/images/Architecture/Casa randari/4.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa randari/5.jpg',
    thumbnail: 'assets/images/Architecture/Casa randari/5.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa randari/6.jpg',
    thumbnail: 'assets/images/Architecture/Casa randari/6.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa randari/7.jpg',
    thumbnail: 'assets/images/Architecture/Casa randari/7.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa randari/9.jpg',
    thumbnail: 'assets/images/Architecture/Casa randari/9.jpg',
  },
];

const imagesSimionescu = [
  {
    original: 'assets/images/Architecture/Casa Simionescu Fatade/nord est.jpg',
    thumbnail: 'assets/images/Architecture/Casa Simionescu Fatade/nord est.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Simionescu Fatade/nord vest.jpg',
    thumbnail: 'assets/images/Architecture/Casa Simionescu Fatade/nord vest.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Simionescu Fatade/sud est.jpg',
    thumbnail: 'assets/images/Architecture/Casa Simionescu Fatade/sud est.jpg',
  },
  {
    original: 'assets/images/Architecture/Casa Simionescu Fatade/sud vest.jpg',
    thumbnail: 'assets/images/Architecture/Casa Simionescu Fatade/sud vest.jpg',
  },
];

const imagesReleveu = [
  {
    original: 'assets/images/Architecture/Releveu/A Vlaicu.jpg',
    thumbnail: 'assets/images/Architecture/Releveu/A Vlaicu.jpg',
  },
  {
    original: 'assets/images/Architecture/Releveu/Dambovitei.jpg',
    thumbnail: 'assets/images/Architecture/Releveu/Dambovitei.jpg',
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
                <ImageGallery items={imagesChinteni} showPlayButton={false} />
                <Card.Body>
                  <Card.Title>Casa Chinteni</Card.Title>
                  <Card.Text>
                    Casa unifamiliala D+P+1E
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 col-md-6 card-holder">
              <Card>
                <ImageGallery items={imagesFinisel} showPlayButton={false} />
                <Card.Body>
                  <Card.Title>Casa Finisel</Card.Title>
                  <Card.Text>
                  Casa unifamiliala P+M
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 col-md-6 card-holder">
              <Card>
                <ImageGallery items={imagesPata} showPlayButton={false} />
                <Card.Body>
                  <Card.Title>Casa Pata</Card.Title>
                  <Card.Text>
                  Casa unifamiliala D+P
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 col-md-6 card-holder">
              <Card>
                <ImageGallery items={imagesRandari} showPlayButton={false} />
                <Card.Body>
                  <Card.Title>Casa Luna</Card.Title>
                  <Card.Text>
                  Casa unifamiliala P
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 col-md-6 card-holder">
              <Card>
                <ImageGallery items={imagesSimionescu} showPlayButton={false} />
                <Card.Body>
                  <Card.Title>Casa Simionescu</Card.Title>
                  <Card.Text>
                  Fatade
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 col-md-6 card-holder">
              <Card>
                <ImageGallery items={imagesReleveu} showPlayButton={false} />
                <Card.Body>
                  <Card.Title>Releveu</Card.Title>
                  <Card.Text>
                  Spatii
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

