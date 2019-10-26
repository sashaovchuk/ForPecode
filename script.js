function initMap() {
    let location = {lat: 49.795450, lng: 24.006286}
    let map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 15
    });
    let marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: './Images/background/pin.png'
    })
  }