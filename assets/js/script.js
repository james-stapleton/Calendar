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

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    $("#9 .description").val(localStorage.getItem("9"));
}
