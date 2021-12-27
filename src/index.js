import React from 'react';
import ReactDOM from 'react-dom';
import ReactQueryProvider from './queryClient/QueryProvider'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// import ContextProvider from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryProvider>
      <Router>
        <App />
      </Router>
    </ReactQueryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);