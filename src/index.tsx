import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { store } from './store/configureStore'
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
const token = "d9df3ce90e3a4915876fd23bd8aa254c62fb1025"; 
const httpLink = {
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${token}`
  }
};

const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache()
});
ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>
    , document.getElementById('root'));
serviceWorker.unregister();
