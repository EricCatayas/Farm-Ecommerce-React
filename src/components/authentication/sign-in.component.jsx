import { useState } from 'react';
import { useDispatch } from "react-redux";
import { FormInputField } from '../form-input/form-input-field.component';
import { signInStart } from '../../redux/user/user.actions';
import './sign-up.styles.scss';
import { useNavigate } from 'react-router-dom';

const loginFormData = {
    email : '',
    password : '',
    rememberMe : true,
}

const SignInForm = () => {
    const [formData, setFormData] = useState(loginFormData);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{                        
            dispatch(signInStart(formData.email, formData.password, formData.rememberMe));
        }
        catch(error){
            console.log("user sign in failed", error);
        }
    }
    
    const handleSignUp = (e) => {
        e.preventDefault();
        navigate("/sign-up");
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
        <p className="credit"><a onClick={handleSignUp}>Sign Up Here</a></p>      
      </div>
    )
}
export default SignInForm;