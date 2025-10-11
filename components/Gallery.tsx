import React from 'react';
import Section, { SectionTitle } from './Section';
import { GalleryAlbum } from '../types';

interface GalleryProps {
    albums: GalleryAlbum[];
    onSelectAlbum: (slug: string) => void;
}

const AlbumCard: React.FC<{ album: GalleryAlbum; onClick: () => void }> = ({ album, onClick }) => (
    <div className="group relative cursor-pointer" onClick={onClick}>
        <img
            src={album.cover}
            alt={album.title}
            className="w-full h-full object-cover rounded-lg aspect-square"
        />
        <div className="absolute inset-0 rounded-lg
                      bg-black/0 opacity-0
                      group-hover:bg-black/60 group-hover:opacity-100
                      transition-all duration-300
                      flex items-center justify-center">
            <p className="text-brand-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold text-center p-4">{album.title}</p>
        </div>
    </div>
);

const Gallery: React.FC<GalleryProps> = ({ albums, onSelectAlbum }) => {
    return (
        <Section id="galeria" className="bg-brand-light/5">
            <SectionTitle>Galería de Recuerdos: 1995</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {albums.map((album) => (
                    <AlbumCard 
                        key={album.slug} 
                        album={album}
                        onClick={() => onSelectAlbum(album.slug)} 
                    />
                ))}
            </div>
        </Section>
    );
};

export default Gallery;