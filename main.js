var count = 0; // To count blank fields.
function validation(event) {
var input_field = document.getElementsByClassName('text_field'); 
// For loop to count blank inputs.
for (var i = input_field.length; i > count; i--) {
if (input_field[i - 1].value == '' || text_area.value == '') {
count = count + 1;
} else {
count = 0;
}
}
if (count != 0 || y == 0) {
alert("*All Fields are mandatory*"); // Notifying validation
event.preventDefault();
} else {
return true;
}
}
/*---------------------------------------------------------*/
// Function that executes on click of first next button.
function next_step1() {
document.getElementById("first").style.display = "none";
document.getElementById("second").style.display = "block";
}

function next_step2() {
document.getElementById("second").style.display = "none";
document.getElementById("third").style.display = "block";
}

function next_step3() {
document.getElementById("third").style.display = "none";
document.getElementById("fourth").style.display = "block";
}

function next_step4() {
document.getElementById("fourth").style.display = "none";
document.getElementById("fifth").style.display = "block";
}
