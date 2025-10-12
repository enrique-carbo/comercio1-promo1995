import React, { useState, useEffect } from 'react';
import { GalleryAlbum } from '../types';
import Section from './Section';

interface GalleryDetailPageProps {
    album: GalleryAlbum;
    onBack: () => void;
}

const GalleryDetailPage: React.FC<GalleryDetailPageProps> = ({ album, onBack }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation(); // Prevent modal from closing when clicking the button
        if (selectedIndex !== null) {
            setSelectedIndex((prevIndex) => (prevIndex! + 1) % album.images.length);
        }
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation(); // Prevent modal from closing when clicking the button
        if (selectedIndex !== null) {
            setSelectedIndex((prevIndex) => (prevIndex! - 1 + album.images.length) % album.images.length);
        }
    };

    const handleImageClick = (index: number) => {
        setSelectedIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedIndex(null);
    };

    // Keyboard navigation for the modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === 'Escape') {
                handleCloseModal();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedIndex, album.images.length]);

    const selectedImage = selectedIndex !== null ? album.images[selectedIndex] : null;

    return (
        <Section id={`gallery-${album.slug}`}>
            <div className="relative mb-12 flex items-center justify-center">
                <button 
                    onClick={onBack}
                    className="absolute left-0 flex items-center text-brand-primary hover:text-brand-light transition-colors duration-200 font-semibold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                    Volver a la Galería
                </button>
                <h2 className="text-3xl font-bold text-center text-brand-light sm:text-4xl">
                    {album.title}
                </h2>
            </div>
           
            {album.images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {album.images.map((image, index) => (
                        <div 
                            key={index} 
                            className="bg-brand-light/5 text-center p-2 rounded-lg shadow-md group overflow-hidden cursor-pointer"
                            onClick={() => handleImageClick(index)}
                            role="button"
                            aria-label={`Ver imagen: ${image.alt}`}
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick(index)}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-auto object-cover rounded-md transform group-hover:scale-105 transition-transform duration-300 aspect-[4/3]"
                            />
                             <p className="font-medium text-brand-text-light mt-2 text-sm truncate">{image.alt}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-brand-text-light/80">No hay fotos en este álbum todavía.</p>
            )}

            {/* Modal Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in"
                    onClick={handleCloseModal}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-caption"
                >
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                        aria-label="Imagen anterior"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div 
                        className="relative bg-brand-dark rounded-lg shadow-2xl p-4 max-w-4xl max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside
                    >
                        <button
                            onClick={handleCloseModal}
                            className="absolute -top-3 -right-3 h-8 w-8 bg-brand-primary rounded-full text-brand-light flex items-center justify-center text-2xl font-bold hover:bg-brand-light hover:text-brand-dark transition-colors duration-200 z-10"
                            aria-label="Cerrar imagen"
                        >
                           &times;
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="object-contain w-full h-full max-h-[calc(90vh-80px)]"
                        />
                        <p id="modal-caption" className="text-center text-brand-text-light/90 mt-4">
                            {selectedImage.alt}
                        </p>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                        aria-label="Siguiente imagen"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </Section>
    );
};

export default GalleryDetailPage;