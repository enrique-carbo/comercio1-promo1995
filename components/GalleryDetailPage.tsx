import React from 'react';
import { GalleryAlbum } from '../types';
import Section from './Section';

interface GalleryDetailPageProps {
    album: GalleryAlbum;
    onBack: () => void;
}

const GalleryDetailPage: React.FC<GalleryDetailPageProps> = ({ album, onBack }) => {
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
                        <div key={index} className="bg-brand-light/5 text-center p-2 rounded-lg shadow-md group overflow-hidden">
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-auto object-cover rounded-md transform group-hover:scale-105 transition-transform duration-300"
                            />
                             <p className="font-medium text-brand-text-light mt-2 text-sm">{image.alt}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-brand-text-light/80">No hay fotos en este álbum todavía.</p>
            )}
        </Section>
    );
};

export default GalleryDetailPage;