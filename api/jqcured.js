$(function(){
    loadrecipes();
});

function loadrecipes(){
    $.ajax({
        url:"https://usman-recipes-crud.herokuapp.com/",
        method: "GET",
        success: function(responce){
            console.log(responce);
        }
    })
}