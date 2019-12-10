var date = moment().format('LL')
var dateContent = $("<h3>" + date + "</h3>")
dateContent.addClass("title")
$("#main-content").append(dateContent)
var liveHour = moment().format('LT')
var liveHourEl = $("<h4>" + "Current time: " + liveHour + "<h4>")
var textArea = $("textarea")
$("#main-content").append(liveHourEl)

var buttons = $("button")
buttons.addClass("btnColor")

var today = new Date()
var currentHour = today.getHours();
console.log(currentHour)

function  currentStatus(){

    textArea.each(function(){
        if ($(this).attr("time") > currentHour){
            $(this).attr("class", "green")
        }else if ($(this).attr("time") < currentHour) {
            $(this).attr("class", "red")
        } else {
            $(this).attr("class", "yellow")

        }
    })

}

// inserts the information from the local storage to the text area
function fillInCalender(){
for (var i = 0; i < textArea.length; i++){
    var itemName = textArea[i].getAttribute("id")
    var getContent = localStorage.getItem(itemName)
    textArea[i].textContent = getContent
}

}


// takes the info from the textarea and save it to the localStorage
$("button").on("click", function(){
    var targetBtn = $(this).attr("time")
    var caContent = $("#textarea" + $(this).attr("time"))

            var letsGo = caContent.val()
            localStorage.setItem(caContent.attr("id"), letsGo)
})

fillInCalender()
currentStatus()