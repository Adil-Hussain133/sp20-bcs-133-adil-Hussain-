// const { create } = require("./model/productsmodel")
const productmodel = require("./model/productmodel");

// code for delete record from database
const recorddelete =async(_id)=>{
  let product = await productmodel.findByIdAndDelete(_id);
    return product;
  
}

// code for all the products form the database
const getallproducts = async()=>{
    let product = await productmodel.find();
     return product;
}

    // code for create a new product in database
     const createproduct = async(title,price,tags)=>{
    console.log("create model");
    let product = new productmodel();
    product.title = title;
    product.price =price;
    product.tags = tags;
    await product.save();
    return product;
}


// code for updata a record in database
const updatproduct = async(_id,title,price,tags)=>{
    console.log("create model");
    let product = await productmodel.findById(_id);
    product.title = title;
    product.price =price;
    product.tags = tags;
    await product.save();
    return product;
}



module.exports.updatproduct=updatproduct;
module.exports.createproduct=createproduct;
module.exports.getallproducts=getallproducts;
module.exports.recorddelete=recorddelete;