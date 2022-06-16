import React, { Component } from 'react';
import logo from './assets/burger.jpg';
import './components/Layout/Layout.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render(){
  return (
    <div className="Content">
      <Layout>
       <BurgerBuilder />
      </Layout>
    </div>

  );
}
}

export default App;
