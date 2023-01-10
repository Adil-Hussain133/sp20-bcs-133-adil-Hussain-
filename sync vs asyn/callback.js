console.clear();
 
function makepiza(flavor,callback){
    console.log("order recived");
    console.log("preparing pizza");
   setTimeout(function(){
    callback(flavor + " pizza is ready")
    // return "prepared "+ flavor + " pizza";
   },1000)
//    return flavor + " pizza";
}
makepiza("tika",handlePizza);
function handlePizza(pizza){
     console.log(pizza);
    console.log("eating pizza");
}