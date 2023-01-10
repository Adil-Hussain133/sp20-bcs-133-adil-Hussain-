$(function(){
    personpapulate();
    

});

let persons=["Zahid","Numan", "Ali"];

function personpapulate(){
    $("#persons").html("");
     for(let i=0; i<persons.length;i++){
        $("#persons").append("<li>" + persons[i]  +  "</li>");

     }
}

function sort(){
    $("#persons").html("");
    persons.sort();
    personpapulate();
}