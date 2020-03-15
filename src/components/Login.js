import React from 'react'
import img1 from '../images/img1.png'

function Login() {
    return (
        <div>
            <div className="header">
                <img className="logo" src={img1}  width="100px" height="70px" />
                    <ul className="nav nav-pills link">
                        <li role="presentation"><a href="kawo.html">Home</a></li>
                        <li role="presentation"><a href="startup.html">Startup</a></li>
                        <li role="presentation"><a href="Register.html">Register</a></li>
                        <li role="presentation" className="active"><a href="#">Login</a></li>

                    </ul>
		    </div>
                <h3>Already a member? Login to add your startup page</h3>

                <form>
                    <div className="form-group file">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
			        </div>
                        <div className="form-group file">
                            <label for="exampleInputPassword1">Email Address</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			            </div>





                            <button type="submit" className="btn btn-default submit">Sign up</button>
                </form>

                        <div className="footer">
                            <p className="copyright">
                                &copy; 2019 Pizzamania All Rights Reserved!
				            </p>
                        </div>



                    </div>
                    )
                }
                
                
export default Login;