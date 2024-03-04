import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FormInputField } from '../form-input/form-input-field.component';
import AuthenticationService from '../../services/authenticationService';
import './sign-up.styles.scss';

const loginFormData = {
    email : '',
    password : '',
    rememberMe : true,
}
const SignInForm = () => {
    const [formData, setFormData] = useState(loginFormData);
    const { signInSuccess, signInFailed } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{
            const authService = new AuthenticationService();
            var response = await authService.signInAsync(formData.email, formData.password, formData.rememberMe);
            
            dispatch(signInSuccess(response));
            //LOG
            console.log("you have been authenticated");
            console.log(response);            
        }
        catch(error){
            dispatch(signInFailed(error));
        }
    }
    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]:value});
    }

    return (
        <div className="form_wrapper">
            <div className="form_container">
            <div className="title_container">
                <h2>Sign In</h2>
            </div>
                <div className="row clearfix">
                    <div className="">
                        <form onSubmit={handleSubmit}>
                            <FormInputField 
                                icon_name="fa fa-envelope"
                                inputOptions={{
                                    type:"email",
                                    name:'email',
                                    placeholder:"email",
                                    required:true,
                                    onChange: inputChangeHandler
                                }} 
                            />                                    
                            <FormInputField 
                                icon_name="fa fa-lock" 
                                inputOptions={{                                    
                                    type:"password", 
                                    name:'password', 
                                    placeholder:"password", 
                                    required:true,
                                    onChange: inputChangeHandler
                                }}
                            />                                       
                            
                            <div className="input_field checkbox_option">
                                <input type="checkbox" name='rememberMe' id='rememberMe'/>
                                <label htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <input className="button" type="submit" value="Sign In" />
                        </form>
                    </div>
                </div>
            </div>
        <p className="credit"><a href="/sign-up" target="_blank">Sign Up Here</a></p>      
      </div>
    )
}
export default SignInForm;