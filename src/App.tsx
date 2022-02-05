import * as React from "react";
import Map from "react-map-gl";

function App() {
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAP_API}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

export default App;
