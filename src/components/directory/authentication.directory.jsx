import { Component } from "react";
import SignInForm from "../authentication/sign-in.component";
class AuthenticationDirectory extends Component {
    constructor(){
        super();
        this.state = {
          }
    }

    render(){

        return (
            <div className="authentication">
                <div className='container'>
                    <SignInForm/>
                </div>
            </div>
        );
    }
}

export default AuthenticationDirectory;