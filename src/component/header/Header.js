/* eslint-disable jsx-a11y/anchor-is-valid */


import { Link } from 'react-router-dom';

import './styleOfHeader.css';

export default function Header(){
    return(
        <nav class="navbar navbar-expand-lg" id="headerElement">
            <div class="container">
              <a className="navbar-brand" href="#">
                Agen
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    {/* <a class="nav-link" aria-current="page" href="#">
                      Home
                    </a> */}
                    <Link className='nav-link' to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link className='nav-link' to="/About">About</Link>
                  </li>
                  <li class="nav-item">
                    <Link className='nav-link' to="/Services">Services</Link>
                  </li>
                  <li class="nav-item">
                    <Link className='nav-link' to="/Blog">Blog</Link>
                  </li>
                  <li class="nav-item">
                    <Link className='nav-link' to="/Pricing">Pricing</Link>
                  </li>
                  <li class="nav-item">
                    <Link className='nav-link' to="/FAQ">FAQ'S</Link>
                  </li>
                  <li class="nav-item">
                    <Link className='nav-link' to="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
}