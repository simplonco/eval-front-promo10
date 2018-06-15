$(function (){
    setInterval(function(){
        $("#slider ul").animate({marginLeft:-500}, 1600, function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"))
        })
    },4000)
})