let map = L.map('map-container').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

function addDummyMarkers() {
  const wheelchairIcon = L.divIcon({
    html: '<span style="font-size: 1.5em; color: blue;">♿</span>',
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24]
  });

  L.marker([51.505, -0.09], { icon: wheelchairIcon })
    .addTo(map)
    .bindPopup("Accessible Library");

  L.marker([51.51, -0.1], { icon: wheelchairIcon })
    .addTo(map)
    .bindPopup("Community Center with Ramp");
}

addDummyMarkers();
