// Review modal
$(".review-button").on("click", function (event) {
    $(".review-modal").addClass("is-active")
});

$(".close-modal").on("click", function (event) {
    $(".review-modal").removeClass("is-active")
});

// List modal
$("#new-list").on("click", function (event) {
    $(".list-modal").addClass("is-active")
});

$(".close-list-modal").on("click", function (event) {
    $(".list-modal").removeClass("is-active")
});