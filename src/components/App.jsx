import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { Project } from './Project/Project';
import './App.css';
import { MaterialPage } from 'pages/Materials/MaterialPage';

function App() {
    return (
       
            <Routes>
                <Route
                    path="/"
                    element={
                        <Navigate to="/vite-react-eslint-starter-template/home" />
                    }
                />
                <Route
                    path="/vite-react-eslint-starter-template/home"
                    element={<HomePage />}
                />
                <Route
                    path="/vite-react-eslint-starter-template/project"
                    element={<Project />}
                />
                <Route
                    path="/vite-react-eslint-starter-template/materials"
                    element={<MaterialPage />}
                />
            </Routes>
       
    );
}

export default App;
