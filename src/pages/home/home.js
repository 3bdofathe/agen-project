/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */

import "./homeOfStyle.css";
import Header from "../../component/header/Header";
import NewServices from "../../component/newServices/services";
import Useservices from "../../component/CurrentServices/useServices";
import OurTeam from "../../component/ourTeam/OurTeam";
import WithUs from "../../component/withUs/withUs";
import Pricing from "../../component/pricing/pricing";
import NewBlog from "../../component/newBlog/newBlog";
import Footer from "../../component/footer/footer";


// import images
import img1 from '../../images/project/project-1.jpg';
import img2 from '../../images/project/project-4.jpg';
import img3 from '../../images/project/project-2.jpg';
import img4 from '../../images/project/project-3.jpg';
import img5 from '../../images/project/project-5.jpg';




export default function Home() {
  return (
    <div className="contan">


      {/* start a header section */}
      <div className="head">
        <Header />
        <div className="txt">
          <h1>Creative Agency</h1>
        </div>
      </div>
      {/* end a header */}


      {/* start a services */}
      <section className="services" id="services">
        <div className="ser">
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Line />
        </div>
        {/* <NewServices /> */}
        <NewServices />
        {/* import new services */}
        <Useservices />
      </section>
      {/* end section services */}


      {/* start a section about */}
      <OurTeam />
      {/* end a section about */}


      {/* start a section who */}
      <section className="who" id="who">
        <div className="txt">
          <h1>Who We Are</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a href="">Read More</a>
        </div>
      </section>
      {/* end a section who */}


      {/* start a section eork */}
      <section className="work" id="work">
        <div className="work1">
          <h1>Our Feature Works</h1>
          <Underline />
        </div>
        <div className="work2">
          <div className="col2 co1">
            <div className="ig1 tilt" id="ig1">
              <img src={img1} alt="" width="100%" height="outo"></img>
              <div className="hidd" >
                <h4 style={{fontWeight: 'bold', cursor: 'pointer'}}>Project title</h4>
                <a href=""><i class="fa-solid fa-link"></i></a>
              </div>
            </div>
            <div className="ig1 tilt">
              <img src={img2} alt="" width="100%" height="outo"></img>
              <div className="hidd" >
                <h4 style={{fontWeight: 'bold', cursor: 'pointer'}}>Project title</h4>
                <a href=""><i class="fa-solid fa-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col2 co2">
            <div className="ig1 tilt">
              <img src={img3} alt="" width="100%" height="outo"></img>
              <div className="hidd" style={{top: '80%'}}>
                <h4 style={{fontWeight: 'bold', cursor: 'pointer'}}>Project title</h4>
                <a href=""><i class="fa-solid fa-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col2 co3">
          <div className="ig1 tilt">
              <img src={img4} alt="" width="100%" height="outo"></img>
              <div className="hidd">
                <h4 style={{fontWeight: 'bold', cursor: 'pointer'}}>Project title</h4>
                <a href=""><i class="fa-solid fa-link"></i></a>
              </div>
            </div>
            <div className="ig1 tilt">
              <img src={img5} alt="" width="100%" height="outo"></img>
              <div className="hidd">
                <h4 style={{fontWeight: 'bold', cursor: 'pointer'}}>Project title</h4>
                <a href=""><i class="fa-solid fa-link"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end a section work */}


      {/* start a section withUs */}
      <WithUs />
      {/* end a section withUs */}


      {/* start a section pricing */}
      <Pricing />
      {/* start a section pricing */}


      {/* start a section news  */}
      
      <div className="hhh" style={{marginBottom: '50px'}}>
        <h1>Latest News</h1>
        <Underline />
      </div>
      <NewBlog />
      {/* end a section news  */}


      <div style={{marginTop: '100px'}}></div>

      {/* start a section footer */}
      <Footer />
      {/* end a section footer */}


    </div>
  );
}

// insert a line
function Line() {
  return <hr></hr>;
}
function Underline() {
  return <div className="under"></div>;
}
