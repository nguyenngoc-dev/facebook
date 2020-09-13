$(document).ready(function(){

    $(".see-more").click(function(){
    $(".main-menu-first-item1").fadeIn();
    $(".see-more").fadeOut();
    })
    $(".see-less").click(function(){
    $(".main-menu-first-item1").fadeOut();
    $(".see-more").fadeIn();
    })
    })
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });