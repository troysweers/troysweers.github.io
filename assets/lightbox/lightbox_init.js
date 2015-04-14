$(document).ready(function(){
    $("div.gallery").addClass("row");
    $("div.gallery div").each(function () {
            $(this).replaceWith("<div class=\"col-sm-6 col-md-4 col-lg-3\"><a href=\"./assets/images/" + $(this).text() +"\" class=\"lightbox_trigger\"><img class=\"img-thumbnail\" src=\"./assets/images/" + $(this).text() + "\"/></a></div>");
        });
});
