import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer.jsx';
import Sidebar from './components/sidebar.jsx';
import Home from './pages/home.jsx';
import NotFound from './pages/notFound.jsx';
import Search from './pages/search.jsx';
import Playlists from './pages/playlists.jsx';
import Player from './components/player.jsx';
import Artist from './pages/artist.jsx';
import Album from './pages/album.jsx';
import { AudioProvider } from './components/audioContext.jsx';
import { FavoritesProvider } from './components/favoritesContext.jsx';


function AppRoutes() {
  return (
    <Router>
      <AudioProvider>
        <FavoritesProvider> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
      <Sidebar/>
      <Player/>
      </FavoritesProvider>   
      </AudioProvider> 
    </Router>
    
    
    
    );
  }
  
  export default AppRoutes;
  