$(document).ready(function(){
    $("#header-ad-close-btn").click(function(){
        $("#header-ad").slideUp();
        $("#fast-search-div").animate({top:"192px"});
        $(".slider-box").animate({top:"206px"});
    });
});

