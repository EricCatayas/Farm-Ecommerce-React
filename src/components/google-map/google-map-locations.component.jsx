import "./google-map-locations.styles.css";
import { useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";


const GoogleMapLocations = () => {

    const google_maps_api_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const centerCoordinates = { lat: 12.014066, lng: 122.28397 };
    const {isLoaded} = useLoadScript({googleMapsApiKey:google_maps_api_key});
    
    const [selectedMarker, setSelectedMarker] = useState(null);

    const storeLocations = [
      {
        id: 1,
        position: { lat: 11.043493583745258, lng: 124.01034383373327 },
        description: "Store 1 Store",
      },
      {
        id: 2,
        position: { lat: 11.380526676777817, lng: 124.47995213400539 },
        description: "Store 2 Store",
      },
      {
        id: 3,
        position: { lat: 11.34207579055172, lng: 122.82292190103202 },
        description: "Lope De Vega 2 Store",
      },
      {
        id: 4,
        position: { lat: 12.279080724971816, lng: 124.66066435020548 },
        description: "Burias Store",
      },
      {
        id: 5,
        position: { lat: 13.66649220974446, lng: 123.37355766491665 },
        description: "Mount Isarog Store",
      },
    ];

    if(isLoaded){
        return (
          <GoogleMap
            zoom={6}
            center={centerCoordinates}
            mapContainerClassName="google-map-container mt-2 mb-5"
          >
            {storeLocations.map((store) => (
              <Marker
                key={store.id}
                position={store.position}
                icon={"/store-marker-32.png"}
                onClick={() => {
                  setSelectedMarker(store);
                }}
              />
            ))}

            {selectedMarker && (
              <InfoWindow
                position={selectedMarker.position}
                onCloseClick={() => {
                  setSelectedMarker(null);
                }}
                options={{
                  pixelOffset: new window.google.maps.Size(0, -30),
                }}
              >
                <div>
                  <p>{selectedMarker.description}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        );
    }
    else 
    {
        return(
            <div className="row">
                <h1>Unable to load maps</h1>
            </div>
        )
    }
}

export default GoogleMapLocations;