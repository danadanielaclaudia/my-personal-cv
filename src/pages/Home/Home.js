import React from 'react';
import './Home.css';

function Home() {
    return (
        <div>

            <div className="container-loader">
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img src="assets/images/HomeImage.jpg" className="img-fluid" alt="Responsive" />
            </div>
            <div className="container-loader1">
                <div className="loader1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="about-container">
                <div className="my-0 mr-md-auto about">
                    <h1>i do a bit of everything</h1>
                    <p>I am an architect to be. A prospective DevOp. An artist in drawing. A dreamer. A life-long student. I am from Cluj. I count my age in experiences not in years. And I will be more experiences yet to come.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;