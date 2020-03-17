import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import E1 from '../img/SitePics/Elevatorbg.png'
import { NavLink, withRouter } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
    return (
      <Jumbotron className="container">
       

				<div id="slides" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img id="main" src={E1} />
								<div className="carousel-caption">
									<h1>Universal Elevator Cabs Inc.</h1>
									<h3>"Our Unlimited Designs And Unrivaled Quality Is Extraordinary"</h3>
									<a className="btn" role="button"><NavLink className="linkBtn" to="/Portfolio">Gallery</NavLink></a>
								</div>
							</div>		
					</div>
				</div>

      
    </Jumbotron>
    )
}

export default Home