/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */


import './styleOfNewBlog.css';

import img6 from '../../images/blog/post-1.jpg';
import img7 from '../../images/blog/post-2.jpg';
import img8 from '../../images/blog/post-3.jpg';

export default function NewBlog(){

    return(
        <section className="news">
        <div className="list">
          <div className="col4">
            <img src={img6} alt="" width="100%" height="outo" draggable="false"></img>
            <p>January 15, 2018</p>
            <a href="">
              <h4>How These Different Book Covers Reflect the Design</h4>
            </a>
            <a className="mor" href="" >Read More</a>
          </div>
          <div className="col4">
            <img src={img7} alt="" width="100%" height="outo" draggable="false"></img>
            <p>January 15, 2018</p>
            <a href="">
              <h4>How These Different Book Covers Reflect the Design</h4>
            </a>
            <a className="mor" href="" >Read More</a>
          </div>
          <div className="col4">
            <img src={img8} alt="" width="100%" height="outo" draggable="false"></img>
            <p>January 15, 2018</p>
            <a href="">
              <h4>How These Different Book Covers Reflect the Design</h4>
            </a>
            <a className="mor" href="" >Read More</a>
          </div>
        </div>
      </section>
    );
}