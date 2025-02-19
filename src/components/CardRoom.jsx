import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CardRoom() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/card-room-data');
        setCardData(response.data);
      } catch (error) {
        console.error('Error fetching card room data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full py-20 bg-[#B48F60] bg-opacity-90 mt-10 rounded-lg border border-white border-opacity-20 text-zinc-900 backdrop-blur-sm shadow-lg overflow-hidden ">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <Card
            key={index} 
            imageSrc={card.imageSrc}
            name={card.name}
            description={card.description}
            description2={card.description2}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ imageSrc, name, description, description2 }) {
  return (
    <div className="card flex flex-col items-center justify-center">
      <img src={imageSrc} alt={name} className="w-24 h-24 rounded-full object-cover" />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-sm mt-1">{description}</p>
      <p className="text-sm mt-1">{description2}</p>
    </div>
  );
}

export default CardRoom;
