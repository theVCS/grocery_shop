$(document).ready(function () {

    //checking for expansion of menu bar
    if (localStorage.getItem("expand") == 1) {
        let dashboard = document.getElementById("dashboard");
        let main = document.getElementById("main");

        dashboard.style.display = "block";
        main.className = "col-md-9 ml-sm-auto col-lg-10 px-md-4 my-4"
    } else {
        let dashboard = document.getElementById("dashboard");
        let main = document.getElementById("main");
        dashboard.style.display = "none";
        main.className = "";
    }

    // for menu button
    $(window).resize(function () {
        if (window.innerWidth <= 767) {
            document.getElementById("menu").style.display = "none";
        } else {
            document.getElementById("menu").style.display = "inline";
        }
    });

    // search query
    $('#search').submit(function (event) {

        // variable to make ajax request
        var request;

        // prevents the default behaviour of submitting the form
        event.preventDefault();

        // Abort any pending request
        if (request) {
            request.abort();
        }

        // disabled the form from getting any data now
        $("#search_query").prop("disabled", true)

        // Fire off the request to /search
        request = $.ajax({
            url: "/search",
            type: "post",
            data: {
                "search_query": $("#search_query").val(),
            }
        });

        // Callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR) {
            // rendering another page
            $("main").html(response)
        });

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown) {
            // Log the error to the console
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
        });

        // Callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // Reenable the inputs
            $("#search_query").prop("disabled", false);
        });
    })

    // click event on menu button
    $("#menu").click(function () {
        let dashboard = document.getElementById("dashboard");
        let main = document.getElementById("main");

        if (dashboard.style.display == "none") {
            dashboard.style.display = "block";
            main.className = "col-md-9 ml-sm-auto col-lg-10 px-md-4 my-4"
            localStorage.setItem("expand", 1)
        } else {
            dashboard.style.display = "none";
            main.className = "";
            localStorage.setItem("expand", 0)
        }
    })

    //viewing related products
    // $("#product_view").click(function (event) {
    //     // prevents the default behaviour of submitting the form
    //     event.preventDefault();

    //     // getting the product_id from the url
    //     let url_string = $(this)[0].href;
    //     var url = new URL(url_string);
    //     var product_id = url.searchParams.get("product_id");

    //     // changing url
    //     window.history.replaceState({"state": 10}, "", url_string);

    //     // variable to make ajax request
    //     var request;

    //     // Abort any pending request
    //     if (request) {
    //         request.abort();
    //     }

    //     // Fire off the request to /search
    //     request = $.ajax({
    //         url: "/product_view",
    //     });

    //     // Callback handler that will be called on success
    //     request.done(function (response, textStatus, jqXHR) {
    //         // rendering another page
    //         $("html").html(response)
    //     });

    //     // Callback handler that will be called on failure
    //     request.fail(function (jqXHR, textStatus, errorThrown) {
    //         // Log the error to the console
    //         console.error(
    //             "The following error occurred: " +
    //             textStatus, errorThrown
    //         );
    //     });
    // })

    var carousel = $('#carousel'),
        threshold = 150,
        slideWidth = 500,
        dragStart,
        dragEnd;

        
    
})