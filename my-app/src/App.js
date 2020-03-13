import React from "react";
import PostForm from './PostForm';
import AllPost from './AllPost';
import DescriptionPage from './DescriptionPage'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";



const users = [
  {
    name: `Param`
  },
  {
    name: `Vennila`
  },
  {
    name: `Afrin`
  }
];

const IndexPage = () => {
  return <PostForm />;
};

const AboutPage = () => {
  return (<h1>ABout PAge</h1>);
};

const UsersPage = () => {
  return (
    <>
      {users.map((user, index) => (
        <h5 key={index}>
          <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
        </h5>
      ))}
    </>
  );
};

const UserPage = ({ match, location }) => {
  const {
    params: { userId }
  } = match;

  return (
    <>
      <p>
        <strong>User ID: </strong>
        {userId}
      </p>
      <p>
        <strong>User Name: </strong>
        {users[userId - 1].name}
      </p>
    </>
  );
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

        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/user/:userId" component={UserPage} />
      </Router>
      <a href="/about">about  |  with browser reload</a>
    </section>
  );
};

export default App;