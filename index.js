import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';
import Post from './components/Post';
import Category from './components/Category';


const routes = (
    <Route path="/" mapMenuTitle="Башкы" component={App}>
        <IndexRoute component={Home} />

        <Route path="example" mapMenuTitle="Example" component={ExampleComponent}>
          <Route path="two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
        </Route>
        <Route path="posts/:category/:slug" component={Post} />
        <Route path="categories/:category" component={Category} />

        <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
    </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
