import React, { Component } from 'react'
import Menu from './components/Menu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Post from './components/Post'


class App extends Component{
  render() {
    return (
      <div>
      <BrowserRouter>
      <div className="App">
        <Menu />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/services' component={Services} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path="/:post_id" component={Post} />
        </Switch>
      </div>
      </BrowserRouter>

        <Footer />
        </div>
    );
  }
  

}

export default App;
