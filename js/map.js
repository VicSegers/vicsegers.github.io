const html = String.raw;
const layers = {
  light: L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"),
  dark: L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png")
};

const map = L.map("map", {
  center: [4.2105, 101.9758],
  zoom: 6,
  layers: [layers.light],
});

L.control.layers(layers).addTo(map);

const kul = new L.LatLng(2.7418, 101.7016);
const melaka = new L.LatLng(2.1893, 102.2494);
const kualaLumpur = new L.LatLng(3.1487, 101.6935);
const tamanNegara = new L.LatLng(4.6369, 102.4071);
const cameronHighlands = new L.LatLng(4.4678, 101.3847);
const penang = new L.LatLng(5.2629, 100.48);
const perhentianIslands = new L.LatLng(5.9099, 102.7473);

const locations = [
  kul,
  melaka,
  kualaLumpur,
  tamanNegara,
  cameronHighlands,
  penang,
  perhentianIslands,
];

const routes = [
  {
    type: "bus",
    duration: "2h",
  },
  {
    type: "bus",
    duration: "2h 30m",
  },
  {
    type: "bicycle",
    duration: "?",
  },
  {
    type: "bicycle",
    duration: "?",
  },
  {
    type: "bicycle",
    duration: "?",
  },
  {
    type: "bicycle",
    duration: "?",
  },
  {
    type: "plane",
    duration: "?",
  },
];

for (let i = 0; i < locations.length - 1; i++) {
  const route = routes[i];
  const location1 = locations[i];
  const location2 = locations[i + 1];

  const path = new L.polyline([[location1, location2]]).addTo(map);

  const routeDecorator = L.polylineDecorator(path, {
    patterns: [
      {
        offset: "50%",
        repeat: 0,
        symbol: L.Symbol.marker({
          markerOptions: {
            icon: L.divIcon({
              className: "fa-marker",
              html: html` <div class="tooltip"> <i class="fa-solid fa-${route.type}"></i> <span class="tooltiptext">duration: ${route.duration}</span> </div> `,
              iconSize: [20, 20],
              iconAnchor: [10, 10],
            }),
          }
        }),
      },
      {
        offset: "34%",
        repeat: "34%",
        symbol: L.Symbol.arrowHead({
          pixelSize: 10,
          polygon: false,
          pathOptions: { stroke: true },
        }),
      },
    ]
  }).addTo(map);
}
