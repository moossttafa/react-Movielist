import React from 'react';
import  { BrowserRouter as Router , Switch , Route}  from 'react-router-dom';  
import { Navbar } from './components/Navbar'
import { WatchList } from "./components/Pages/WatchList";
import { Watched } from "./components/Pages/Watched"
import { Add } from "./components/Pages/Add/Add"
 import './App.css';

 import {GlobalProvider} from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider> 
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" >
          <WatchList />
        </Route>
        <Route  path="/watched">
            <Watched />
          </Route>
          <Route  path="/add">
            <Add />
          </Route>
      </Switch>
    </Router>
    </GlobalProvider>
  )
}

export default App

