import './App.css';
import Login from './components/Authentication/Login';
import Header from './components/Header/Header';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Task from './components/Pages/Task/Task';
import Chart from 'chart.js/auto';
import { Data } from './utils/Data';
import { CategoryScale } from 'chart.js';
import LineChart from './components/Chart/LineChart';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useState } from 'react';

Chart.register(CategoryScale);

function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.week),
    datasets: [
      {
        label: 'Competitor Rating',
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          ' #ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
      {
        label: 'Your Rating',
        data: Data.map((data) => data.userLost),
        backgroundColor: [
          'rgba(75,192,19,5)',
          ' #ecf0f1',
          '#50AF24',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className='App '>
      <Router>
        <Header />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/task' element={<Task />}></Route>
          <Route
            path='/lineChart'
            element={<LineChart chartData={chartData} />}
          ></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
