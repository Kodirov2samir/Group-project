async function getCoordinates() {
  let place = document.getElementById("place").value;
  let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    place
  )}`;

  let response = await fetch(url);
  let data = await response.json();

  let lat = data[0].lat;
  let lon = data[0].lon;

  var map = L.map("map").setView([lat, lon], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  var locations = [
  
    
     {
      coords: [41.0056, 71.6436],
      text: "<b>Namangan City Center</b><br>🏙️ Main city square",
    },
    {
      coords: [41.0009, 71.6726],
      text: "<b>Namangan State University</b><br>🎓 Education",
    },
    {
      coords: [41.003, 71.628],
      text: "<b>Central Park</b><br>🌳 Relaxing area",
    },
    {
      coords: [41.0125, 71.6717],
      text: "<b>Namangan Railway Station</b><br>🚉 Transport hub",
    },
    {
      coords: [41.0082, 71.6521],
      text: "<b>Babur Park</b><br>🌲 Popular park",
    },
    {
      coords: [41.0067, 71.6535],
      text: "<b>Namangan Regional Hospital</b><br>🏥 Healthcare",
    },
    {
      coords: [41.0095, 71.6680],
      text: "<b>Namangan Grand Mosque</b><br>🕌 Religious site",
    },
    {
      coords: [41.0022, 71.6400],
      text: "<b>Namangan Stadium</b><br>🏟️ Sports",
    },
   {
      coords: [41.0132, 71.6448],
      text: "<b>Namangan Zoo</b><br>🦁 Family attraction",
    },
    {
      coords: [41.0078, 71.6612],
      text: "<b>Namangan Drama Theater</b><br>🎭 Culture",
    },
    {
      coords: [41.0110, 71.6485],
      text: "<b>Namangan Regional Library</b><br>📚 Library",
    },
    {
      coords: [41.0045, 71.6589],
      text: "<b>Chorsu Bazaar</b><br>🛒 Local market",
    },
    {
      coords: [41.0150, 71.6500],
      text: "<b>Navbahor Park</b><br>🌼 Recreation",
    },
    {
      coords: [41.0089, 71.6705],
      text: "<b>Namangan Art Gallery</b><br>🖼️ Art",
    }
  ];

  locations.forEach((loc) => {
    L.marker(loc.coords).addTo(map).bindPopup(loc.text);
  });
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", getCoordinates);
// Создаём карту (центр изначально Ташкент)
function hi() {
  const map = L.map("map").setView([41.3111, 69.2797], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // Add Namangan locations
  var locations = [
    {
      coords: [41.0056, 71.6436],
      text: "<b>Namangan City Center</b><br>🏙️ Main city square",
    },
    {
      coords: [41.0009, 71.6726],
      text: "<b>Namangan State University</b><br>🎓 Education",
    },
    {
      coords: [41.003, 71.628],
      text: "<b>Central Park</b><br>🌳 Relaxing area",
    },
    {
      coords: [41.0125, 71.6717],
      text: "<b>Namangan Railway Station</b><br>🚉 Transport hub",
    },
    {
      coords: [41.0082, 71.6521],
      text: "<b>Babur Park</b><br>🌲 Popular park",
    },
    {
      coords: [41.0067, 71.6535],
      text: "<b>Namangan Regional Hospital</b><br>🏥 Healthcare",
    },
    {
      coords: [41.0095, 71.6680],
      text: "<b>Namangan Grand Mosque</b><br>🕌 Religious site",
    },
    {
      coords: [41.0022, 71.6400],
      text: "<b>Namangan Stadium</b><br>🏟️ Sports",
    },
    {
      coords: [41.0132, 71.6448],
      text: "<b>Namangan Zoo</b><br>🦁 Family attraction",
    },
    {
      coords: [41.0078, 71.6612],
      text: "<b>Namangan Drama Theater</b><br>🎭 Culture",
    },
    {
      coords: [41.0110, 71.6485],
      text: "<b>Namangan Regional Library</b><br>📚 Library",
    },
    {
      coords: [41.0045, 71.6589],
      text: "<b>Chorsu Bazaar</b><br>🛒 Local market",
    },
    {
      coords: [41.0150, 71.6500],
      text: "<b>Navbahor Park</b><br>🌼 Recreation",
    },
    {
      coords: [41.0089, 71.6705],
      text: "<b>Namangan Art Gallery</b><br>🖼️ Art",
    }
  ];

  locations.forEach((loc) => {
    L.marker(loc.coords).addTo(map).bindPopup(loc.text);
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        map.setView([lat, lng], 15);

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup("📍 Siz bu erda siz!")
          .openPopup();
      },
      () => {
        alert("Не удалось определить местоположение.");
      }
    );
  } else {
    alert("Ваш браузер не поддерживает геолокацию.");
  }
}
// ...existing code...

document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView([41.3111, 69.2797], 10); // Tashkent as default
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);
});
