import Cookies from "js-cookie";

class CookieService{
    constructor(cookieName){
        this.cookieName = cookieName;
    }
    
    hasData(){
        var cookie = Cookies.get(this.cookieName);
        return cookie ? true : false;
    }

    get(){
        return Cookies.get(this.cookieName);
    }

    getArray(){
        return JSON.parse(Cookies.get(this.cookieName));
    }

    set(value){
        Cookies.set(this.cookieName, value);
    }
    setArray(value){
        Cookies.set(this.cookieName, JSON.stringify(value));
    }
}

export default CookieService;