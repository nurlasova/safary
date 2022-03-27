import React1, {Suspense} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import RestoService from './components/services/resto-service';
import { I18nextProvider } from 'react-i18next';
import RestoServiceContext from './components/resto-service-context';
import store from './store';
import transFunc from './components/langs/lang';

const restoService = new RestoService(); 

ReactDOM.render(
  <Provider store={store}>
          <RestoServiceContext.Provider value={restoService}>
              <Router>
                  <I18nextProvider i18n={transFunc}>
                  <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>
                  </I18nextProvider>
              </Router>
          </RestoServiceContext.Provider>
  </Provider>
  , document.getElementById('root')
);




