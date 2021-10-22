// Review modal
$(".review-button").on("click", function (event) {
    $(".review-modal").addClass("is-active");
});

// Close modals
$(".close-modal").on("click", function (event) {
    $(".review-modal").removeClass("is-active");
    $(".list-modal").removeClass("is-active");
    $(".plan-modal").removeClass("is-active");
});

// List Index list modal
$(".new-list").on("click", function (event) {
    $(".list-modal").addClass("is-active");
});

// Plan Index plan modal
$(".new-plan").on("click", function (event) {
    $(".plan-modal").addClass("is-active");
});

// Trail Show list modal
$(".list-circle").on("click", function (event) {
    $(".list-modal").addClass("is-active");
});

$(".share-circle").on("click", function (event) {
    navigator.clipboard.writeText(window.location.href);
});