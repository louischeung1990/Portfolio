import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
// component/page imports
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/projects' element={<ProjectsPage />}/>
        {/* <Route path='/contact' element={<ContactPage />}/> */}
        <Route path='*' element={<Navigate to='/about' replace />}></Route>
      </Routes>
    </div>
  );
}

export default App;
