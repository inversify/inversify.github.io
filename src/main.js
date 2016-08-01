(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61841851-1', 'auto');
ga('send', 'pageview');

$(document).ready(function() {

    $(".leftMenu").height(window.innerHeight);
    $(window).on("resize", function() { $(".leftMenu").height(window.innerHeight); });

    function showSection(id) {
        $(".basic_section").hide();
        $("#" + id).show();
    }

    function showPage(pageUrl) {
        $.ajax({
            method: "GET",
            url: pageUrl
        }).done(function(msg) {
            $("#main").html(msg);
            $("pre").addClass("prettyprint"); 
            $(".basic_link").on("click", function(e) {
                e.preventDefault();
                var id = $(e.currentTarget).data("id");
                showSection(id);
            });
        });
    }

    $(".link").on("click", function(e) {
        e.preventDefault();
        var url = $(e.currentTarget).data("url");
        showPage(url);
    });

    showPage("./pages/home.html");

});