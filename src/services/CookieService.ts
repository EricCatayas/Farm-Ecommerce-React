import Cookies from "js-cookie";

//TODO: Persist cookie expiration 
class CookieService {
  private cookieName: string;
  private durationInDays: number;

  constructor(cookieName: string, durationInDays: number = 14) {
    this.cookieName = cookieName;
    this.durationInDays = durationInDays; // Days
  }

  hasData(): boolean {
    const cookie = Cookies.get(this.cookieName);
    return !!cookie;
  }

  get(): string | undefined {
    return Cookies.get(this.cookieName);
  }

  getArray<T>(): T {
    const cookie = Cookies.get(this.cookieName);
    return cookie ? JSON.parse(cookie) as T : null as T;
  }

  set(value: string): void {
    Cookies.set(this.cookieName, value, { expires: this.durationInDays });
  }

  setArray(value: any[]): void {
    Cookies.set(this.cookieName, JSON.stringify(value), {
      expires: this.durationInDays,
    });
  }
}


export default CookieService;