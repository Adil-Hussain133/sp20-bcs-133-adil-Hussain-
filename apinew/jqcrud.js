$(function(){
    loadrecipes();
});

function loadrecipes(){
    $.ajax({
        url:"https://usman-recipes-crud.herokuapp.com/",
        method:"get",
        success: function(responce){
            console.log(responce);
        }
    })
}