$(function(){
    $("#load").click(function(){
        $.get("student.txt", function(){
            $("#result").empty();
            $("#result").append(responce);
        });
    });
    // $("#loading").hover(requestajx);
})
// function sendajx(){
//     console.log("sending ajx request");
//     // sending request here
//     console.log("request sent");
//     $.get("student.txt", handleresponce);


// }

// function handleresponce(responce){
//     console.log("responce is recived");
//     console.log(responce);
//     $("#result").empty();
//     $("#result").append(responce);

// }
// function requestajx(){
//     console.log("sending ajx request");
//     $.get("student.txt", handleresponce);
// }