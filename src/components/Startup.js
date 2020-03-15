import React from 'react'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'



function Startup() {
    return (
        <div>
            <div class="header">
                <img class="logo" src={img1} width="100px;" height="70px;" />
                    <ul class="nav nav-pills link">
                        <li role="presentation"><a href="kawo.html" class="tabs">Home</a></li>
                        <li role="presentation" class="active"><a href="#" class="tabs">Startups</a></li>
                        <li role="presentation"><a href="Register.html" class="tabs">Register</a></li>
                        <li role="presentation"><a href="login.html" class="tabs">Login</a></li>
                    </ul>
		    </div>

                <div class="form-group">
                    <span class="glyphicon glyphicon-search bud" aria-hidden="true"></span>
                    <input type="text" class="form-control search" placeholder="search Startup by name or industry" />
                        <button class="sea">Search</button>

                </div>



                    <div class="media">
                        <div class="media-left media-middle">
                            <a href="#" class="think">
                                <img class="media-object think " src={img4} height="200px" />
    			            </a>
  			            </div>
                            <div class="media-body">
                                <h4 class="media-heading zoom ">Think and Zoom</h4>
                                <p >Providing solutions for the visually impaired,such as mind-controlled zooming, and wearable controlled zooming</p>
                                <button>See full details</button>

                            </div>
                    </div>



                        <div class="media">
                            <div class="media-left media-middle">
                                <a href="#" class="think">
                                    <img class="media-object think " src={img3} height="200px" />
    			                </a>
  			                </div>
                                <div class="media-body">
                                    <h4 class="media-heading slate ">Slatecube</h4>
                                    <p >Providing solutions for the visually impaired,such as mind-controlled zooming, and wearable controlled zooming</p>
                                    <button>See full details</button>

                                </div>
                            </div>


                            <div class="media">
                                <div class="media-left media-middle">
                                    <a href="#" class="think">
                                        <img class="media-object think " src={img2} height="200px" width="230px" />
    			                    </a>
  			                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading sleek ">Sleekjob Academy</h4>
                                        <p >Providing solutions for the visually impaired,such as mind-controlled zooming, and wearable controlled zooming</p>
                                        <button>See full details</button>

                                    </div>
                                </div>

                                <div class="footer">
                                    <p class="copyright">
                                        &copy; 2019 Pizzamania All Rights Reserved!
        </p>
                                </div>

                            </div>
                            )
                        }
                        
                        
                        export default Startup;
