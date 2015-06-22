var beach1=new google.maps.LatLng(-3.850000,-32.450001);
var beach2=new google.maps.LatLng(21.78333,-72.28333);
var beach3=new google.maps.LatLng(35.51667,12.58333);
var beach4=new google.maps.LatLng(21.593276,-81.543488);
var beach5=new google.maps.LatLng(38.758889, 1.435096);
var beach6=new google.maps.LatLng(-4.292639, 55.700159);
var beach7=new google.maps.LatLng(11.965173, 121.922643);
var beach8=new google.maps.LatLng(18.328276, -65.315432);
var beach9=new google.maps.LatLng(-20.280407, 149.038658);
var beach10=new google.maps.LatLng(35.831658, 23.443487);

var beachArray = [beach1, beach2, beach3, beach4, beach5, beach6, beach7, beach8, beach9, beach10];
var infoWindowContent =["No.1 Baia do Sancho","No.2 Grace Bay","No.3 Rabbit Beach","No.4 Playa Paraiso","No.5 Playa de Ses Illetes",
"No.6 Anse Lazio","No.7 White Beach","No.8 Flamenco Beach","No.9 Whitehaven Beach","No.10 Elafonissi Beach"];
var map;


function getInstagramData(theInstagramObj){
	console.log("Going to get a photo!");
	console.log(theInstagramObj);

	var apiKEY = 'f6fa6aecfd764bab98f01d90354cdf5e';
	var tagName = theInstagramObj;
	var instagramURL = 'https://api.instagram.com/v1/tags/' + tagName + '/media/recent?client_id=';
	var searchInstagramURL = instagramURL + apiKEY;
	console.log(searchInstagramURL);
	$.ajax({
		url: searchInstagramURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(err){
			console.log("Tears");
			console.log(err);
			$('#theInstagramResults').html('Sorry we can not find images through the TAG in Instagram.');
		},
		success: function(theData){
			console.log("Yes");
			console.log(theData);
			
			console.log(theData.data[0].images.low_resolution.url);

// 


// <div id="slider">
// 		      <ul id="categories">
// 		        <li class="category">
// 		          <h2>Instagram #Photos</h2>
// 		          <a href="#"><div id="theInstagramResults"></div></a>
// 		        </li>
// 		      </ul>
// 		      <a class="prev disabled"></a> <a class="next disabled"></a>
// 		      <div style="clear:both"></div>
// 		    </div>
// 




			$('#theInstagramResults').html('<p id="loadingMsg">The first 10 images from Instagram with the tag of the BEACH.</p>');
			for(i=0; i<10; i++){
				var theImage = theData.data[i].images.low_resolution.url;
				var instagramLike = theData.data[i].likes.count;
				console.log("Likes");
				console.log(instagramLike);
				// var theHTMLInstagramString ='<li class="category"><h2>' + '<img src="'+ theImage + '">';
				// theHTMLInstagramString +=  instagramLike + 'Likes</h2></li>';
				var theHTMLInstagramString ='<h2>' + '<img src="'+ theImage + '">';
				theHTMLInstagramString +=  instagramLike + 'Likes</h2>';
				$('#theInstagramResults').append(theHTMLInstagramString);
			}
			
			
		}
	});

}




// Set Map Properties
function initialize() {
  var mapProp = {
    center:beach5,
    zoom:2,
    mapTypeId:google.maps.MapTypeId.TERRAIN
  };
  // Create a Map Object
  map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

// map = new google.maps.Map(document.getElementById('map-canvas'), {
//     zoom: 4,
//     center: {lat: -28, lng: 137.883}
//   });
  // google.maps.event.addListener(map, 'click', function(event) {
  // placeMarker(event.latLng);
  // });

	for(var i=0;i<10;i++){
		//console.log(beachArray[i]);
		//Marker
	  var marker=[];
	  marker[i]=new google.maps.Marker({
	  position:beachArray[i],
	  });

	  marker[i].setMap(map);

	  //InfoWindow
	  var infowindow = [];
	  infowindow[i]= new google.maps.InfoWindow({
	  content: infoWindowContent[i]
	  });
	  infowindow[i].open(map,marker[i]);

	  var theInstagramObj = ["BaiadoSancho","GraceBay","RabbitBeach","PlayaParaiso","PlayadeSesIlletes",
	  "AnseLazio","WhiteBeach","FlamencoBeach","WhitehavenBeach","ElafonissiBeach"];
	  getInstagramData(theInstagramObj[i]);


	  // Zoom to 9 when clicking on marker
	  // google.maps.event.addListener(marker[i],'click',function() {
	  // map.setZoom(9);
	  // map.setCenter(marker[i].getPosition());
	  // });

	  // 3 seconds after the center of the map has changed, pan back to the marker
	  // window.setTimeout(function() {
	  //   map.panTo(marker[i].getPosition());
	  // },3000);
	}
  
  	
  

}

