var x = document.getElementById("currentLocation");		
function firstStoreLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(firstStorePosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function firstStorePosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var latlon = new google.maps.LatLng(lat, lon);
  var firstStoreLocation = {lat: 3.149726, lng: 101.712045};
  var secondStoreLocation = {lat: 3.072834, lng: 101.606314};
  var thirdStoreLocation = {lat: 3.133354, lng: 101.686821};
  var mapholder = document.getElementById('mapholder')
  mapholder.style.height = '500px';
  mapholder.style.width = '50%';
  var myOptions = {
    center:firstStoreLocation,zoom:20,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  }
    
  var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
  var marker = new google.maps.Marker({position:latlon,map:map,title: 'You Are Here!'});
  var firstStore = new google.maps.Marker({
    position: firstStoreLocation,
    map: map,
    title: 'Puadike Store Pavilion Bukit Bintang'
  });
    var secondStore = new google.maps.Marker({
    position: secondStoreLocation,
    map: map,
    title: 'Puadike Store Sunway Pyramid'
  });
    var thirdStore = new google.maps.Marker({
    position: thirdStoreLocation,
    map: map,
    title: 'Puadike Store Nu Sentral Mall'
  });
  firstStore.addListener('click', function(){
  map.setZoom(14);
  map.setCenter(firstStore.getPosition());
  });
  var firstStoreDescription = '<div id="firstStoreAddress">'+
      '<h1 id="firstHeading" class="Headings">Puadike Store Pavilion Bukit Bintang</h1>'+
      '<div class="bodyContent">'+
      '<p><b>Puadike Store Pavilion Bukit Bintang</b><br/>' +
      '5.01.01, Pavilion, 168, Jalan Bukit Bintang, Bukit Bintang,'+
      '55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</p>'
      '</div>'+
      '</div>';
  var infowindowforPavilion = new google.maps.InfoWindow({
  content:	firstStoreDescription
  });
  firstStore.addListener('click', function() {
  infowindowforPavilion.open(map, firstStore);
  });
  //
  secondStore.addListener('click', function(){
  map.setZoom(14);
  map.setCenter(secondStore.getPosition());
  });
  var secondStoreDescription = '<div id="secondStoreAddress">'+
      '<h1 id="secondHeading" class="Headings">Puadike Store Sunway Pyramid</h1>'+
      '<div class="bodyContent">'+
      '<p><b>Puadike Store Sunway Pyramid</b><br/>' +
      '3, Jalan PJS 11/15, Bandar Sunway, '+
      '46150 Petaling Jaya, Selangor</p>'
      '</div>'+
      '</div>';
  var infowindowforSunwayPyramid = new google.maps.InfoWindow({
  content:	secondStoreDescription
  });
  secondStore.addListener('click', function() {
  infowindowforSunwayPyramid.open(map, secondStore);
  });
  //
  thirdStore.addListener('click', function(){
  map.setZoom(14);
  map.setCenter(thirdStore.getPosition());
  });
  var thirdStoreDescription = '<div id="thirdStoreAddress">'+
      '<h1 id="thirdHeading" class="Headings">Puadike Store Nu Sentral</h1>'+
      '<div class="bodyContent">'+
      '<p><b>Puadike Store Nu Sentral</b><br/>' +
      'L2-04, Nu Sentral, 201, Jalan Tun Sambanthan, Brickfields,'+
      '50470 Kuala Lumpur, Federal Territory of Kuala Lumpur</p>'
      '</div>'+
      '</div>';
  var infowindowforNuSentral = new google.maps.InfoWindow({
  content:	thirdStoreDescription
  });
  thirdStore.addListener('click', function() {
  infowindowforNuSentral.open(map, thirdStore);
  });
}
//Second Store Location
function secondStoreLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(secondStorePosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function secondStorePosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var latlon = new google.maps.LatLng(lat, lon);
  var firstStoreLocation = {lat: 3.149726, lng: 101.712045};
  var secondStoreLocation = {lat: 3.072834, lng: 101.606314};
  var thirdStoreLocation = {lat: 3.133354, lng: 101.686821};
  var mapholder = document.getElementById('mapholder')
  mapholder.style.height = '500px';
  mapholder.style.width = '50%';
  var myOptions = {
    center:secondStoreLocation,zoom:20,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  }
    
  var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
  var marker = new google.maps.Marker({position:latlon,map:map,title: 'You Are Here!'});
  var firstStore = new google.maps.Marker({
    position: firstStoreLocation,
    map: map,
    title: 'Puadike Store Pavilion Bukit Bintang'
  });
    var secondStore = new google.maps.Marker({
    position: secondStoreLocation,
    map: map,
    title: 'Puadike Store Sunway Pyramid'
  });
    var thirdStore = new google.maps.Marker({
    position: thirdStoreLocation,
    map: map,
    title: 'Puadike Store Nu Sentral Mall'
  });
  firstStore.addListener('click', function(){
  map.setZoom(14);
  map.setCenter(firstStore.getPosition());
  });
  var firstStoreDescription = '<div id="firstStoreAddress">'+
      '<h1 id="firstHeading" class="Headings">Puadike Store Pavilion Bukit Bintang</h1>'+
      '<div class="bodyContent">'+
      '<p><b>Puadike Store Pavilion Bukit Bintang</b><br/>' +
      '5.01.01, Pavilion, 168, Jalan Bukit Bintang, Bukit Bintang,'+
      '55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</p>'
      '</div>'+
      '</div>';
  var infowindowforPavilion = new google.maps.InfoWindow({
  content:	firstStoreDescription
  });
  firstStore.addListener('click', function() {
  infowindowforPavilion.open(map, firstStore);
  });
  //
  secondStore.addListener('click', function(){
  map.setZoom(14);
  map.setCenter(secondStore.getPosition());
  });
  var secondStoreDescription = '<div id="secondStoreAddress">'+
      '<h1 id="secondHeading" class="Headings">Puadike Store Sunway Pyramid</h1>'+
      '<div class="bodyContent">'+
      '<p><b>Puadike Store Sunway Pyramid</b><br/>' +
      '3, Jalan PJS 11/15, Bandar Sunway, '+
      '46150 Petaling Jaya, Selangor</p>'
      '</div>'+
      '</div>';
  var infowindowforSunwayPyramid = new google.maps.InfoWindow({
  content:	secondStoreDescription
  });
  secondStore.addListener('click', function() {
  infowindowforSunwayPyramid.open(map, secondStore);
  });
  //
  thirdStore.addListener('click', function(){
  map.setZoom(14);
  map.setCenter(thirdStore.getPosition());
  });
  var thirdStoreDescription = '<div id="thirdStoreAddress">'+
      '<h1 id="thirdHeading" class="Headings">Puadike Store Nu Sentral</h1>'+
      '<div class="bodyContent">'+
      '<p><b>Puadike Store Nu Sentral</b><br/>' +
      'L2-04, Nu Sentral, 201, Jalan Tun Sambanthan, Brickfields,'+
      '50470 Kuala Lumpur, Federal Territory of Kuala Lumpur</p>'
      '</div>'+
      '</div>';
  var infowindowforNuSentral = new google.maps.InfoWindow({
  content:	thirdStoreDescription
  });
  thirdStore.addListener('click', function() {
  infowindowforNuSentral.open(map, thirdStore);
  });
}
//Third Store Location
function thirdStoreLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(thirdStorePosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function thirdStorePosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var latlon = new google.maps.LatLng(lat, lon);
  var firstStoreLocation = {lat: 3.149726, lng: 101.712045};
  var secondStoreLocation = {lat: 3.072834, lng: 101.606314};
  var thirdStoreLocation = {lat: 3.133354, lng: 101.686821};
  var mapholder = document.getElementById('mapholder')
  mapholder.style.height = '500px';
  mapholder.style.width = '50%';
  var myOptions = {
    center:thirdStoreLocation,zoom:20,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  }
    
  var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
  var marker = new google.maps.Marker({position:latlon,map:map,title: 'You Are Here!'});
  var firstStore = new google.maps.Marker({
    position: firstStoreLocation,
    map: map,
    title: 'Puadike Store Pavilion Bukit Bintang'
  });
    var secondStore = new google.maps.Marker({
    position: secondStoreLocation,
    map: map,
    title: 'Puadike Store Sunway Pyramid'
  });
    var thirdStore = new google.maps.Marker({
    position: thirdStoreLocation,
    map: map,
    title: 'Puadike Store Nu Sentral Mall'
  });
  firstStore.addListener('click', function(){
  map.setZoom(14);
  map.setCenter(firstStore.getPosition());
  });
  var firstStoreDescription = '<div id="firstStoreAddress">'+
      '<h1 id="firstHeading" class="Headings">Puadike Store Pavilion Bukit Bintang</h1>'+
      '<div class="bodyContent">'+
      '<p><b>Puadike Store Pavilion Bukit Bintang</b><br/>' +
      '5.01.01, Pavilion, 168, Jalan Bukit Bintang, Bukit Bintang,'+
      '55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</p>'
      '</div>'+
      '</div>';
  var infowindowforPavilion = new google.maps.InfoWindow({
  content:	firstStoreDescription
  });
  firstStore.addListener('click', function() {
  infowindowforPavilion.open(map, firstStore);
  });
  //
  secondStore.addListener('click', function(){
  map.setZoom(14);
  map.setCenter(secondStore.getPosition());
  });
  var secondStoreDescription = '<div id="secondStoreAddress">'+
      '<h1 id="secondHeading" class="Headings">Puadike Store Sunway Pyramid</h1>'+
      '<div class="bodyContent">'+
      '<p><b>Puadike Store Sunway Pyramid</b><br/>' +
      '3, Jalan PJS 11/15, Bandar Sunway, '+
      '46150 Petaling Jaya, Selangor</p>'
      '</div>'+
      '</div>';
  var infowindowforSunwayPyramid = new google.maps.InfoWindow({
  content:	secondStoreDescription
  });
  secondStore.addListener('click', function() {
  infowindowforSunwayPyramid.open(map, secondStore);
  });
  //
  thirdStore.addListener('click', function(){
  map.setZoom(14);
  map.setCenter(thirdStore.getPosition());
  });
  var thirdStoreDescription = '<div id="thirdStoreAddress">'+
      '<h1 id="thirdHeading" class="Headings">Puadike Store Nu Sentral</h1>'+
      '<div class="bodyContent">'+
      '<p><b>Puadike Store Nu Sentral</b><br/>' +
      'L2-04, Nu Sentral, 201, Jalan Tun Sambanthan, Brickfields,'+
      '50470 Kuala Lumpur, Federal Territory of Kuala Lumpur</p>'
      '</div>'+
      '</div>';
  var infowindowforNuSentral = new google.maps.InfoWindow({
  content:	thirdStoreDescription
  });
  thirdStore.addListener('click', function() {
  infowindowforNuSentral.open(map, thirdStore);
  });
}
//Show Error If any problem occured
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
