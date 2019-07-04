$(document).ready(function(){

    $('#submitWeather').click(function(){
    
    var city=$("#city").val();
    
    if(city !=''){
        
        $.ajax({

            url:"http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}",

    })
    }else{
    $("#error").html("Field cannot be empty");
    }

 }
