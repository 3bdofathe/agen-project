
import './styleOfServices.css';


export default function NewServices(){
    return(
        <div className="ser1">
                <div className="s1" style={{backgroundColor: '#07085d'}}>
                    <div className="icon">
                        <i style={{color: 'white'}} class="fa-solid fa-house"></i>
                    </div>
                    <h3 style={{color: 'white'}}>Design</h3>
                    <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
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
    );
}