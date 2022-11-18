/* Geolocalización*/
class mapa {
  constructor() {
    this.output = document.getElementById("out");

    this.latitude;
    this.longitude;
  }

  verificacion() {
    if (!navigator.geolocation) {
      this.output.innerHTML =
        "<p>Geolocation is not supported by your browser</p>";
      return;
    }

    this.output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(maps.posicion, maps.error);

    maps.inicio();
  }

  inicio() {
    var map = L.map("map-template").setView([-0.6100623, -85.8727913, 6.75], 5);

    const tileURL = "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tileURL2 = "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png";

    const tile = L.tileLayer(tileURL2);

    // Geolocation
    map.locate({
      enableHighAccuracy: true,
    });
    map.on("locationfound", (e) => {
      const coords = [e.latlng.lat, e.latlng.lng];
      const newMarker = L.marker(coords);
      newMarker.bindPopup("You are Here!");
      map.addLayer(newMarker);
    });

    map.addLayer(tile);
  }

  posicion(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    maps.output.innerHTML =
      '<b><p id="posicion">Latitud es ' +
      latitude +
      "° <br><br>Longitud es " +
      longitude +
      "°</p></b>";

    maps.latitude = latitude;
    maps.longitude = longitude;
  }

  error() {
    this.output.innerHTML = "Unable to retrieve your location";
  }
}

var maps = new mapa();
