$(".review-button").on("click", function (event) {
    $(".review-modal").addClass("is-active")
    console.log("click")
});

$(".close-modal").on("click", function (event) {
    $(".review-modal").removeClass("is-active")
});

