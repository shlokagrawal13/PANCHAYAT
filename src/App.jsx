import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import AimObjectives from './Pages/AIM&Objectives';
import Constitution from './Pages/Constitution';
import Programs from './Pages/Programs';
import History from './Pages/History';
import GalleryHub from './Pages/Galleryhub';
import AIPPMedia from './Pages/AIPPMedia';
import Contact from './Pages/Contact';
import StateP from './Pages/StateP';
import Conveners from './Pages/Conveners';
import WorkingCommittee from './Pages/WorkingCommittee';
// Update these import paths
import AdminHome from './components/AdminDashboard/AdminHome';
import ManageMedia from './AdminDashboard/ManageMedia';
import ManageYouTube from './AdminDashboard/ManageYouTube';
import ManageAlbums from './AdminDashboard/ManageAlbums';
import ManageHistory from './AdminDashboard/ManageHistory';

function App() {  
  return (
    <div className="w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StateP" element={<StateP />} />
        <Route path="/about" element={<About />} />
        <Route path="/Conveners" element={<Conveners />} />
        <Route path="/WorkingCommittee" element={<WorkingCommittee />} />
        <Route path="/aim-objectives" element={<AimObjectives />} />
        <Route path="/constitution" element={<Constitution />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/history" element={<History />} />
        <Route path="/media" element={<AIPPMedia />} />
        <Route path="/gallery" element={<GalleryHub />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/media" element={<ManageMedia/>} />
        <Route path="/admin/youtube" element={<ManageYouTube/>} />
        <Route path="/admin/albums" element={<ManageAlbums/>} />
        <Route path="/admin/history" element={<ManageHistory/>} />
      </Routes>
    </div>
  );
}

export default App;
