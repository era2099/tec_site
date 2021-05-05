// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 32.53066024615153, lng: -116.98707079071023 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }