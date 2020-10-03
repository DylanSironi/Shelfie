import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
// import Products from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Form/>
      {/* <Products/> */}
    </div>
  );
}

export default App;
