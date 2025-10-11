import { Egresado, GalleryAlbum } from '../types';

interface AppData {
  allGraduates: Egresado[];
  albums: GalleryAlbum[];
}

export const fetchAppData = async (): Promise<AppData> => {
  try {
    const [
      graduatesAResponse,
      graduatesBResponse,
      graduatesCResponse,
      albumsResponse
    ] = await Promise.all([
      fetch('data/egresadosA.json'),
      fetch('data/egresadosB.json'),
      fetch('data/egresadosC.json'),
      fetch('data/galleries.json')
    ]);

    if (!graduatesAResponse.ok || !graduatesBResponse.ok || !graduatesCResponse.ok || !albumsResponse.ok) {
      throw new Error('Network response was not ok');
    }

    const graduatesA: Egresado[] = await graduatesAResponse.json();
    const graduatesB: Egresado[] = await graduatesBResponse.json();
    const graduatesC: Egresado[] = await graduatesCResponse.json();
    const albumsData: GalleryAlbum[] = await albumsResponse.json();

    const allGraduates = [...graduatesA, ...graduatesB, ...graduatesC];

    return { allGraduates, albums: albumsData };
  } catch (error) {
    console.error("Fetch error:", error);
    // Re-lanzamos el error para que el componente que llama pueda manejarlo.
    throw new Error('No se pudieron cargar los datos de la página.');
  }
};