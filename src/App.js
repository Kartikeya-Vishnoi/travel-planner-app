import React from 'react';
import './App.css';
import Place from './components/Place';

function App() {
  const destinations = [
    {
      name: 'Paris',
      description: 'The City of Love',
      image: 'https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE=',
      rating: 4.8,
    },
    {
      name: 'Tokyo',
      description: 'The Capital of Japan',
      image: 'https://media.istockphoto.com/id/904453184/photo/mt-fuji-and-tokyo-skyline.jpg?s=612x612&w=0&k=20&c=dCovWtrGOge0jVOAQ6UHfjKndURi5jfGvgM0jejXtbY=',
      rating: 4.9,
    },
    {
      name: 'New York',
      description: 'The Big Apple',
      image: 'https://media.istockphoto.com/id/615398376/photo/new-york-city-nyc-usa.jpg?s=612x612&w=0&k=20&c=rlrsrt4jbORPDSOW5df06Ik_X_5iQo1rYQd53xSs4nw=',
      rating: 4.7,
    },
    {
      name: 'Barcelona',
      description: 'The City of Gaudi',
      image: 'https://media.cntraveler.com/photos/591f1c7d1f187a2af3dedef0/16:9/w_2580,c_limit/barcelona-park-guell-GettyImages-512152500.jpg',
      rating: 4.5,
    },
  ];

  // Find the destination with the highest rating
  const bestDestination = destinations.reduce((prev, current) =>
    prev.rating > current.rating ? prev : current
  );

  return (
    <div className="app">
      <h1>Travel Planner App</h1>
      <div className="destination-list">
        {destinations.map((destination, index) => (
          <Place key={index} {...destination} />
        ))}
      </div>
      <h2>Best Destination:</h2>
      <Place {...bestDestination} />
    </div>
  );
}

export default App;
