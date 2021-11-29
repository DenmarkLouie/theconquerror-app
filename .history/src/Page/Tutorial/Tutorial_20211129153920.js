import React, { Component  } from "react";
import { Helmet } from "react-helmet";
import { Row, Container, Col } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import './frame.css'

class Tutorial extends Component {
    render(){
        return (
        <>
                <div>
                    <Helmet>
                        <title>ConquError | Tutorial</title>
                        <meta name="description" content="ConquError Register page" />
                    </Helmet>
                </div> 

                <Navbar/>

                <section className="features section bg-light mt-4">

                    <Container>
                                <div className='box'>
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>

                        <div>
                            <div className="col-sm-12 col-md-12 mb-4">
                                    <h1 className="text-center text-primary fw-bold">Welcome to Tutorial Page</h1>                                   
                            </div>  
                        </div>
                        
                         <Container fluid="md" style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
  
  <section className="about_area section_gap">
		<div className="container">
			<div className="row justify-content-start align-items-center">
				<div className="col-lg-5">
					<div className="about_img">
						<img className="" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Annie Spratt unsplash.com/photos/MChSQHxGZrQ"/>
					</div>
				</div>

				<div className="offset-lg-1 col-lg-5">
					<div className="main_title text-left">
						<h2>let’s <br/>
							Learn together <br/>
							myself</h2>
						<p>
							Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven 
							midst their. Beast creepeth. Fish days.
						</p>
						<p>
							Is give may shall likeness made yielding spirit a itself together created after sea 
							is in beast beginning signs open god you're gathering whose gathered cattle let. 
							Creature whales fruit unto meat the life beginning all in under give two.
						</p>
						<a className="primary_btn" href="#"><span>Download CV</span></a>
					</div>
				</div>
			</div>
		</div>
	</section>
                            </Container>

                    </Container>

                          
            </section>            

        </>
    )
    }
    
}

export default Tutorial
