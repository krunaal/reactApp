import logo from './logo.svg';
import './App.css';
import ItemListComponent from './ItemListComponent';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <select>
        <option>
          <ItemListComponent></ItemListComponent>
        </option>
      </select>
      
    </Fragment>
  );
}

export default App;
