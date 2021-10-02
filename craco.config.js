module.exports = {
  // this helps with builds. sometimes tiles won't render when you bundle the build depending on other dependencies, this basically tells bable to skip it
  babel: {
    loaderOptions: {
      ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
    },
  },
  // basically mapping mapbox to maplibre. when react-map-gl looks for peer dependency mapbox-gl it will take maplibre instead
  webpack: {
    alias: {
      'mapbox-gl': 'maplibre-gl',
    },
  },
};
