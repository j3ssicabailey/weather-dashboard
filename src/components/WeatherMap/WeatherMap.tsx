import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useWeather } from '../../context/useWeather';
import 'leaflet/dist/leaflet.css';
import './WeatherMap.css';
import L from 'leaflet';

// Fix for marker icon issue in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Component to recenter map when location changes
const ChangeMapView: React.FC<{ coordinates: [number, number] }> = ({ coordinates }) => {
    const map = useMap();
    
    useEffect(() => {
        map.setView(coordinates, map.getZoom());
    }, [coordinates, map]);
    
    return null;
};

const WeatherMap: React.FC = () => {
    const { weatherData } = useWeather();
    
    if (!weatherData) {
        return (
        <div className="weather-map-placeholder card">
            <p>Search for a location to see the map</p>
        </div>
        );
    }
    
    const { location, current } = weatherData;
    const coordinates: [number, number] = [location.lat, location.lon];
    
    return (
        <div className="weather-map card">
        <h2 className="weather-map-title">Weather Map</h2>
        <div className="map-container">
            <MapContainer 
            center={coordinates} 
            zoom={10} 
            className="leaflet-container"
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordinates}>
                <Popup>
                <div className="map-popup">
                    <strong>{location.name}, {location.country}</strong>
                    <div className="popup-weather-info">
                    <img 
                        src={current.condition.icon} 
                        alt={current.condition.text} 
                        className="popup-weather-icon" 
                    />
                    <span className="popup-temperature">{Math.round(current.temp_c)}°C</span>
                    </div>
                    <div>{current.condition.text}</div>
                </div>
                </Popup>
            </Marker>
            <ChangeMapView coordinates={coordinates} />
            </MapContainer>
        </div>
        </div>
    );
};

export default WeatherMap;