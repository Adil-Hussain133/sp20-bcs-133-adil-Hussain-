import genaricservices from "./genaricservices";

class Productservice extends genaricservices{
    constructor() {
        super();
    }

    addProduct = (data) => this.post("products", data);
    deleteProduct = (_id) => this.delete("products/"+_id);
    updateProduct = (_id,data) => this.put("products/"+_id, data);
    getProduct = (page=1) => this.get("products?page="+page);
    getSingleProduct = (id) => this.get("products/"+ id);
    
}

let productservice = new Productservice();

export default productservice;