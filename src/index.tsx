import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Other/Style/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Other/Store/store';
import FirebaseApp from './FirebaseApp';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <FirebaseApp>
          <App />
        </FirebaseApp>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
