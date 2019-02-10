var map;
var longitudeg = [];
var latitudeg = [];
$(document).ready(function(){
    $('.nav-tabs a[href="#Historial"]').click(function(){
        $.get("/map/findLocations",function(data, status){
        }).done(function(res) {
          if(res.status === "success"){
              for(i = 0; i< res.data.length; i++) {
                $('#addr'+i).html('<button type="button" data-toggle="modal" data-target="#myModal" onclick="modal('+(i+1)+')" id="button'+(i+1)+'">'+res.data[i].trackname+'</button>'+
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

function modal(i){
    $.get("/map/findLocations/"+$("#button"+i).text(),function(data, status){
    }).done(function(res){
        if(res.status==="success"){
            $("#titulo").text("RUTA  "+res.data[0].trackname);
            map =  new google.maps.Map(document.getElementById('map2'), {zoom: 4});
            for(j=0;j<res.data[0].latitude.length;j++){
                var pos = {
                    lat: parseFloat(res.data[0].latitude[j]),
                    lng: parseFloat(res.data[0].longitude[j])}
                    map.setCenter(pos);
                map.setZoom(18);
                placeMarker(pos,map);
            }
        }
    })
    }

function trackin(){
    if($("#start").val()== "Start tracking"){
        $("#start").css('background-color', '#ff9999');
        $("#start").val('Stop Tracking');
        interval = setInterval(function(){
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                placeMarker(pos,map);
                saving(position);
        });
    },5000);
}else{
    clearInterval(interval);
    $("#start").val('Start tracking');
    $("#start").css('background-color', '#80ccff');
    $.post("../map/saveLocation", {latitude:latitudeg,longitude:longitudeg,trackname:$("#track").val()}).done(function(res) {
        if(res.status === "success"){
          console.log("POSITION ADDED");
        }else{
          $("#failed").show();
        }
        });
    longitude = [];
    latitude = [];
}
}

function saving(position){
    longitudeg.push((position.coords.longitude).toString());
    latitudeg.push((position.coords.latitude).toString());
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