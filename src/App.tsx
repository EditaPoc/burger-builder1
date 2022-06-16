import React, { Component } from 'react';
import logo from './assets/burger.jpg';
import './components/Layout/Layout.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render(){
  return (
    <div className="Content">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Layout>
       <BurgerBuilder />
      </Layout>
    </div>
    /* // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" /> */
       
          /* <a */
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     > 
    //     Create your burger
    //     </a> 
    //   </header>
    //  </div>
  );
}
}

export default App;
