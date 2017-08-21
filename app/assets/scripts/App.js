var $ = require('jquery');

$(document).ready(function () {
    let pictureCallback = (event) => {
        let picture = document.getElementById("largeImageContainer");
        picture.src = event.currentTarget.getAttribute("data-large-img-path");
        $(".active-picture").removeClass("active-picture");
        $(event.currentTarget).addClass("active-picture");
        event.preventDefault();
    };

    $(".preview__small__items__item a").click(pictureCallback).keydown((event) => {
        if (event.which === 13) {
            pictureCallback(event);
        }
    });

    let expandCallback = (event) => {
        let targetBody = $(event.currentTarget).parent('.accordian__head').next('.accordian__body');
        if (targetBody.hasClass('accordian-hide')) {
            $(event.currentTarget).html("&#9660; Expanded");
        } else {
            $(event.currentTarget).html("&#9658; Collapsed");
        }
        targetBody.slideToggle("slow")
        targetBody.toggleClass("accordian-hide");
        event.preventDefault();
    };

    $(".accordian__head__link").keydown((event) => {
        if (event.which === 13) {
            expandCallback(event);
        }
    }).click(expandCallback);

    $("#purchase").submit((event) => {
        event.preventDefault();
        $("#addToCartModal").show();
        let quantity = $("input[name='quantity']").val();
        $("#closeModal").focus();
        if (quantity) {
            $('#modalMessage').text(quantity + " item(s) added to the cart.");
        } else {
            $('#modalMessage').text("Please enter quantity");
        }
    });

    let modalCloseCallback = (event) => {
        $("#addToCartModal").hide();
        event.preventDefault();
    }

    $("#closeModal").click(modalCloseCallback).keydown((event) => {
        if (event.which === 13) {
            modalCloseCallback(event);
        }
    });

    $(document).keydown((event) => {
        if (event.which === 27) {
            modalCloseCallback(event);
        }
    });
});