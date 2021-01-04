import React from 'react'
import './App.css';
import Nav from './components/Nav'
import {ContextProvider} from './contexts/Context'
import Test from './components/Test'
import Form from './components/Form'


const App = () => {
  return (
    <ContextProvider>
      <div className="App">
        <Nav />
        <Test />
        <Form />
      </div>
    </ContextProvider>
  );
}

export default App;
