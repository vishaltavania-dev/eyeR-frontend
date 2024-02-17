import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Task from './components/Pages/Task/Task';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
function App() {
  return (
    <div className='App '>
      <Router>
        <Header />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/task' element={<Task />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
