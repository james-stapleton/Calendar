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
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));
    $("#19 .description").val(localStorage.getItem("19"));
    $("#20 .description").val(localStorage.getItem("20"));
    $("#21 .description").val(localStorage.getItem("21"));
    $("#22 .description").val(localStorage.getItem("22"));

    
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