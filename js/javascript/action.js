console.log("heloo world");

window.onload = function(){
    var hover = document.getElementById("anything");
    hover.onmouseover = function(){
        console.log("this is the way to do binding");
    }
}

function addnewtodo(){
    console.log("button is clickeed");
    var newtodo = document.getElementById("addtodo").value;
    console.log(newtodo)
    var todo = document.getElementById("todo");
    var text = document.createTextNode(newtodo);
    var newli = document.createElement("li");
    var btn  = document.createElement('<button id="del" onclick="itemDelete(event)">delete</button>')
    newli.appendChild(text + btn);
    todo.appendChild(newli);  
}

function itemDelete(e){
var tag = e.target;
var li = tag.parentNode;
li.parentNode.removeChild(li);
}


