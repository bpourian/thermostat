function locateMe() {
  this.lat = '';
  this.lon = '';
}


locateMe.prototype.getLocation = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.geoPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
};

locateMe.prototype.geoPosition = function (position) {
  this.lat = position.coords.latitude;
  this.lon = position.coords.longitude;
};


// function getLocation() {
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(geoPosition);
// } else {
//   x.innerHTML = "Geolocation is not supported by this browser.";
// }
// }
//
// function geoPosition(position) {
//
// this.lat = position.coords.latitude;
// this.lon = position.coords.longitude;
// }
