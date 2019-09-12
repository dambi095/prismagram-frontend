import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Client from "./Apollo/Client";
import { ApolloProvider } from "react-apollo-hooks"; // ApolloProvider는 client를 요구한다. 


ReactDOM.render(
    <ApolloProvider client={Client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'));
