/* eslint-disable react/jsx-no-undef */


import './styleOfPricing.css';

export default function Pricing(){
    return(
        <section className="price" id="price">
        <div className="pri">
          <h1>Our Smart Pricing Table</h1>
          <Underline />
        </div>
        <div className="table">
          <div className="col3">
            <h3>Basic</h3>
            <span>Besic and simple website</span>
            <h1>30<span>$</span></h1>
            <p>Mobile-Optimized Website</p>
            <p>Powerful Website Metrics</p>
            <p>Free Custom Domain</p>
            <p>24/7 Customer Support</p>
            <p>Fully Integrated E-Cormmerce</p>
            <p>Sell unlimited Product</p>
            <button>Try It Now</button>
          </div>
          <div className="col3">
            <h3>Middle</h3>
            <span>Besic and simple website</span>
            <h1>40<span>$</span></h1>
            <p>Mobile-Optimized Website</p>
            <p>Powerful Website Metrics</p>
            <p>Free Custom Domain</p>
            <p>24/7 Customer Support</p>
            <p>Fully Integrated E-Cormmerce</p>
            <p>Sell unlimited Product</p>
            <button>Try It Now</button>
          </div>
          <div className="col3">
            <h3>Advanced</h3>
            <span>Besic and simple website</span>
            <h1>80<span>$</span></h1>
            <p>Mobile-Optimized Website</p>
            <p>Powerful Website Metrics</p>
            <p>Free Custom Domain</p>
            <p>24/7 Customer Support</p>
            <p>Fully Integrated E-Cormmerce</p>
            <p>Sell unlimited Product</p>
            <button>Try It Now</button>
          </div>
        </div>
      </section>
    );
}
function Underline() {
    return <div className="under"></div>;
}
  