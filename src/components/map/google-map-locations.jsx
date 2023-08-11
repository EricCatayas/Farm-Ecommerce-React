import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./google-map-locations.styles.css";
const GoogleMapLocations = () => {

    const google_maps_api_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const {isLoaded} = useLoadScript({googleMapsApiKey:google_maps_api_key});

    if(!isLoaded){
        return(
            <div className="row">
                <h1>Unable to load maps hehe</h1>
            </div>
        )
    }
    return(
        <GoogleMap zoom={6} center={{lat:12.014066, lng:122.283970}} mapContainerClassName="google-map-container my-5"/>
    )
}

export default GoogleMapLocations;