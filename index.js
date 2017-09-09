// Import Dot Env Variables
require('dotenv').config();

// Import Modules
var axios = require('axios');


// URL Parameters
var location = "40.5513798,-74.2798068";
var radius  = 500;
var types = "food,restaurant,bar";
var name = "chinese";

// Make a request for a user with a given ID 
axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?', {
    params: {
      location: location,
      radius: radius,
      types: types,
      name: name,
      key: process.env.GOOGLE_API_KEY,
    }
  })
  .then(function (response) {

    // Collect list of locations
    var placesArray = response.data.results;

    // Determine if any places were found
    if (placesArray.length == 0) {
      console.log("No places found");
    }
    else {
      console.log(placesArray[1]);

      // Get current location object
      var currentPlace = placesArray[1];

      // Get current location's attributes
      var placeName = currentPlace.name;
      var placeLat = currentPlace.geometry.location.lat;
      var placeLong = currentPlace.geometry.location.lng;
      var placePhotoReference = currentPlace.photos[0].photo_reference;
      var placeAddress = currentPlace.vicinity;


      console.log(placeName);
      console.log(placeLat);
      console.log(placeLong);
      console.log(placePhotoReference);
      console.log(placeAddress);


    }

    
  })
  .catch(function (error) {
    console.log(error);
  });


// Make a request for a user with a given ID 
axios.get('https://maps.googleapis.com/maps/api/place/photo?', {
    params: {
      maxwidth: 400,
      photoreference: "CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU",
      key: process.env.GOOGLE_API_KEY,
    }
  })
  .then(function (response) {
    
    console.log(response)
    
  })
  .catch(function (error) {
    console.log(error);
  });