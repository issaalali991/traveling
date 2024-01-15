import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailView = (props) => {


  if (!props.trip) {
    return <p className="text-red-500">Error: DetailView called without trip prop.</p>;
  }
  const trip = props.trip.fields;
  const [weather, setWeather] = useState(null);
  const getWeather = async () => {
    
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${trip.des[0]}&longitude=${trip.des[1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
   .then((response) => {
      setWeather(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    getWeather();
  }, []);


  const [showMore, setShowMore] = useState(false);

  const firstSentence = trip.description.split(".")[0]; 

  return (
    <div className="text-white bg-gray-800 p-6 rounded">
      <h2 className="font-bold text-xl py-4">Detail View: {trip.title}</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 pr-4 mb-4 md:mb-0">
          <div className="mb-4">
            <span className="font-semibold">From:</span> {trip.startDate} -{" "}
            <span className="font-semibold">To:</span> {trip.endDate}
          </div>
          <div className="mb-4">
            <span className="font-semibold">From:</span> {trip.startLocation} -{" "}
            <span className="font-semibold">To:</span> {trip.endLocation}
          </div>
          <div className="mb-4">
            <p className="font-semibold">Description:</p>
            <p>
              {showMore ? trip.description : `${firstSentence}... `}
              <button
                className="text-blue-500 hover:underline focus:outline-none"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <img src={trip.image.fields.file.url} alt="" className="w-full rounded-lg" />
        </div>
      </div>
      <div className="mt-4">
        <MapContainer className="h-80 w-full rounded-lg" center={trip.des} zoom={5} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={trip.des}>
            <Popup>
            <div>
                <p>Trip Destination</p>
                {weather && (
                  <>
                    <p>Temperature: {weather.current.temperature_2m} °C</p>
                    <p>Humidity: {weather.current.relative_humidity_2m}%</p>
                    <p>Wind Speed: {weather.current.wind_speed_10m} m/s</p>
                  </>
                )}
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default DetailView;
