$(function(){


    /**Reviews Slider**/
    $("[data-slider]").slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        autoplay: true,
    });

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        const $this = $(this)
        const blockId = $(this).data('collapse');

        $this.toggleClass("active")
    })
});