$(".mobile_bar, .time_right").click(function(){
    $(".mobile_manu").toggleClass("mobile_open");
});
$(window).scroll(function () {
    if ($(this).scrollTop() > $('.top_header').height()) {
        $('.bottom_header').addClass("sticky_nav");
    } else {
        $('.bottom_header').removeClass("sticky_nav");
    }
});

$(document).ready(function(e) {
    $(".search_icon").click(function(event) {
        $(".serch_bar").addClass("serch_open");
        event.stopPropagation();
    });

    $(document).click(function(event){
        if (!$(event.target).hasClass('serch_open')) {
            $(".serch_bar").removeClass("serch_open");
        }
    });
});
$('.corona_all_overcountry').liMarquee({
    direction: 'left',	
    loop: -1,			
    scrolldelay: 0,		
    scrollamount: 30,	
    circular: false,		
    drag: false,
});
$(window).scroll(function () {
    if ($(this).scrollTop() > $('.top_header').height()) {
        $('.bottom_header').addClass("sticky_nav");
    } else {
        $('.bottom_header').removeClass("sticky_nav");
    }
});
$('.single_slider_live').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});
$(".slick-next").text("");
$(".slick-next").addClass("fas fa-angle-right");
$(".slick-prev").text("");
$(".slick-prev").addClass("fas fa-angle-left");

$('#date_time_picker_star').datetimepicker({
    format:'d/m/Y',
    onShow:function( ct ){
     this.setOptions({
      maxDate:jQuery('#date_time_picker_end').val()?jQuery('#date_time_picker_end').val():false
     })
    },
    timepicker:false
});
$('#date_time_picker_end').datetimepicker({
    format:'d/m/Y',
    onShow:function( ct ){
    this.setOptions({
    minDate:jQuery('#date_time_picker_star').val()?jQuery('#date_time_picker_star').val():false
    })
},
    timepicker:false
});
$('[data-fancybox]').fancybox({
    protect: false,
    loop: true,
    transitionEffect: "slide",
    idleTime: 1,
    buttons : [
      'zoom',
      'slideShow',
      'thumbs',
      'share',
      'close',
    ]
});

