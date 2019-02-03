$(document).ready(function(){
    var clicked = true;
    $('.nav-tabs a[href="#Events"]').click(function(){
        $.get("/map/findLocations",function(data, status){
        }).done(function(res) {
          if(res.status === "success"){
              var mensaje = res.data[0].username + "  latitude:  "+ res.data[0].latitude + "   longitude:  "+ res.data[0].longitude;
              res.data = $("#newData").append(JSON.stringify(mensaje));
          }
          });
    }),
    $("#start").click(function(){
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude}
        if(clicked){
            $("#start").css('background-color', '#ff9999');
            $("#start").val('Stop Tracking');
            clicked = false;
            sendData();
            //if(!clicked) timer = setInterval(sendData,5000);
        }else{
            $("#start").css('background-color', '#668cff');
            $("#start").val('Start Tracking');
            clicked = true;
            //clearInterval(timer);
        }
        function sendData(){
            $.post("../map/saveLocation", {latitude:pos.lat,longitude:pos.lng}).done(function(res) {
                if(res.status === "success"){
                  console.log("POSITION ADDED");
                }else{
                  $("#failed").show();
                }
                })
            }
    });
    
});
});

function initMap() {
    // The location of Uluru
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4});
    // The marker, positioned at Uluru
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude}
    map.setCenter(pos);
    map.setZoom(18);
    var marker = new google.maps.Marker({
        position: pos,
        map: map
    });
    map.addMarker(marker);
    ;});}
            }