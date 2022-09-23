import Home from "./pages/Home";
import Community from "./pages/Community";
import TestQuestion from './pages/testpages/TestQuestion';
import TestResult from './pages/testpages/TestResult';
import TestHome from './pages/testpages/TestHome'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Community' element={<Community />} />
      <Route path='/TestHome' element={<TestHome />} />
      <Route path='/testquestion' element={<TestQuestion />} />
      <Route path='/testresult' element={<TestResult />} />
    </Routes>
    </Router>
  );
}

export default App;