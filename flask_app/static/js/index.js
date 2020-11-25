$(function () {
    // your code goes here
    $('#tb').click(function(){
        console.log("hello");
        $.getJSON('/get_data', {}, function(response) {
            console.log('response: '+ response[0]);
            for(key in response){
                console.log(response[key]);
            }
          });
          return false;
    });
 });