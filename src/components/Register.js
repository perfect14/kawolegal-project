import React from 'react'
import img1 from '../images/img1.png'

function Register() {
    return (
        <div>
            <div class="header">
                <img class="logo" src={img1}  width="100px" height="70px" />
                    <ul class="nav nav-pills link">
                        <li role="presentation"><a href="kawo.html">Home</a></li>
                        <li role="presentation"><a href="startup.html">Startup</a></li>
                        <li role="presentation" class="active"><a href="#">Register</a></li>
                        <li role="presentation"><a href="login.html">Login</a></li>

                    </ul>
		    </div>
                <h3>Join Kawolegal.Sign up to get your Startup listed now!</h3>

                <form>
                    <div class="form-group file">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
			         </div>
                        <div class="form-group file">
                            <label for="exampleInputPassword1">Email Address</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
			            </div>
                            <div class="form-group file">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
			                </div>
                                <div class="form-group file">
                                    <label for="exampleInputPassword1"> Confirm Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
			                    </div>




                                    <button type="submit" class="btn btn-default submit">Sign up</button>
                </form>


                                <div class="footer">
                                    <p class="copyright">
                                        &copy; 2019 Pizzamania All Rights Reserved!
				                    </p>
                                </div>



                            </div>
                            )
                        }
                        
                        
                        export default Register;
