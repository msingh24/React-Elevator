import React from 'react'
import '../styles/footer.css'
import Consultation from './Consultation'

const Footer = () => {
    return (
      <div>
      <Consultation />
      
     
    <div className="container-fluid padding footer" id="Contact">
    <div className="row text-center">
      <div className="col-md-4">
        <h3 className="footerTitle">Contact Info</h3>
        <p>555-555-5555</p>
        <p>Email@123.com</p>
        <p>124 street, saint Albans</p>
        <p>Queens, Ny ,11412</p>
      </div>
      <div className="col-md-4">
        <h3 className="footerTitle">Our Hours</h3>
        <p>Monday-friday : 9am-5pm</p>
        <p>saturday:7am-7pm</p>
        <p>sunday : Closed</p>
      </div>
      <div className="col-md-4">
        <h3 className="footerTitle">Operation Location</h3>
        <p>NYC Boroughs</p>
        <p>Long Island</p>
        <p>New Jersey</p>
      </div>
      <div className="col-12">
        <h5 className="footerWebsite">&copy; UniversalElevators.com</h5>
      </div>
    </div>
    </div>
  
      </div>
    )
}

export default Footer