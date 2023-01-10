console.clear();

function makePizza(flavor){
     return new Promise((resolve,reject)=>{
        if(flavor== "fajeta") 
        reject(flavor + " is out of stock");
        else
        setTimeout(function(){
            console.log("prparing pizza");
            resolve(flavor + " pizza");

        },1000);
      
    });
}

makePizza("tika").then(message=>{
    console.log(message);
}).catch(message=>{
    console.log(message);
})