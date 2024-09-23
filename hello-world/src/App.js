import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Header from './Header';
import Footer from './Footer';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Greeting></Greeting>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
