import React from 'react'
import '../styles/services.css'
import installation from '../img/SitePics/installation.png'
import installation1 from '../img/SitePics/installation1.png'
import installation2 from '../img/SitePics/installation2.png'
import arrowicon from '../img/SitePics/arrowicon.png'
import construction from '../img/SitePics/construction.png'
import redo from '../img/SitePics/redo.png'
import frame from '../img/SitePics/frame.png'
import paintbrush from '../img/SitePics/paintbrush.png'
import padding from '../img/SitePics/padding.png'
import E1 from '../img/SitePics/Elevatorbg.png'
import { Row, Col, Jumbotron, Container } from 'react-bootstrap'


const Services = () => {
    return (
        <div className="container">

        <Jumbotron fluid className="jumbotron" style={{backgroundImage: `url(${E1}`}}>
              <Container className="text-center">           
                <h1>Services Of UEC</h1>              
              </Container>
         </Jumbotron>
                      
           
              
              {/* <!--- Three Column Section --> */}
                  <div className="repair-con text-center iconCap">
                        <Col md={12} >
                            <h3 className="repairs">Repairs</h3>
                            <p>No Repair Is Too Minor. We Repair Or Replace Any Part. We Also Offer The Following:</p>
                        </Col>
                      <div className="container-fluid padding iconCap" >
                        <Row>
                          <Col xs={12} md={4}>
                            <p><img src={arrowicon} className="icon" alt="arrow" /> - Raise Cab Dome To Increase Cab Height</p>
                          </Col>

                          <Col xs={12} md={4}>
                            <p><img src={construction} className="icon" alt="construction" /> - New Elevator Cab Door Construction</p>
                          </Col>
                          <Col xs={12} md={4}>
                            <p><img src={redo} className="icon" alt="redo" /> - Refurbish Existing Cab Door</p>
                          </Col>
                        
                            <Col xs={12} md={4}>
                              <p><img src={frame} className="icon" alt="frame" /> - Refurbish Hatch Doors And Frames</p>
                            </Col>
                            <Col xs={12} md={4}>
                              <p><img src={paintbrush} className="icon" alt="paintbrush" /> - Recladding Or Painting</p>
                            </Col>
                            <Col xs={12} md={4}>
                              <p><img src={padding} className="icon" alt="padding" /> - Provide Protective Pads</p>
                            </Col>
                          </Row>
                  </div>
              </div>
            

              //  {/* <!--- Cards --> */}
               <div className="container-fluid padding iconCap" >
               <Row>
                 <Col md={4}>
                   <div className="card">
                     <img className="card-img-top" src={ installation } alt="installation" />
                     <div className="card-body">
                       <h4 className="card-title">Cab Remodeling</h4>
                       <p className="card-text" id="c1">UEC fully or Partially refurbish 
                         any elevator cab to give it a 
                       modern appearance.</p>
                       
                     </div>
                   </div>
                 </Col>
                 <Col md={4}>
                   <div className="card">
                     <img className="card-img-top" src={ installation1 } alt="installation1" />
                     <div className="card-body">
                       <h4 className="card-title">Fabrication</h4>
                       <p className="card-text" id="c2">We use state of the art <br/>
                       technology and tools and with our highly skilled workforce we fabricate the highest quality
                     products that makes our cabs extraordinary.</p>
                     </div>
                   </div>
                 </Col>
                 <Col md={4}>
                     <div className="card">
                       <img className="card-img-top" src={ installation2 } alt="installation2" />
                         <div className="card-body">
                           <h4 className="card-title">New Cab Construction & Installation</h4>
                           <p className="card-text" id="c3">UEC manufacture new wood or steel shell cab with materials that meets
                             ANSI standards 
                           Our experienced team of installers will install and inspect all projects to ensure they meet our customers satisfaction.</p>
                           
                         </div>
                     </div>
                 </Col>
               </Row>
          
        </div>
</div>
       
    )
}

export default Services