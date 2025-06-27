import React from 'react';
import './RoomGallery.css';

const rooms = [
  {
    title: 'SHANGRILA CHALET',
    image: './assets/IMG_6277.jpg',
    adults: 6,
    children: 3,
  },
  {
    title: '3 BEDROOM EXECUTIVE SUITE',
    image: './assets/IMG_6288.jpg',
    adults: 6,
    children: 3,
  },
  {
    title: '2 BEDROOM EXECUTIVE SUITE',
    image: './assets/IMG_6291.jpg',
    adults: 4,
    children: 2,
  },
  {
    title: 'SWISS VILLA',
    image: './assets/IMG_6304.jpg',
    adults: 4,
    children: 2,
  },
  {
    title: 'EXECUTIVE SUITE',
    image: './assets/IMG_6309.jpg',
    adults: 2,
    children: 1,
  },
  {
    title: 'SWISS COTTAGES',
    image: './assets/IMG_6277.jpg',
    adults: 4,
    children: 2,
  },
];

const RoomGallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-heading">
        A <span>shelter</span> from the frenzy of everyday life
      </h2>
      <p className="gallery-subtext">
        When you host a party or family reunion, the special celebrations let you strengthen bonds with.
      </p>
      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.image} alt={room.title} className="room-image" />
            <h3 className="room-title">{room.title}</h3>
            <div className="room-info">
              <div>
                <strong>{room.adults}</strong>
                <div>MAX ADULTS</div>
              </div>
              <div>
                <strong>{room.children}</strong>
                <div>MAX CHILDREN</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomGallery;
