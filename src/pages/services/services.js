

import './styleOfServices.css';
// import component
import Header from '../../component/header/Header';
import Useservices from '../../component/CurrentServices/useServices';
import WithUs from '../../component/withUs/withUs';
import Footer from '../../component/footer/footer';

export default function Services(){
    return(
        <div>
            <div className='head'>
                <Header />
                <h1>Our Services</h1>
            </div>
            <div className="ser1">
                <div className="s1">
                    <div className="icon">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <h3>Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                </div>
                <div className="s1 s2">
                    <div className="icon">
                        <i class="fa-solid fa-laptop"></i>
                    </div>
                    <h3>Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                </div>
                <div className="s1 s2">
                    <div className="icon">
                        <i class="fa-solid fa-bullhorn"></i>
                    </div>
                    <h3>Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                </div>
            </div>
            <div className="ser1" style={{marginTop:'-50px'}}>
                <div className="s1">
                    <div className="icon">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <h3>Apps</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                </div>
                <div className="s1 s2">
                    <div className="icon">
                        <i class="fa-solid fa-laptop"></i>
                    </div>
                    <h3>Branding</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                </div>
                <div className="s1 s2">
                    <div className="icon">
                        <i class="fa-solid fa-bullhorn"></i>
                    </div>
                    <h3>Analytics</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                </div>
            </div>

            {/* start a service */}
            <Useservices />

            {/* start with us */}
            <WithUs />

            {/* start a footer  */}
            <Footer />

        </div>
    );
}