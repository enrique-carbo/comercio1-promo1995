export interface Egresado {
  id: number;
  nombre: string;
  division: string;
}

export interface Saludo {
  id: number;
  nombre:string;
  mensaje: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryAlbum {
  title: string;
  slug: string;
  cover: string;
  images: GalleryImage[];
}
