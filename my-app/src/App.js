import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import DescriptionPage from './DescriptionPage'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const IndexPage = () => {
  return <PostForm />;
};

class App extends Component {
    
  componentWillMount() {
    localStorage.getItem('contacts') && this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
        isLoading: false
    })
  }


  componentDidMount(){
    const date = localStorage.getItem('contactsDate');
    const contactsDate = date && new Date(parseInt(date));
    const now = new Date();

    const dataAge = Math.round((now - contactsDate) / (1000 * 60)); // in minutes
    const tooOld = dataAge >= 1;

    if(tooOld){
        this.fetchData();            
    } else {
        console.log(`Using data from localStorage that are ${dataAge} minutes old.`);
    }
  }

  fetchData(){
    this.setState({
        isLoading: true,
        contacts: []
    })

    fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.results.map(user => (
        {
            name: `${user.name.first} ${user.name.last}`,
            username: `${user.login.username}`,
            email: `${user.email}`,
            location: `${user.location.street}, ${user.location.city}`
        }
    )))
    .then(contacts => this.setState({
        contacts,
        isLoading: false
    }))
    .catch(error => console.log('parsing failed', error))
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('contacts', JSON.stringify(nextState.contacts));
    localStorage.setItem('contactsDate', Date.now());
  }


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