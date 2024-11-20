
import './styleOfUseServices.css';
import ph1 from '../../images/feature.jpg';


export default function Useservices(){
    return(
        <div className="ser2">
                <div className="imag1">
                    <img src={ph1} alt="" draggable="false"></img>
                </div>
                <div className="txt">
                    <h1>We know What Bait to Use</h1>
                    <div className="line"></div>
                    <div className="use">
                        <div className="use1">
                            <div className="user">
                                <div className="user1">
                                    <i class="fa-solid fa-user-secret"></i>
                                </div>
                                <div className="user1">
                                    <h3>User Experience</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                                </div>
                            </div>
                        </div>
                        <div className="use1">
                            <div className="user">
                                <div className="user1">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </div>
                                <div className="user1">
                                    <h3>Responsive Layout</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="use" style={{marginTop: '40px'}}>
                        <div className="use1">
                            <div className="user">
                                <div className="user1">
                                    <i class="fa-solid fa-headphones"></i>
                                </div>
                                <div className="user1">
                                    <h3>Digital Solutions</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                                </div>
                            </div>
                        </div>
                        <div className="use1">
                            <div className="user">
                                <div className="user1">
                                    <i class="fa-brands fa-bootstrap"></i>
                                </div>
                                <div className="user1">
                                    <h3>Bootstrap 4x</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    );
}