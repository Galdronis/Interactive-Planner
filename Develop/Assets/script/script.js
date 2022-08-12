// At the top we have our dynamic date depictor. We also have our save button referenced.

var today = moment()
$("#currentDay").text(today.format("MMM Do, YYYY"))
var saveBtn = $(".col-1")

// The function for just storing things. I find that I actually prefer splitting up functions where possible I think.
function storevalue(event) {
    var toDo = $(this).prev().val();
    var whatTime = event.target.dataset.time;
    localStorage.setItem(whatTime, toDo)
}

// The actual render value function. This is where the bulk of the magic happens and where our data numbers come in handy.
function rendervalue() {
    $("#nine").val(localStorage.getItem(9))
    $("#ten").val(localStorage.getItem(10))
    $("#eleven").val(localStorage.getItem(11))
    $("#twelve").val(localStorage.getItem(12))
    $("#thirteen").val(localStorage.getItem(13))
    $("#fourteen").val(localStorage.getItem(14))
    $("#fifteen").val(localStorage.getItem(15))
    $("#sixteen").val(localStorage.getItem(16))
    $("#seventeen").val(localStorage.getItem(17))
}
// Make sure to render the function on page load
function init() {
    rendervalue()
}
// And of course make sure our save button actually stores the variables as needed.
rendervalue();
$(saveBtn).click(storevalue)