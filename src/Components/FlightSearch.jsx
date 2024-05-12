
export const FlightSearch = ({ selectedDate, setSelectedDate, activeButton, setActiveButton, departureAirport, arrivalAirport, handleDepartureAirport, handleArrivalAirport, handleSearch }) => {
    return (

        <div className="flex flex-col p-3">
            {/* This part is just for design not doing any functionality */}
            <div className='flex justify-center items-center'>
                <button
                    className={`btn btn-sm ${activeButton === 'Round Trip' ? ' btn-primary' : 'hover:bg-blue-300'}`}
                    onClick={() => setActiveButton('Round Trip')}
                >
                    Round Trip
                </button>
                <button
                    className={`btn btn-sm ${activeButton === 'One Way' ? ' btn-primary' : 'hover:bg-blue-300'}`}
                    onClick={() => setActiveButton('One Way')}
                >
                    One Way
                </button>
                <button
                    className={`btn btn-sm ${activeButton === 'Multi City' ? 'btn-primary' : 'hover:bg-blue-300'}`}
                    onClick={() => setActiveButton('Multi City')}
                >
                    Multi City
                </button>
            </div>

            <div className="divider"></div>
            <div className='flex flex-nowrap justify-between  items-center '>
                <input className='input input-bordered w-full max-w-36' type='text' value={departureAirport} onChange={handleDepartureAirport} placeholder='DAC' />
                <input className='input input-bordered w-full max-w-36' type='text' value={arrivalAirport} onChange={handleArrivalAirport} placeholder='IST' />
                <input className='input input-bordered  max-w-38' type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} min="1950-01-01" max="2030-01-01" />

                {/* This is just for design, not dooing any functionality. Don't know what to do with this drop down which data is suitable for this, that's why I didn't do any functionality. */}
                <select className="select select-bordered  max-w-34">
                    <option disabled selected>Day -</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered  max-w-34">
                    <option disabled selected>Day +</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered w-full max-w-36">
                    <option disabled selected>Anytime</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <div>+</div>
                <select className="select select-bordered  max-w-34">
                    <option disabled selected>ADT</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered  max-w-34">
                    <option disabled selected>1</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <div>+</div>
            </div>
            <div className="divider"></div>
            <div className='flex flex-nowrap justify-between  items-center'>
                <label className="label cursor-pointer ">
                    <input type="checkbox" defaultChecked className="checkbox-sm mr-2" />
                    <span className="label-text"><b>Extra Options</b></span>
                </label>
                <label className="label cursor-pointer">
                    <p className='mr-2'><b>Enviornment</b></p>
                    <input type="radio" name="radio-1" className="radio-sm mr-2" />
                    <span className="label-text mr-2">Dummy</span>
                    <input type="radio" name="radio-1" className="radio-sm mr-2" />
                    <span className="label-text">PDT</span>
                </label>

                {/* Search Button */}
                <button className="btn btn-sm btn-primary" onClick={handleSearch}>Search</button>
            </div>
            <div className="divider"></div>

        </div>


    );
};
