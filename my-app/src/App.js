import React from "react";
import PostForm from './PostForm';
import AllPost from './AllPost';
import DescriptionPage from './DescriptionPage'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const IndexPage = () => {
  return <PostForm />;
};
const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Add</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Route exact path="/" component={IndexPage} />
        
        <Route exact path="/about" component={AllPost} />
        <Route exact path="/about/:description" component={DescriptionPage} />

      </Router>
      <a href="/about">about  |  with browser reload</a>
    </section>
  );
};

export default App;