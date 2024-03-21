import User from "../models/User";

export interface IAuthenticationService {
    signInAsync: (email:string, password: string, rememberMe: boolean) => Promise<User>;
    signInWithTokenAsync: () => Promise<User>;
    signOut: () => void;
}