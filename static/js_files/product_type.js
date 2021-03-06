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
    // $('#search').submit(function (event) {

    //     // variable to make ajax request
    //     var request;

    //     // prevents the default behaviour of submitting the form
    //     event.preventDefault();

    //     // Abort any pending request
    //     if (request) {
    //         request.abort();
    //     }

    //     // disabled the form from getting any data now
    //     $("#search_query").prop("disabled", true)

    //     // Fire off the request to /search
    //     request = $.ajax({
    //         url: "/search",
    //         type: "post",
    //         data: {
    //             "search_query": $("#search_query").val(),
    //         }
    //     });

    //     // Callback handler that will be called on success
    //     request.done(function (response, textStatus, jqXHR) {
    //         // rendering another page
    //         $("main").html(response)
    //     });

    //     // Callback handler that will be called on failure
    //     request.fail(function (jqXHR, textStatus, errorThrown) {
    //         // Log the error to the console
    //         console.error(
    //             "The following error occurred: " +
    //             textStatus, errorThrown
    //         );
    //     });

    //     // Callback handler that will be called regardless
    //     // if the request failed or succeeded
    //     request.always(function () {
    //         // Reenable the inputs
    //         $("#search_query").prop("disabled", false);
    //     });
    // })

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

    show_products();

    function show_products() {
        var page = parseInt(localStorage.getItem("page"));
        var start = (page - 1)*8;
        var items = JSON.parse(localStorage.getItem("product")).slice(start, 8 + start)

        // getting to be displayed
        let str = "";
        items.forEach(element => {
            str += `<div class="col-md-3 mt-5">
            <div class="card" style="border: none;">
                <a href="/product_view?product_id=` + element['id'] + `" id="product_view"> <img
                        src="../static/images/products/`+ element['img'] +`.jfif" class="card-img-top" alt="..."
                        style="height: 15rem; width: 15rem;">
                </a>
            </div>
        </div>`;
        });
        document.getElementById("content").innerHTML = str;
    }

    $("#next").click(function(event){
        if(localStorage.getItem("page") == localStorage.getItem("total_page"))
        {
            localStorage.setItem("page", 1)
        }
        else
        {
            localStorage.setItem("page", parseInt(localStorage.getItem("page")) + 1)
        }
        show_products();
    })
    
    $("#prev").click(function(event){
        if(localStorage.getItem("page") == 1)
        {
            localStorage.setItem("page", localStorage.getItem("total_page"))
        }
        else
        {
            localStorage.setItem("page", parseInt(localStorage.getItem("page")) - 1)
        }
        show_products();
    })
})