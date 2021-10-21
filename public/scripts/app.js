// Review modal
$(".review-button").on("click", function (event) {
    $(".review-modal").addClass("is-active")
});

// Close review modal
$(".close-modal").on("click", function (event) {
    $(".review-modal").removeClass("is-active")
});

// Close List Modal
$(".close-list-modal").on("click", function (event) {
    $(".list-modal").removeClass("is-active")
});

// List Index list modal
$(".new-list").on("click", function (event) {
    $(".list-modal").addClass("is-active")
});

// Trail Show list modal
$(".list-circle").on("click", function (event) {
    $(".list-modal").addClass("is-active")
});