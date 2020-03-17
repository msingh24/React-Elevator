import React from 'react'
import '../styles/contact.css'
import { Jumbotron, Row, Col, Container } from 'react-bootstrap'
import E1 from '../img/SitePics/Elevatorbg.png'

const Contact = () => {
    return (
     <div className="container ">

    <Jumbotron fluid className="jumbotron text-center" style={{backgroundImage: `url(${E1}`}}>
		<Container>	 
				<h1>Contact UEC</h1>
	    </Container>
	</Jumbotron>

<div className="container" id="titlepage">
  <Row>
    <Col>
		<form name="contact" method="POST" data-netlify="true">
		  <div className="form-group">
		    <label for="exampleInputEmail1">Email address</label>
		    <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email" name="_replyto" />
		    <small id="emailHelp" className="form-text text-muted">Lets Work Together!</small>
		  </div>
		  <div className="form-group">
		    <label for="subject">Subject</label>
		    <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject"/>
		  </div>
		  <div className="form-group">
		    <label for="Name">Name</label>
		    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" name="name" />
		  </div>
		    <div className="form-group">
		    <label for="exampleFormControlTextarea1">Message</label>
		    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" type="message" name="message"></textarea>
		  </div>
		  <div>
		    <input type="file" id="myfile" placeholder="Upload File" name="myfile" />
		  </div>
		  <div className="field">
		    <div data-netlify-recaptcha="true"></div>
		    </div> 
		  <button id="submit" type="submit" value="Send" className="btn btn-primary">Submit</button>
		</form>


    </Col>
    <div className="col text-center" id="contactus">
     <h1>People Trust Us.<br/>Want To Know Why?<br/>Contact Us Today!</h1>
    </div>
  </Row>
</div>




     </div>
    
    
   
    )
}

export default Contact