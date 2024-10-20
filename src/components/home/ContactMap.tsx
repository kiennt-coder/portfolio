"use client"

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

// Import CSS
import 'leaflet/dist/leaflet.css';

// Import icons for marker and shadow
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fixing the default icon paths
const defaultIcon = L.icon({
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
    iconAnchor: [12, 41],  // Adjust if necessary
    popupAnchor: [0, -41]  // Adjust if necessary
});

export default function ContactMap() {

    return (
        <div className='h-80 md:mt-16 mt-10 rounded-lg overflow-hidden' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="500">
            <MapContainer center={[21.0283334, 105.854041]} zoom={13} scrollWheelZoom={false} className="size-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[21.0283334, 105.854041]} icon={defaultIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
