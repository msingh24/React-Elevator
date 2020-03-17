import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/post.css'
import { Carousel, Row, Col } from 'react-bootstrap'
import  Iframe  from 'react-iframe'




class Post extends Component {
    render() {
     
        

        console.log(this.props)
        const post = this.props.post ? (
            
            <div className="post">
            
             <Row>
                 <Col className="slider">
                 <Carousel className="carousel">
                    <Carousel.Item className="slider">
                        <img
                        className=" postImg"
                        src={this.props.post.pics[0]} 
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className=" postImg"
                        src={this.props.post.pics[1]} 
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className=" postImg"
                        src={this.props.post.pics[2]} 
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className=" postImg"
                        src={this.props.post.pics[3]} 
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className=" postImg"
                        src={this.props.post.pics[4]} 
                        alt="Third slide"
                        />
                    </Carousel.Item>

                    </Carousel>
                 </Col>

                 <Col>
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.body}</p>
                    <Iframe src={this.props.post.map} width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                    

                 </Col>
             </Row>


              
             
              
              
              <div className="center">
              </div>
            </div>
            
        ) : (
            <div className="center">Loading Post ....</div>
        )

        console.log(this.props.post.pics)

        return (
            <div className="container">
               <h4>{ post }</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}



export default connect(mapStateToProps)(Post)