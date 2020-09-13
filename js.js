
$(document).ready(function(){
    $("#input").click(function(){
    $("#input").fadeIn();
    $("#search").fadeOut();
    $("#face").fadeOut();
    $("#left").fadeIn();
    
    });
    $("#search").click(function(){
    $("#input").fadeIn();
    $("#search").fadeOut();
    $("#face").fadeOut();
    $("#left").fadeIn();
    
    });
    $("#left").click(function(){
    $("#face").fadeIn();
    $("search").fadeIn();
    $("#left").fadeOut();
    });
       $('[data-toggle="tooltip"]').tooltip();   
    });
    