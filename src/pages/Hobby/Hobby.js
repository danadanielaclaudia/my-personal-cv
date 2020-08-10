import React, { Component } from 'react';
import ImageContainer from '../../components/ImageContainer';
import * as imageService from '../../services/images';
import './Hobby.css';


class Hobby extends Component {
    state = {
        images: [],
        loading: true

    };

    componentDidMount() {
          document.body.classList.add('body-hobby');
            this.getImages();
    }
    
    componentWillUnmount(){
          document.body.classList.remove('body-hobby');
    }
    
      getImages() {
        this.setState({loading: true}, () => {
          imageService.getImages().then(([images]) => {
            this.setState({
              images
            });
          });
        });
      }
    
      renderImageList() {
        //   alert(this.state);
        const { images } = this.state;

            return images.map((imageItem) => {
                return <ImageContainer url={imageItem.download_url} />;
              });
        
        
      }
    
      render() {
    
        return (
          <section className="row body">
            {this.renderImageList()}
          </section>
        );
      }
    }
    
    export default Hobby;
    
