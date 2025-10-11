import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EventInfo from '@/components/EventInfo';
import Agenda from '@/components/Agenda';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import GraduatesGrid from '@/components/GraduatesGrid';
import GreetingsWall from '@/components/GreetingsWall';
import Footer from '@/components/Footer';
import GraduatesListPage from '@/components/GraduatesListPage';
import GalleryDetailPage from '@/components/GalleryDetailPage';
import { Egresado, GalleryAlbum } from '@/types';
import { fetchAppData } from '@/api/dataService';
import ConfirmationFormGoogle from './components/ConfirmationFormGoogle';
import CountdownTwo from './components/Countdown2';

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
    const loadData = async () => {
        try {
            const { allGraduates, albums } = await fetchAppData();
            setAllGraduates(allGraduates);
            setAlbums(albums);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error inesperado al cargar los datos.');
            }
        } finally {
            setIsLoading(false);
        }
    };
    loadData();
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
        <CountdownTwo targetDate={eventDate} />
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
        <ConfirmationFormGoogle />
        <GreetingsWall />
      </main>
      <Footer />
    </div>
  );
};

export default App;