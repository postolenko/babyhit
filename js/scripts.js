$(document).ready(function() {



    var miniaturesCount = $(".img-box").length - 1;

    var miniatureIndex;

    var miniatureWidth;
    var miniatureHeight;

    var miniatureWidthImg;
    var miniatureHeightImg;

    getMiniatureSize();


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ----------------------------------------------------------------------------

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });

    function getMiniatureSize() {

        miniaturesCount = $(".img-box").length - 1;

        // var miniatureIndex;

        // var miniatureWidth;
        // var miniatureHeight;

        // var miniatureWidthImg;
        // var miniatureHeightImg;

        for( miniatureIndex = 0; miniatureIndex <= miniaturesCount; miniatureIndex++ ) {

            miniatureWidth = $(".img-box:eq("+ miniatureIndex  +")").width();

            miniatureHeight = $(".img-box:eq("+ miniatureIndex  +")").outerHeight(true);

            miniatureWidthImg = $(".img-box:eq("+ miniatureIndex  +") img").width();

            miniatureHeightImg = $(".img-box:eq("+ miniatureIndex  +") img").outerHeight(true);

            if( miniatureHeightImg < miniatureHeight || miniatureWidthImg < miniatureWidth ) {

                $(".img-box:eq("+ miniatureIndex  +") img").css({
                    "min-width" : miniatureWidth + "px",
                    "min-height" : miniatureHeight + "px"
                });

            } else if( miniatureHeightImg > miniatureHeight && miniatureWidthImg < miniatureWidth ) {

                $(".img-box:eq("+ miniatureIndex  +") img").css({
                    "width" : miniatureWidth + "px",
                    "height" : "auto"
                });

            } else if( miniatureHeightImg < miniatureHeight && miniatureWidthImg > miniatureWidth ) {

                $(".img-box:eq("+ miniatureIndex  +") img").css({
                    "width" : "auto",
                    "height" : miniatureHeight + "px"
                });

            } else if( miniatureHeightImg > miniatureHeight && miniatureWidthImg > miniatureWidth ) {

                $(".img-box:eq("+ miniatureIndex  +") img").css({
                    "width" : "auto",
                    "height" : miniatureHeight + "px"
                });

            }

        }


    }


});
