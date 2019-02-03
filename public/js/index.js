$(document).ready(function(){
    $('.nav-tabs a[href="#Historial"]').click(function(){
        $.get("/map/findLocations",function(data, status){
        }).done(function(res) {
          if(res.status === "success"){
              for(i = 0; i< res.data.length; i++) {
                var mensaje = res.data[i].username + "  latitude:  "+ res.data[i].latitude + "   longitude:  "+ res.data[i].longitude;
                $('#addr'+i).html("<td>"+ (i+1) +"</td>"+
                "</td><td><label>" +res.data[i].longitude+"</label>"+
                "</td><td><label>" +res.data[i].latitude+"</label></td>"+
                "<td><label>" +res.data[i].hour+"</label></td>"+
                "<td><label>" +res.data[i].date+"</label></td>");
                $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
                //$("#newData").append(JSON.stringify(mensaje));
            }
          }
          });
    }),
    $("#start").click(trackin);
});
var map;
function trackin(){
    if($("#start").val()== "Start tracking"){
        $("#start").css('background-color', '#ff9999');
        $("#start").val('Stop Tracking');
        interval = setInterval(function(){
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                placeMarker(pos,map);
                $.post("../map/saveLocation", {latitude:pos.lat,longitude:pos.lng}).done(function(res) {
                    if(res.status === "success"){
                      console.log("POSITION ADDED");
                    }else{
                      $("#failed").show();
                    }
                    })
        });
    },5000);
}else{
    clearInterval(interval);
    $("#start").val('Start tracking');
    $("#start").css('background-color', '#80ccff');
}
}

function initMap() {
    map =  new google.maps.Map(document.getElementById('map'), {zoom: 4});
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude}
    map.setCenter(pos);
    map.setZoom(18);
    placeMarker(pos,map);
    ;});}
}

function placeMarker(position, map) {
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
    map.panTo(position);
}