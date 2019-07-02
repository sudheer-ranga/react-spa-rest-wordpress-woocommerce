import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/scss/skeleton.scss';
import * as serviceWorker from './serviceWorker';
import IndexPage from './pages/IndexPage/IndexPage';
import PostDetailPage from './pages/PostDetailPage/PostDetailPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import StorePage from './pages/StorePage/StorePage';
import StoreProductPage from './pages/StoreProductPage/StoreProductPage';

import Layout from './components/Layout/Layout';

const routing = (
  <Router>
    <Layout>
      <Route path="/" exact component={IndexPage} />
      <Route path="/post/:slug" component={PostDetailPage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/store" exact component={StorePage} />
      <Route path="/store/:slug" exact component={StoreProductPage} />
    </Layout>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
