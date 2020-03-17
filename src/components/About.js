import React from 'react'
import icon from '../img/SitePics/icon.png'
import about from '../img/SitePics/about.jpg'
import '../styles/about.css'
import { Row, Col, Jumbotron, Container } from 'react-bootstrap'
import E1 from '../img/SitePics/Elevatorbg.png'
import E2 from '../img/SitePics/experience.jpg'


const About = () => {
    return (



	


        <div className="container text-center">
          
		  <Jumbotron fluid className="jumbotron" style={{backgroundImage: `url(${E1}`}}>
			<Container>
			 
				<h1>About UEC</h1>
				
			</Container>
		</Jumbotron>


          
        <div  id="caption">
			<h3 className="m-0" align="text-center" >
				<img className="mr-2" src={icon} width="50px" length="50px"  alt="left"/>Let Us Help You Design The Perfect Elevator Cab For Your Property!
            </h3>
        </div>

{/* <!--- Two Column Section (About Section) --> */}
<div className="container-fluid padding" id="about" >
	<Row className="row">
        <Col md={6} >
          <h2 className="textTitle">If You Can Dream It, We Can Build It!</h2>
            <p className="build"><b>"Build it, Build it, Build it!"</b></p>
            <p className="textGraph">Universal Elevator Cabs have the cost effective solution for all types of <br/>
            elevator cabs, new construction or remodeling. Our product line includes all types and configurations <br/>
              of elevator cabs from service cabs to standard passenger cabs as well as custom elevators cabs. <br/>
              We serve the elevator industry. </p>
        </Col>

		<Col md={6}>
			<img src={about} className="img-fluid"   alt="tipp"/>
		</Col>
	</Row>
</div>

{/* <!--------------(Experience Section) --> */}
<div className="container-fluid padding" id="about">
	<Row>
		<Col md={6} className="order-2 order-md-1">
			<img src={ E2 } className="img-fluid"  alt="right"/>
		</Col>
		<Col md={6} className="order-1 order-md-2">
			<h2 className="textTitle">See Our 16 Years Experience</h2>
      <p className="textGraph">UEC Is Specialized In Designing, Fabrication And Installing High <br/>
		 Quality Elevator Cabs! Does Your Cab Or Elevator Need An Upgrade? <br/>
		 Check Out Our Stunning Work, Satisfying Clients Is What UEC Is Known For, We Take Pride In What We <br/>
		 Do And We Take Joy In A Satisfied Customer.</p>
		
				
		</Col>
	</Row>
</div>












        </div>
    )
}

export default About