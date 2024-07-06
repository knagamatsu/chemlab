import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Datasets from './components/Datasets';
import DatasetDetail from './components/DatasetDetail';
import Competitions from './components/Competitions';
import Collaborators from './components/Collaborators';
import Settings from './components/Settings';
import Mypage from './components/Mypage';
import Sidebar from './components/Sidebar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/datasets/:id" element={<DatasetDetail />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/collaborators" element={<Collaborators />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);