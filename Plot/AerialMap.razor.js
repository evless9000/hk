let map;

export function initMap(element, lat, lng, zoom) {
    map = window.L.map(element).setView([lat, lng], zoom);
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

export function loadGeoJson(data) {
    if (map) {
        window.L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "#2ecc71", // Parakeet Green
                    weight: 4,
                    opacity: 0.8
                };
            }
        }).addTo(map);
    }
}

export function cleanupMap() {
    if (map) {
        map.remove();
    }
}