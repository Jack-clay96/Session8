//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
	
	//set up listener for button click
	$(document).on('click', getPosition);
	
	//change time box to show message
	$('#time').val("Press the button to get location data");
	
});


//Call this function when you want to get the current position
function getPosition() {
	
	//change time box to show updated message
	$('#time').val("Getting data...");
	
	//instruct location service to get position with appropriate callbacks
	navigator.geolocation.getCurrentPosition(successPosition, failPosition);
}


//called when the position is successfully determined
function successPosition(position) {
	
	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	var time = position.timestamp;
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
    
    //work out the actual time. Time above is the unix time
    var unixtime = new Date(position.timestamp);
    var date = unixtime.toDateString();
    
    //Other properities related to where the user is
    var time = unixtime.toTimeString();
    
	//OK. Now we want to update the display with the correct values
	$('#date').val("Recieved:" + date);
    $('#time').val(time);
	$('#lattext').val(latitude);
	$('#longtext').val(longitude);
}

//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
	$('#date').val("Error getting data: " + error);
	$('#time').val("Error getting data: " + error);
}