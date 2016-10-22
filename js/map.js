var map_wrapper = 'map_container';

var locations = [
	['CDP Suva City, Shop 22 Nutrimetics Downtown Boulevard, Ellery St', -18.139514, 178.425943, 8],
	['CDP Sigatoka Lot 7 Lakeba Subdivision', -18.141637, 177.507431, 7],
	['CDP Savusavu', -16.779911, 179.338110, 6],
	['CDP Nadi, 28 Queens Rd Martintar', -17.776676, 177.432700, 5],
	['Head Office,23 Matua St Walu Bay, Suva', -18.129491, 178.433422, 4],
	['CDP Ba, Main St Ba', -17.534650, 177.689936, 5],
	['CDP Labasa, Nasekula Rd', -16.431537, 179.368635, 3],
	['CDP Levuka ', -17.681723, 178.832302, 2],
	['1 Waterfront Rd, Lautoka, Fiji', -17.610359, 177.440145, 1]
];

function initialize() {
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(-17.500000, 178.832302),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		streetViewControl: false,
		scrollwheel: false,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		}
	};

	var map = new google.maps.Map(document.getElementById(map_wrapper), mapOptions);

	var infowindow = new google.maps.InfoWindow();

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
			icon: "img/marker.png"

		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}

}

google.maps.event.addDomListener(window, 'load', initialize);