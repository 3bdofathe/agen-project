/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import './styleOfFooter.css';

export default function Footer(){

    const [form , setForm] = useState(
        {
          name: "",
          email: "",
          message: ""
        }
      );
    
    const DisableBtn = form.name === "" || form.email === "" || form.message === "";
    
    return(
        <section className="footer" id="footer">
        <div className="foot">
          <div className="foot1">
            <div className="foo">
              <div className="foo1">
                <h4>About</h4>
                <a href="">Services</a>
                <a href="">Contact</a>
                <a href="">About Us</a>
                <a href="">Blog</a>
                <a href="">Supportx</a>
              </div>
              <div className="foo1">
                <h4>Company</h4>
                <a href="">Services</a>
                <a href="">Contact</a>
                <a href="">About Us</a>
                <a href="">Blog</a>
                <a href="">Supportx</a>
              </div>
            </div>
          </div>
          <div className="foot2">
            <form method="post" action="#">
              <h4>Contact us</h4>

              <input value={form.name} onChange={(event) =>{
                setForm({...form, name:event.target.value});
              }} type="text" name="text" placeholder="Full name" required></input>

              <input value={form.email} onChange={(event) =>{
                setForm({...form, email:event.target.value});
              }} type="email" name="email" placeholder="Email address" required></input>

              <textarea value={form.message} onChange={(event) =>{
                setForm({...form, message:event.target.value});
              }} name="mess" placeholder="Message" rows="5"></textarea>

              <button id="sub" className={DisableBtn ? 'disable' : ""} >Send</button>

            </form>
          </div>
        </div>
        <hr></hr>
        <div className="info">
          <div className="info1">
            <h4>Craeted by Eng / <span style={{color: '#e0434f', cursor: 'pointer'}}>Abelrahim Fathe</span></h4>
          </div>
          <div className="info2">
            <a href="https://www.facebook.com/abdelrehem.fathe?mibextid=ZbWKwL" target="blank"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/abdofathy_22/profilecard/?igsh=anNvM3R1MGU1YXMx" target="blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2F3bdofathy7%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2vnHQGzDPEx2sDlhSbaE-rPIp6Xl-pavNMwXyLjHtgs6tovsv5MR8G-Is_aem_LTE-EtH-oop2MdMY96HJMg&h=AT1N2M7HeIg4exfUHcN59M3LGoKuRRTD0cIphXUqI1aM5ZH9MPNU_oHphvCsKkZYBbPd0Uc0PIvPn8gqQhZ4tR3c1MtijacpGGIz7xP_-TNNtv1h0b_vf5HRz34TJPouY18e" target="blank"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://github.com/3bdofathe" target="blank"><i class="fa-brands fa-github"></i></a>
            <a href="www.linkedin.com/in/abdelrahim-fathy-376736215" target="blank"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </section>
    );
}