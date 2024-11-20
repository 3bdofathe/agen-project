/* eslint-disable jsx-a11y/iframe-has-title */


import './styleOfContact.css';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/footer';

export default function ContactUs(){



    return(
        <div>
            <div className="head" style={{marginBottom: '7px'}}>
                <Header />
                <h1>Contact US</h1>
            </div>

            <div class="mapswrapper"><iframe width="100%" loading="lazy" 
            allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=New%20York&zoom=11&maptype=satellite">
            </iframe>
            <a href="https://fnfmods.net/week-8/">Week 8</a>
            </div>

            <Footer />
            
        </div>
    );
}