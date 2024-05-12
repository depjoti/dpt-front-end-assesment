import { useState } from 'react'
import './App.css'
import { FlightSearch } from './Components/FlightSearch'
import { SearchResults } from './Components/SearchResults'
import flightData from './flightsData.json';

function App() {
  const currentDate = new Date().toISOString().split('T')[0]; ///current data showing in the datepicker
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [activeButton, setActiveButton] = useState(null); 
  const [departureAirport,setDepartureAirport]=useState('');
  const [arrivalAirport,setArrivalAirport]=useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleDepartureAirport=(event)=>{
    setDepartureAirport(event.target.value.toUpperCase());
  }
  const handleArrivalAirport=(event)=>{
    setArrivalAirport(event.target.value.toUpperCase());
  }
  
  ///Functionality search button
  const handleSearch = () => {
    // console.log("Search button clicked");
    // console.log("Departure Airport:", departureAirport);
    // console.log("Arrival Airport:", arrivalAirport);
    const trimmedDepartureAirport = departureAirport.trim().toUpperCase();
    const trimmedArrivalAirport = arrivalAirport.trim().toUpperCase();
  
    const filteredFlights = flightData.flightOffer.filter(flight => {
     
      const departureMatches = flight.itineraries.some(itinerary =>
        itinerary.segments.some(segment =>
          segment.departure.iataCode.trim().toUpperCase() === trimmedDepartureAirport
        )
      );
      const arrivalMatches = flight.itineraries.some(itinerary =>
        itinerary.segments.some(segment =>
          segment.arrival.iataCode.trim().toUpperCase() === trimmedArrivalAirport
        )
      );
      const dateMatches = flight.itineraries.some(itinerary =>
        itinerary.segments.some(segment =>
          segment.departure.at.startsWith(selectedDate)
        )
      );
  
      // console.log("Departure Matches:", departureMatches);
      // console.log("Arrival Matches:", arrivalMatches);
      // console.log("Date Matches:", dateMatches);
  
     
      return departureMatches || arrivalMatches || dateMatches;
    });
  
    setSearchResults(filteredFlights);
  };
  
  return (
    <div className='container'>
     <FlightSearch
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} 
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        departureAirport={departureAirport}
        arrivalAirport={arrivalAirport}
        handleDepartureAirport={handleDepartureAirport}
        handleArrivalAirport={handleArrivalAirport}
        handleSearch={handleSearch}
      />
     <SearchResults flights={searchResults}/>
    </div>
  )
}

export default App
