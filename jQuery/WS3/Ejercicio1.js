$(document).ready(function(){
    $("tr:lt(2)").css("background-color", "red");
    $("tr:gt(2)").css("background-color", "blue");
    $("td:empty").css("background-color", "yellow");
});