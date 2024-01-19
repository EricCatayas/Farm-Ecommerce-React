import Cookies from "js-cookie";

//TODO: Persist cookie expiration 
class CookieService{

    constructor(cookieName, durationInDays = 14){
        this.cookieName = cookieName;
        this.durationInDays = durationInDays; // Days 
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
        Cookies.set(this.cookieName, value, { expires: this.durationInDays });
    }
    setArray(value){
        Cookies.set(this.cookieName, JSON.stringify(value), { expires: this.durationInDays });
    }
}

export default CookieService;