import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch('/.netlify/functions/' + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <ApolloProvider client={client}>
      <Navbar /> 
      <p>
        {/* <button onClick={this.handleClick('hello')}>
          {loading ? 'Loading...' : 'Call Lambda'}
        </button>
        <button onClick={this.handleClick('async-chuck-norris')}>
          {loading ? 'Loading...' : 'Call Async Lambda'}
        </button> */}
        <br />
        <span>{msg}</span>
          <Query
            query={gql`
              {
                users {
                  name
                  email
                }
              }
            `}
          >
            {({ data }) =>
              <div>A greeting from the server: {
                data && data.users && data.users.map((user) => (<div>{user.name} {user.email}</div>))}</div>}
          </Query>

          <Query
            query={gql`
              {
                receipts {
                  id
                  title
                }
              }
            `}
          >
            {({ data }) =>
              <div>Receipts {
                data && data.receipts && data.receipts.map((user) => (<div>{user.title}</div>))}</div>}
          </Query>
      </p>
      </ApolloProvider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;
