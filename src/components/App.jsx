import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { Project } from './Project/Project';
import './App.css';
import { MaterialPage } from 'pages/Materials/MaterialPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/project" element={<Project />} />
      <Route path="/materials" element={<MaterialPage />} />
    </Routes>
  );
}

export default App;
