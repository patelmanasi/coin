import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">     
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>Ambitious Front End  Developer, a self-led learner and team player  <br></br>
                                with one month of experience in web developement.
                            </p>
                            <p className='slide-in-bottom'>
                                Currently looking for new opportunities in industry and willing<br></br>
                                to work on challenging and diverse projects with the latest technologies.
                            </p>
                            <p className='slide-in-bottom'>
                                Previously worked as Front End Developer web developer.<br></br>
                                The technology I've worked on : <span className="text-red ls-2"> <br></br>
                                Html, Css, Js, React JS, Bootstrap </span>
                            </p>
                            <p className='slide-in-bottom'>
                                Currently Learning React Js Library
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/about.jpeg"  height="60%" width="60%" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About