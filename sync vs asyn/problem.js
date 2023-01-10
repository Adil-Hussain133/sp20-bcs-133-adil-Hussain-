 console.clear();
 
 function makepiza(flavor){
    setTimeout(function(){
        console.log("preparing pizza");
        return "prepared "+ flavor + " pizza";
    },1000)
    return flavor + " pizza";
}

console.log(makepiza("tika"));