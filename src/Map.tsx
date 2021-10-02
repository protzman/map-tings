import DeckGL from 'deck.gl';
import ReactMapGL from 'react-map-gl';

const initialViewState = {
  longitude: 18.06,
  latitude: 59.32,
  zoom: 13,
};

interface MapProps {
  prefersDark: boolean;
}
export default function Map({ prefersDark }: MapProps) {
  return (
    <div
      id="map-wrapper"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
      }}
    >
      <DeckGL
        initialViewState={initialViewState}
        controller={{ doubleClickZoom: false }}
      >
        <ReactMapGL
          attributionControl={false}
          mapStyle={
            prefersDark
              ? 'http://localhost:8080/styles/dark/style.json'
              : 'http://localhost:8080/styles/light/style.json'
          }
        />
      </DeckGL>
    </div>
  );
}
