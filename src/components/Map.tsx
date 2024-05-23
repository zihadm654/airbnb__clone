"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { icon } from "leaflet";

import useCountries from "@/hooks/use-countries";

const ICON = icon({
  iconUrl:
    "https://images.vexels.com/media/users/3/131261/isolated/preview/b2e48580147ca0ed3f970f30bf8bb009-karten-standortmarkierung.png",
  iconSize: [50, 50],
});

export default function Map({ locationValue }: { locationValue: string }) {
  const { getByValue } = useCountries();
  const latLang = getByValue(locationValue)?.latlng;
  return (
    <MapContainer
      scrollWheelZoom={false}
      className="relative z-0 h-[50vh] rounded-lg"
      center={latLang ?? [52.505, -0.09]}
      zoom={8}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={latLang ?? [52.505, -0.09]} icon={ICON} />
    </MapContainer>
  );
}
