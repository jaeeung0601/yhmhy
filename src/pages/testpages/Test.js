import TestQuestion from './testpages/TestQuestion';
import TestResult from './testpages/TestResult';
import TestHome from './testpages/TestHome'
import {Routes, Route} from 'react-router-dom'

function Test() {
  return (
    <Routes>
      <Route path='/' element={<TestHome />} />
      <Route path='/testquestion' element={<TestQuestion />} />
      <Route path='/testresult' element={<TestResult />} />
    </Routes>
  );
}

export default Test;
