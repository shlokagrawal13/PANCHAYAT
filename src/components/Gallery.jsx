import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Linestyle from "./Linestyle";

export default function Gallery() {
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/albums');
        const data = await response.json();
        setAlbums(data.slice(0, 8)); // Limit to 8 albums
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  const openAlbum = (album) => {
    navigate('/Gallery', { state: { selectedAlbum: album } });
  };

  return (
    <>
      <Linestyle Ourmenber={"OUR GALLERY"} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 overflow-hidden">
        {albums.map((album) => (
          <img
            key={album.id}
            src={album.thumbnail}
            alt={album.name}
            className="cursor-pointer rounded-lg shadow-md hover:shadow-lg transition"
            onClick={() => openAlbum(album)}
          />
        ))}
      </div>
    </>
  );
}