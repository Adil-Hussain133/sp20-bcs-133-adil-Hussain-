$(function(){
    loadrecipes();
    $("#recipes").on("click",".btn-danger",handledelete);
    $("#addbtn").click(addRecipes);
});

function addRecipes(){
    var title = $("#title").val();
    var body= $("#body").val();

    $.ajax({
        url:" https://usman-recipes.herokuapp.com/api/products/",
        method:"POST",
        data:{title,body},
        success:function(responce){
            console.log(responce);
            loadrecipes();
        }
    })
}

function handledelete(){
    //var btn = $(this);
    //var parentdiv = btn.closest(".recipe");
    var parentdiv = $(this).closest(".recipe");
    let id = parentdiv.attr("data-id");
    console.log(id);
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/products/"+id,
        method:"DELETE",
        success:function(){
            loadrecipes();
        }

    });
console.log("handle delete");
}

function loadrecipes(){
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/products",
        method:"GET",
        error:function(responce){
            var recpies = $("#recipes");
            recpies.html("An error ha accoureed");

        },

        success:function(responce){
            console.log(responce);
       var rec= $("#recipes");
       rec.empty();

       for(var i =0 ; i<responce.length;i++){
        var prod = responce[i];
            rec.append(`<div class="recipe" data-id="${prod._id}"><h3>"${prod.name}"</h3><p> <button class="btn btn-danger btn-sm float-right">delete</button>  <button class="btn btn-warning btn-sm float-right">edit</button>${prod.price}</p></div>`)
        // rec.append("<div><h3>"+recp.title+"</h3></div>")
       }
       
        }
    });
}