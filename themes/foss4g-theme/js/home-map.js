jQuery(document).ready(function ($) {	
	// map geojson
	var geojson = [
		{
			type: 'Feature',
		    geometry: {
		        type: 'Point',
		        coordinates: [-122.663247, 45.528419]
		    },
		    properties: {
		        title: 'Oregon Convention Center',
		        description: 'Main conference venue Wed-Fri.  777 NE Martin Luther King Jr Blvd, Portland, OR 97232',
		        type: 'main',
		        'marker-size': 'large',
		        'marker-color': '#4682B4',
		        'marker-symbol': 'star'
		    }
		},
		{
			type: 'Feature',
		    geometry: {
		        type: 'Point',
		        coordinates: [-122.68462,45.51182],
		    },
		    properties: {
		        title: 'Portland State University',
		        description: 'Workshop venue, Mon-Tue.<br><a href="https://2014.foss4g.org/schedule/workshops/" target="_window">Learn more</a>',
		        type: 'main',
		        'marker-size': 'medium',
		        'marker-color': '#4682B4',
		        'marker-symbol': 'star'
		    }
		},
		{
			type: 'Feature',
		    geometry: {
		        type: 'Point',
		        coordinates: [-122.680609, 45.528249],
		    },
		    properties: {
		        title: 'Natural Capital Center',
		        description: 'Opening party hosted by Ecotrust and Point 97 Tue. night. <a href="http://youareherereception.eventbrite.com/" target="_window">Learn more</a>',
		        type: 'main',
		        'marker-size': 'medium',
		        'marker-color': '#4682B4',
		        'marker-symbol': 'star'
		    }
		},		
		{
			type: 'Feature',
		    geometry: {
		        type: 'Point',
		        coordinates: [-122.718320, 45.510823],
		    },
		    properties: {
		        title: 'World Forestry Center',
		        description: 'Gala venue Thur. night<br><a href="http://2014.foss4g.org/schedule/social-events/" target="_window">Learn more</a>',
		        type: 'main',
		        'marker-size': 'medium',
		        'marker-color': '#4682B4',
		        'marker-symbol': 'star'
		    }
		},			
      	{
          	type: 'Feature',
          	geometry: {
              	type: 'Point',
              	coordinates: [-122.68584, 45.51836]
          	},  
          	properties: {
              	title: 'Eliot Center',
              	description: 'Code Sprint and WhereCamp venue, Sat. 13th.<br><a href="https://2014.foss4g.org/schedule/code-sprint/" target="_window">Learn more</a>',
              	type: 'main',
              	'marker-size': 'medium',
              	'marker-color': '#4682B4',
              	'marker-symbol': 'star'
          	}
      	},		
		{
			type: 'Feature',
		    geometry: {
		        type: 'Point',
		        coordinates: [-122.655558, 45.530711]
		    },
		    properties: {
		        title: 'Double Tree by Hilton Portland',
		        description: 'Main conference hotel.  Address - 1000 NE Multnomah Street, Portland, Oregon, 97232, USA<br><a href="http://doubletree3.hilton.com/en/hotels/oregon/doubletree-by-hilton-hotel-portland-RLLC-DT/index.html">Book Now</a>',
		        type: 'hotel',
		        'marker-size': 'large',
		        'marker-color': '#E32028',
		        'marker-symbol': 'lodging'
		    }
		}
	];

	//map on homepage
	var map = L.mapbox.map('map', 'foss4g2014.hjbf0lfe');
    var poi = L.mapbox.featureLayer().addTo(map);
    poi.setGeoJSON(geojson);
    map.fitBounds(poi.getBounds());
    map.scrollWheelZoom.disable();

    var mapNav = document.getElementById('map-nav');
    poi.eachLayer(function(marker) {
	  var link = mapNav.appendChild(document.createElement('li'));
	  link.className = 'item ';
	  link.className = marker.feature.properties.type;
	  link.href = '#';

	  // Populate content from each markers object.
	  link.innerHTML = marker.feature.properties.title;
	  link.onclick = function() {
	    if (/active/.test(this.className)) {
	      this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
	    } else {
	      var siblings = mapNav.getElementsByTagName('li');
	      for (var i = 0; i < siblings.length; i++) {
	        siblings[i].className = siblings[i].className
	          .replace(/active/, '').replace(/\s\s*$/, '');
	      };
	      this.className += ' active';
	      map.panTo(marker.getLatLng());
	      marker.openPopup();
	    }
	    return false;
	  };
	});

	var coordBox = document.getElementById('coordinates');
	map.on('move', function() {
		coordBox.innerHTML = map.getCenter();
	});
});