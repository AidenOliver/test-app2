import React from 'react'
import './App.css';
import Nav from './Test-components/Nav'
import {ContextProvider} from './Test-context/Context'
import Test from './Test-components/Test'
import Form from './Test-components/Form'
import Search from './Test-components/Search'
import SearchObjects from './Test-components/SearchObjects/SearchObjects'

const App = () => {
  return (
    <ContextProvider>
      <div className="App">
        <Nav />
        <Test />
        <Form />
        <Search />
        <SearchObjects />
      </div>
    </ContextProvider>
  );
}

export default App;
