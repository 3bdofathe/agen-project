/* eslint-disable react/jsx-no-undef */
import img1 from "../../images/team/member-1.jpg";
import img2 from "../../images/team/member-3.jpg";
import img3 from "../../images/team/member-2.jpg";
import img4 from "../../images/team/member-3.jpg"; 

import './styleOfTeam.css';

export default function OurTeam(){
    return(
        <section className="about" id="about">
        <div className="our">
          <h1>Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <Underline />
        <div className="img">
          <div class="col1">
            <img src={img1} alt="" width="100%" height="outo"></img>
            <h4>Sara Adams</h4>
            <p>Designer</p>
          </div>
          <div class="col1">
            <img src={img2} alt="" width="100%" height="outo"></img>
            <h4>Sara Adams</h4>
            <p>Designer</p>
          </div>
          <div class="col1">
            <img src={img3} alt="" width="100%" height="outo"></img>
            <h4>Sara Adams</h4>
            <p>Designer</p>
          </div>
          <div class="col1">
            <img src={img4} alt="" width="100%" height="outo"></img>
            <h4>Sara Adams</h4>
            <p>Designer</p>
          </div>
        </div>
      </section>
    );
}
function Underline() {
    return <div className="under"></div>;
  }
  