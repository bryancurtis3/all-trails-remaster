map.on('load', () => {
    map.addLayer({
        id: 'terrain-data',
        type: 'line',
        source: {
            type: 'vector',
            url: 'mapbox://mapbox.mapbox-terrain-v2'
        },
        'source-layer': 'contour'
    });
    map.addLayer({
        id: 'point',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: start
                }
              }
            ]
          }
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#3887be'
        }
      });
});



/* https://api.mapbox.com/directions/v5/mapbox/walking/-50.97365,-72.8741;-51.073232,-73.09384?geometries=geojson&access_token=pk.eyJ1IjoiYWxleGdhIiwiYSI6ImNrdjFmMGZvejZsYmEydnQ5ZjcwbDRyZnIifQ.EVCmZIQHzV7y-DjXXWW3mg */
