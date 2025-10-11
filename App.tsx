import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventInfo from './components/EventInfo';
import Agenda from './components/Agenda';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import GraduatesGrid from './components/GraduatesGrid';
import ConfirmationForm from './components/ConfirmationForm';
import GreetingsWall from './components/GreetingsWall';
import Footer from './components/Footer';
import GraduatesListPage from './components/GraduatesListPage';
import GalleryDetailPage from './components/GalleryDetailPage';
import { Egresado, GalleryAlbum } from './types';

const App: React.FC = () => {
  const eventDate = '2025-11-29T21:00:00';

  // State for navigation/views
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);
  const [selectedAlbumSlug, setSelectedAlbumSlug] = useState<string | null>(null);
  
  // State for data
  const [allGraduates, setAllGraduates] = useState<Egresado[]>([]);
  const [albums, setAlbums] = useState<GalleryAlbum[]>([]);

  // State for loading/error
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const [graduatesResponse, albumsResponse] = await Promise.all([
                fetch('/data/egresados.json'),
                fetch('/data/galleries.json')
            ]);
            if (!graduatesResponse.ok || !albumsResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const graduatesData: Egresado[] = await graduatesResponse.json();
            const albumsData: GalleryAlbum[] = await albumsResponse.json();
            
            setAllGraduates(graduatesData);
            setAlbums(albumsData);

        } catch (error) {
            setError('No se pudieron cargar los datos de la página.');
            console.error("Fetch error:", error);
        } finally {
            setIsLoading(false);
        }
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedDivision, selectedAlbumSlug]);

  const handleSelectDivision = (division: string) => setSelectedDivision(division);
  const handleSelectAlbum = (slug: string) => setSelectedAlbumSlug(slug);
  const handleBackToMain = () => {
    setSelectedDivision(null);
    setSelectedAlbumSlug(null);
  };

  if (selectedAlbumSlug) {
    const album = albums.find(a => a.slug === selectedAlbumSlug);
    return (
       <div className="min-h-screen bg-brand-dark text-brand-text-light">
        {album ? (
            <GalleryDetailPage album={album} onBack={handleBackToMain} />
        ) : (
            <p className="text-center py-20">Álbum no encontrado.</p> // Basic error handling
        )}
        <Footer />
       </div>
    );
  }

  if (selectedDivision) {
    const filteredGraduates = allGraduates.filter(
      (grad) => grad.division === selectedDivision
    );
    return (
      <div className="min-h-screen bg-brand-dark text-brand-text-light">
        <GraduatesListPage 
          division={selectedDivision} 
          graduates={filteredGraduates} 
          onBack={handleBackToMain} 
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text-light">
      <Header />
      <main>
        <Hero />
        <Countdown targetDate={eventDate} />
        <EventInfo />
        <Agenda />
        <Menu />
        <Gallery 
          albums={albums} 
          onSelectAlbum={handleSelectAlbum} 
        />
        <GraduatesGrid 
            onSelectDivision={handleSelectDivision} 
            loading={isLoading} 
            error={error} 
        />
        <ConfirmationForm />
        <GreetingsWall />
      </main>
      <Footer />
    </div>
  );
};

export default App;