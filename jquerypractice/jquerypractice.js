$(function(){
    $("#addbutton").click(handleaddnewtodo);
    // $("#todos").on("click", "li",removeMe);
    $("#todos").on("click","li",remove);
});
function handleaddnewtodo(){
    
    var newtodo=$("#newtodo").val();
    if(!newtodo){
        $("#newtodo").addClass("error");
        return 0;
    }
    $("#newtodo").removeClass("error");
    $("#newtodo").val("");
    $("#todos").append("<li>"+newtodo+"</li>");
    // $("#todos li").click(remove);
}
function remove(){
    $(this).remove();
}