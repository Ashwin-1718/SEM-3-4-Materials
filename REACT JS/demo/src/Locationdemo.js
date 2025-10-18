import React, { useState, useEffect } from 'react';
// import './Locationdemo.css'; 

const LocationDemo = () => {
    const [location, setLocation] = useState({ 
      lat: null, 
      lon: null,
      accuracy: null
    });
    const [error, setError] = useState("");
    const [isWatching, setIsWatching] = useState(false);

    useEffect(() => {
        if ("geolocation" in navigator) {
            const watchId = navigator.geolocation.watchPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        accuracy: position.coords.accuracy
                    });
                    setError("");
                    setIsWatching(true);
                },
                (err) => {
                    setError(err.message);
                    setIsWatching(false);
                },
                {
                    enableHighAccuracy: true,
                    maximumAge: 10000,
                    timeout: 5000
                }
            );
            
            return () => {
                navigator.geolocation.clearWatch(watchId);
            };
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    }, []);

    const openMap = () => {
        const url = `https://www.google.com/maps?q=${location.lat},${location.lon}`;
        window.open(url, "_blank");
    };

    const getAccuracyColor = (accuracy) => {
        if (accuracy > 100) return 'red';
        if (accuracy > 50) return 'orange';
        return 'green';
    };

    return (
        <div className="location-container">
            <h1 className="location-title">📍 Live Location Tracker</h1>
            
            {error ? (
                <p className="error-message">Error: {error}</p>
            ) : (
                <>
                    <div className="coordinates">
                        <p className={`coordinate-value ${location.lat ? 'ready' : ''}`}>
                            Latitude: {location.lat ? location.lat.toFixed(6) : <span className="loading-indicator" />}
                        </p>
                        <p className={`coordinate-value ${location.lon ? 'ready' : ''}`}>
                            Longitude: {location.lon ? location.lon.toFixed(6) : <span className="loading-indicator" />}
                        </p>
                        
                        {location.accuracy && (
                            <>
                                <p>Accuracy: ±{Math.round(location.accuracy)} meters</p>
                                <div className="accuracy-indicator">
                                    <div 
                                        className="accuracy-bar" 
                                        style={{
                                            width: `${100 - Math.min(location.accuracy, 100)}%`,
                                            backgroundColor: getAccuracyColor(location.accuracy)
                                        }}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    
                    <button 
                        className="map-button"
                        onClick={openMap} 
                        disabled={!location.lat || !location.lon}
                    >
                        {isWatching ? "Open in Google Maps" : "Acquiring Location..."}
                    </button>
                </>
            )}
        </div>
    );
};

export default LocationDemo;