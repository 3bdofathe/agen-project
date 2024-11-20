
import './styleOfPricing.css';
import Header from '../../component/header/Header';
import Pricing from '../../component/pricing/pricing';
import WithUs from '../../component/withUs/withUs';
import Footer from '../../component/footer/footer';

export default function PricingSection(){
    return(
        <div>
            <div className='head'>
                <Header />
                <h1>Our Pricing</h1>
            </div>
            <Pricing />

            <WithUs />

            <Footer />
        </div>
    );
}