// function placeMarker(location) {
// 	//Marker
// 	var marker = new google.maps.Marker({
//     position: location,
//     map: map,
//   });
// 	//InfoWindow
// 	var infowindow = new google.maps.InfoWindow({
//     content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
//   });
//   infowindow.open(map,marker);

//   // Zoom to 9 when clicking on marker
//   google.maps.event.addListener(marker,'click',function() {
//   map.setZoom(9);
//   map.setCenter(marker.getPosition());
//   });
//   // 3 seconds after the center of the map has changed, pan back to the marker
//   window.setTimeout(function() {
//     map.panTo(marker.getPosition());
//   },3000);

// }


// Add an Event Listener to Load the Map
google.maps.event.addDomListener(window, 'load', initialize);

function liquidFill() {
// loadLiquidFillGauge("fillgauge1", 55);
// var config1 = liquidFillGaugeDefaultSettings();
// config1.circleColor = "#FF7777";
//     config1.textColor = "#FF4444";
//     config1.waveTextColor = "#FFAAAA";
//     config1.waveColor = "#FFDDDD";
//     config1.circleThickness = 0.2;
//     config1.textVertPosition = 0.2;
//     config1.waveAnimateTime = 1000;
    // loadLiquidFillGauge("fillgauge2", 28, config1);
    var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#178BCA";
    config2.textColor = "#045681";
    config2.waveTextColor = "#A4DBf8";
    config2.waveColor = "#178BCA";
    config2.circleThickness = 0.1;
    config2.circleFillGap = 0.2;
    config2.textVertPosition = 0.8;
    config2.waveAnimateTime = 2000;
    config2.waveHeight = 0.3;
    config2.waveCount = 1;
    loadLiquidFillGauge("fillgauge3", 70, config2);
    // var config3 = liquidFillGaugeDefaultSettings();
    // config3.textVertPosition = 0.8;
    // config3.waveAnimateTime = 5000;
    // config3.waveHeight = 0.15;
    // config3.waveAnimate = false;
    // config3.waveOffset = 0.25;
    // config3.valueCountUp = false;
    // config3.displayPercent = false;
    // loadLiquidFillGauge("fillgauge4", 50, config3);
    // var config4 = liquidFillGaugeDefaultSettings();
    // config4.circleThickness = 0.15;
    // config4.circleColor = "#808015";
    // config4.textColor = "#555500";
    // config4.waveTextColor = "#FFFFAA";
    // config4.waveColor = "#AAAA39";
    // config4.textVertPosition = 0.8;
    // config4.waveAnimateTime = 1000;
    // config4.waveHeight = 0.05;
    // config4.waveAnimate = true;
    // config4.waveRise = false;
    // config4.waveOffset = 0.25;
    // config4.textSize = 0.75;
    // config4.waveCount = 3;
    // loadLiquidFillGauge("fillgauge5", 60.44, config4);
    // var config5 = liquidFillGaugeDefaultSettings();
    // config5.circleThickness = 0.4;
    // config5.circleColor = "#6DA398";
    // config5.textColor = "#0E5144";
    // config5.waveTextColor = "#6DA398";
    // config5.waveColor = "#246D5F";
    // config5.textVertPosition = 0.52;
    // config5.waveAnimateTime = 5000;
    // config5.waveHeight = 0;
    // config5.waveAnimate = false;
    // config5.waveCount = 2;
    // config5.waveOffset = 0.25;
    // config5.textSize = 1.2;
    // config5.minValue = 30;
    // config5.maxValue = 150
    // config5.displayPercent = false;
    // loadLiquidFillGauge("fillgauge6", 120, config5);
}
window.onclick = myFunction;

// If the user clicks in the window, set the background color of <body> to yellow
function myFunction() {
    // document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
    liquidFill();
}