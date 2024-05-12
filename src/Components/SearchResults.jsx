import React from 'react';

export const SearchResults = ({ flights }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>FLIGHT</th>
            <th>AIRCRAFT</th>
            <th>CLASS</th>
            <th>FARE</th>
            <th>ROUTE</th>
            <th>DEPARTURE</th>
            <th>ARRIVAL</th>
            <th>DURATION</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {flights && flights.length > 0 ? (
            flights.map((flight, index) => (
              <tr key={index}>
                <td>{flight.itineraries[0].segments[0].marketingCarrier}{flight.itineraries[0].segments[0].flightNumber}</td>
                <td>{flight.itineraries[0].segments[0].aircraft}</td>
                <td>{flight.class[0][0]}</td>
                <td>{flight.fareBasis[0][0]}</td>
                <td>{`${flight.itineraries[0].segments[0].departure.iataCode}-${flight.itineraries[0].segments[0].arrival.iataCode}`}</td>
                <td>{flight.itineraries[0].segments[0].departure.at}</td>
                <td>{flight.itineraries[0].segments[0].arrival.at}</td>
                <td>{flight.itineraries[0].duration}</td>
                <td>{flight.price}</td>
              </tr>
            ))
          ) : (
            <tr>
               <td colSpan="9" className="text-center font-bold text-lg">No flights available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

