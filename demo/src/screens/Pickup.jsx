import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
	import.meta.env.VITE_MAPBOX_KEY ?? process.env.VITE_MAPBOX_KEY;

const Pickup = () => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(106.8451); // Longitude Jakarta
	const [lat, setLat] = useState(-6.2088); // Latitude Jakarta
	const [zoom, setZoom] = useState(9);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (map.current) return; // initialize map only once

		const timeoutId = setTimeout(() => {
			setIsError(true);
		}, 5000);

		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v12",
			center: [lng, lat],
			zoom: zoom,
		});

		map.current.on("load", () => {
			setIsLoading(false);
			clearTimeout(timeoutId);

			// Get user's location
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { longitude, latitude } = position.coords;
					setLng(longitude);
					setLat(latitude);
					map.current.flyTo({ center: [longitude, latitude], zoom: 14 });
				},
				(error) => {
					console.error("Error getting location:", error);
				}
			);
		});

		map.current.on("error", (error) => {
			setIsError(true);
			console.error("Map error:", error);
		});
	}, []);

	return (
		<div className="w-full h-screen overflow-hidden relative">
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center z-10">
					<LoadingSpinner />
				</div>
			)}
			{isError && (
				<div className="absolute inset-0 flex items-center justify-center z-10 text-gray-600">
					<p>Gagal memuat peta. Silakan coba lagi nanti.</p>
				</div>
			)}
			<div ref={mapContainer} className="w-full h-full" />
		</div>
	);
};

const LoadingSpinner = () => (
	<svg
		className="animate-spin h-10 w-10 text-gray-500"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
	>
		<circle
			className="opacity-25"
			cx="12"
			cy="12"
			r="10"
			stroke="currentColor"
			strokeWidth="4"
		></circle>
		<path
			className="opacity-75"
			fill="currentColor"
			d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		></path>
	</svg>
);

export default Pickup;
