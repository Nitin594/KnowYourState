const map = L.map("map").setView([20.5937, 78.9629], 5);
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors, Coded by Nitin with 💗';

const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

// Adding custom icon
const icon = L.icon({
  iconUrl: "icon.png",
  iconSize: [50, 50],
});

const generateList = () => {
  const ul = document.querySelector(".list");

  indianStatesAndUTs.forEach((state) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const a = document.createElement("a");
    a.addEventListener("click", () => {
      flyTOState(state);
    });
    const p = document.createElement("p");

    div.appendChild(a);
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);

    div.classList.add("state-list");
    a.innerText = state.properties.name;
    a.href = "#";
    p.innerText = `Capital: ${state.properties.capital}`;
  });
};

generateList();

function makePopupContent(state) {
  return `
    <div>
        <h3>${ state.properties.name}</h3>
        <p>Capital: ${state.properties.capital}</p>
        <p>Speciality: ${state.properties.speciality}</p>
        <p>Language: ${state.properties.language}</p>
        <p class="detail">${state.properties.details}</p>
    </div>
    `;
}
function onEachFeature(feature, layer) {
  layer.bindPopup(makePopupContent(feature), {
    closeButton: false,
    offset: L.point(0, -8),
  });
}

const statesLayer = L.geoJSON(indianStatesAndUTs, {
  onEachFeature: onEachFeature,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon });
  },
});

statesLayer.addTo(map);

function flyTOState(state) {
  map.flyTo(
    [state.geometry.coordinates[1], state.geometry.coordinates[0]],
    12,
    { duration: 3 }
  );
  setTimeout(() => {
    L.popup({ closeButton: false, offset: L.point(0, -8) })
      .setLatLng([state.geometry.coordinates[1], state.geometry.coordinates[0]])
      .setContent(makePopupContent(state))
      .openOn(map);
  }, 3000);
}

