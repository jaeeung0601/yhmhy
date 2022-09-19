import Notice from "./routes/Notice";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
    <Routes>
      <Route path='/' element={<Notice />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
