var currentDay = moment().format("MMM Do, YYYY");

$("#currentDay").text(currentDay);
console.log(currentDay);

$(".saveBtn").on("click", function() {

    var key;
    var name;

    key = $(this).parent().attr("id");
    name = $(this).siblings(".description").val();
    console.log(key);
    localStorage.setItem(key, name);

});

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];}

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));

    
$(".colorcode").each(function() {
    var now = moment().hours();
    console.log(now);
    if($(this).attr("id") == now) {
        $(this).addClass("present");
    }
    if($(this).attr("id") > now) {
        $(this).addClass("future");
    }
    else {
        $(this).addClass("past");

    }

});