import { Component } from "react";

import SignUpForm from "../authentication/sign-up";

class RegistrationDirectory extends Component {
    constructor(){
        super();
        this.state = {
        }
    }


    render(){
        return (
            <div className="registration">
                <div className='container'>
                    <SignUpForm />
                </div>
            </div>
        );
    }
}

export default RegistrationDirectory;