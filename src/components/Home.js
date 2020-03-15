import React from 'react'
import img1 from '../images/img1.png'
import {NavLink} from 'react-router-dom'



function Home() {
    return (
        <div>
            <div className="boxes">
                <img src={img1} width="100px" height="70px" />
                <div className="link">
                    <NavLink exact activeClassName="active" to ="/">Home</NavLink>
                    <NavLink activeClassName="active" to ="/startup">Startup</NavLink>
                    <NavLink activeClassName="active" to ="/register">Register</NavLink>
                    <NavLink activeClassName="active" to ="/login">Login</NavLink>
        
                </div>
                <div>
                    <h1>KAWOLEGAL</h1>
                    <p className="para">A collaborative ecosystem for problem</p>
                    <p className="para">solvers and support for Startups.</p>
                    <center><button>Register Now</button></center>
                </div>
                <div className="forfooter">
                </div>
                <div class="footer">
                    <p class="copyright">
                        &copy; 2019 Pizzamania All Rights Reserved!
				    </p>
                </div>
            </div>
        </div>
    )
}





export default Home;