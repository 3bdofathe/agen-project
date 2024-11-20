/* eslint-disable react/style-prop-object */

import "./styleOfAboutAgent.css";

import Header from "../../component/header/Header";
import OurTeam from "../../component/ourTeam/OurTeam";
import WithUs from "../../component/withUs/withUs";
import Footer from "../../component/footer/footer";

import ph1 from "../../images/about/about-us.png";
import ph2 from "../../images/about/Screenshot 2024-11-12 154907.png";
import ph3 from "../../images/testimonial/user-1.jpg"
import ph4 from "../../images/team/member-1.jpg"
import ph5 from "../../images/team/member-2.jpg"

export default function AboutAgent() {
  // eslint-disable-next-line no-undef, no-unused-vars
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  return (
    <div>
      <div className="head">
        <Header />
        <h1>About Agen</h1>
      </div>
      <div className="agen">
        <div className="agen1">
          <img src={ph1} alt="" width="100%" height="outo"></img>
        </div>
        <div className="agen2">
          <img src={ph2} alt="" width="100%" height="outo"></img>
        </div>
      </div>

      <OurTeam />

      <section class="con">
        <div class="testimonial mySwiper">
          <div class="testi-content swiper-wrapper">
            <div class="slide swiper-slide">
              <img src={ph5} alt="" class="image" />
              <h1 style={{color: 'white', fontSize: '2rem', fontWeight:'700'}}>Mellissa Christine</h1>
              <p style={{color: 'white', fontSize: '1.2rem', fontWeight:'500'}}>
              “Great work I got a lot more than what I ordered, they are very legítimas and catchy. I went for one of them for my brand but is always better to have more options.”
              </p>
              <i class="bx bxs-quote-alt-left quote-icon"></i>
              <div class="details">
                <span class="name">Marnie Lotter</span>
                <span class="job">Web Developer</span>
              </div>
            </div>
            <div class="slide swiper-slide">
              <img src={ph4} alt="" class="image" />
              <h1 style={{color: 'white', fontSize: '2rem', fontWeight:'700'}}>Mellissa Christine</h1>
              <p style={{color: 'white', fontSize: '1.2rem', fontWeight:'500'}}>
              “Great work I got a lot more than what I ordered, they are very legítimas and catchy. I went for one of them for my brand but is always better to have more options.”
              </p>
              <i class="bx bxs-quote-alt-left quote-icon"></i>
              <div class="details">
                <span class="name">Marnie Lotter</span>
                <span class="job">Web Developer</span>
              </div>
            </div>
            <div class="slide swiper-slide">
              <img src={ph3} alt="" class="image" />
              <h1 style={{color: 'white', fontSize: '2rem', fontWeight:'700'}}>Mellissa Christine</h1>
              <p style={{color: 'white', fontSize: '1.2rem', fontWeight:'500'}}>
              “Great work I got a lot more than what I ordered, they are very legítimas and catchy. I went for one of them for my brand but is always better to have more options.”
              </p>
              <i class="bx bxs-quote-alt-left quote-icon"></i>
              <div class="details">
                <span class="name">Marnie Lotter</span>
                <span class="job">Web Developer</span>
              </div>
            </div>
          </div>
          <div class="swiper-button-next nav-btn"></div>
          <div class="swiper-button-prev nav-btn"></div>
          <div class="swiper-pagination"></div>
        </div>


        
      </section>

      <WithUs />
      <Footer />
    </div>
  );
}
