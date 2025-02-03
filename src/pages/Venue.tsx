import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Venue = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "", // You'll need to add your Google Maps API key
        version: "weekly"
      });

      const { Map } = await loader.importLibrary("maps");

      // Akure coordinates
      const position = { lat: 7.2571, lng: 5.2058 };

      if (mapRef.current) {
        new Map(mapRef.current, {
          center: position,
          zoom: 14,
        });
      }
    };

    initMap();
  }, []);

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-dancing text-5xl text-center text-rose-600 mb-12">Wedding Venue</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Traditional Wedding</h2>
            <p className="text-gray-700 mb-2">Friday, April 25, 2025</p>
            <p className="text-gray-700 mb-4">11:00 AM to 3:00 PM</p>
            <p className="text-gray-700">Akure, Ondo State, Nigeria</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wedding Reception</h2>
            <p className="text-gray-700 mb-2">Saturday, April 26, 2025</p>
            <p className="text-gray-700 mb-4">11:00 AM to 3:00 PM</p>
            <p className="text-gray-700">Akure, Ondo State, Nigeria</p>
          </div>
        </div>

        <div
          ref={mapRef}
          className="w-full h-[400px] rounded-lg shadow-lg"
        />

        <div className="mt-8 text-center text-gray-600">
          <p>For specific directions or any questions about the venue,</p>
          <p>please contact our wedding coordinators listed in the Schedule page.</p>
        </div>
      </div>
    </div>
  );
};

export default Venue;