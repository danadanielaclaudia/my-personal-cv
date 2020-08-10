import React from 'react';

export default function ImageContainer({ url }) {
    return (
        <div className="image-container col-4">
            <img className="col-md-12 d-flex justify-content-center mb-5" src={url} alt="photos" />
        </div>

    );
  }