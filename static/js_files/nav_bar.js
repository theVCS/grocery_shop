// $(document).ready(function () {
//     // search query
//     $('.home').click(function (event) {

//         // variable to make ajax request
//         var request;

//         // prevents the default behaviour of submitting the form
//         event.preventDefault();

//         // Abort any pending request
//         if (request) {
//             request.abort();
//         }

//         // Fire off the request to /search
//         request = $.ajax({
//             url: "/",
//             type: "get",
//         });

//         // Callback handler that will be called on success
//         request.done(function (response, textStatus, jqXHR) {
//             // rendering another page
//             $("html").html(response)
//         });

//         // Callback handler that will be called on failure
//         request.fail(function (jqXHR, textStatus, errorThrown) {
//             // Log the error to the console
//             console.error(
//                 "The following error occurred: " +
//                 textStatus, errorThrown
//             );
//         });

//         // Callback handler that will be called regardless
//         // if the request failed or succeeded
//         request.always(function () {
//             // Reenable the inputs
//             $("#search_query").prop("disabled", false);
//         });
//     })
    
//     $('.orders').click(function (event) {

//         // variable to make ajax request
//         var request;

//         // prevents the default behaviour of submitting the form
//         event.preventDefault();

//         // Abort any pending request
//         if (request) {
//             request.abort();
//         }

//         // Fire off the request to /search
//         request = $.ajax({
//             url: "/buy",
//             type: "get",
//         });

//         // Callback handler that will be called on success
//         request.done(function (response, textStatus, jqXHR) {
//             // rendering another page
//             $("html").html(response)
//         });

//         // Callback handler that will be called on failure
//         request.fail(function (jqXHR, textStatus, errorThrown) {
//             // Log the error to the console
//             console.error(
//                 "The following error occurred: " +
//                 textStatus, errorThrown
//             );
//         });

//         // Callback handler that will be called regardless
//         // if the request failed or succeeded
//         request.always(function () {
//             // Reenable the inputs
//             $("#search_query").prop("disabled", false);
//         });
//     })
// })