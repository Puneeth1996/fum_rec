import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import DescriptionPage from './DescriptionPage'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const IndexPage = () => {
  return <PostForm />;
};

class App extends Component {

  render() {
    return (
      <section className="App">
        <Router>
          <Link to="/">Add</Link>
          <Link to="/job">Portal</Link>
          <Route exact path="/" component={IndexPage} />
          
          <Route exact path="/job" component={AllPost} />
          <Route exact path="/job/:description" component={DescriptionPage} />
  
        </Router>
        <a href="/job"> Check Persistance | browser reload </a>
      </section>
    );
  }
}


export default App;