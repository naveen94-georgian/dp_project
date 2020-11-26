"use strict";
$(function () {
    // your code goes here
    $('#tb').click(function(){
        console.log("hello");
        $.ajax({url: '/get_data', success: function(result){
            console.log(result)
            $('#my_table').children().remove()
            $('#my_table').append(result);
          }});
          return false;
    });
    
    $('a.js-toggle-trigger').click(function(event){
        console.log(event.currentTarget.hash);
        if(event.currentTarget.hash === '#page1'){
            $('#page1').show();
            $('#page2').hide();
        }else if(event.currentTarget.hash === '#page2'){
            $('#page2').show();
            $('#page1').hide();
        }
        // $(event.currentTarget.hash).hide();
    });

 });