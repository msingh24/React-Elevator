import React, { Component } from 'react'
import '../styles/portfolio.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux' 
import { Card, Col, Container, Button, Jumbotron } from 'react-bootstrap'
import E1 from '../img/SitePics/Elevatorbg.png'


class Portfolio extends Component {
  render()  {
    console.log(this.props)
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (

         
            

        <Col sm={12} md={4} className="text-center cardLook">
          <div key={post.id}>
          <Card className="text-center hover" style={{ width: '100%' }}>
          <NavLink to={'/' + post.id}>
              <h1 className="buildingTitle ">{post.title}</h1>  
          </NavLink> 
          
              
              
              <Card.Body>
                <Card.Text>
                <NavLink to={'/' + post.id}>
                <Card.Img src={ post.building }  />
                </NavLink>  
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
         </Col>
          
        )
      })
    ) : (
      <div className="center">No Posts Yet</div>
    )
    return (
      <div className="container">
        <Jumbotron fluid className="jumbotron" style={{backgroundImage: `url(${E1}`}}>
			   <Container className="text-center">
				<h1>UEC Projects</h1>	
        </Container>
      </Jumbotron>
        <p className="center">{postList}</p>
      </div>
    )
  }
    
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Portfolio)