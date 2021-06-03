import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ButtonCounter } from './components/ButtonCounter';
import { Cards } from './components/Cards';
import { StarMatchGame } from './components/StarMatch';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

//console.log(Math.random());

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/cards' component={Cards} />
            <Route path='/starmatch' component={StarMatchGame} />

            <Route path='/fetch-data' component={FetchData} />
        <Route path='/buttoncounter' component={ButtonCounter} />
      </Layout>
    );
  }
}
