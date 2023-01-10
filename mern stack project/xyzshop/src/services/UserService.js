
import genaricservices from "./genaricservices";
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";

class UserService extends genaricservices{
    constructor() {
        super();
    }

    login = (email, password) => new Promise((resolve, reject) => {
        this.post("users/login", { email, password })
            .then((token) => {
                localStorage.setItem("token", token);
                resolve(token);
            }).catch((err) => {
                reject(err);
          })
    }) 
    logout = () => {
        localStorage.removeItem("token");
    };

    isLoggedIn = () => {
        return localStorage.getItem("token") ? true : false;
    }
    getLoggedIn = () => {
        try {
            const jwt = localStorage.getItem("token");
            return jwtDecode(jwt);
        } catch (ex) {
            return null;
             
        }
    }

        IsAdmin = () => {
            if (this.isLoggedIn()) {
                if (this.getLoggedIn()?.role == "admin") return true;
                else return false;
            }
            else return false;
    }
       
    
    register = (name,email, password) => this.post("users/register", { name,email, password });
    
}

let userService = new UserService();

export default userService;