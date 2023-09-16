import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Version3 from './components/Version3';
import Form from './components/Form';
import Assessment1 from './components/Assessment1';
import Assessment from './components/Assessment';


function App() {
  return (
    <Router>
       <Routes>
       <Route path="/" element={<Version3/>} />
       <Route path="/formpage" element={<Form/>} />
       <Route path="/assessment1" element={<Assessment1/>} />
       <Route path="/assessment" element={<Assessment/>} />
       </Routes>
     </Router>


    // <div className="App">
    // <Form />
    // </div>
  );
}

export default App;