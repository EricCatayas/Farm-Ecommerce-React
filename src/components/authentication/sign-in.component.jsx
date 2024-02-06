import { useState } from 'react';
import { useDispatch } from "react-redux";
import { setCurrentUser } from '../../redux/userSlice';
import { defaultPostRequestAsync } from '../../utils/form.utils';
import { FormInputField } from '../form-input/form-input-field.component';
import { getCookie } from '../../utils/cookie.utils';
import './sign-up.styles.scss';

const loginFormData = {
    email : '',
    password : '',
    rememberMe : true,
}
const SignInForm = () => {
    const [formData, setFormData] = useState(loginFormData);
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        //TODO: encapsulatae in service
        try{
            var response = await defaultPostRequestAsync(
                formData,
                `/api/v1/Account/Login?RememberMe=${formData.rememberMe}`,
                (data) => {
                    // Set cookies
                    document.cookie = `authorization= Bearer ${encodeURIComponent(data.token)}; expires=${data.expiration}`;
                    document.cookie = `refreshToken=${encodeURIComponent(data.refreshToken)}; expires=${data.refreshTokenExpirationDateTime}`;           
                    // Retrieve stored cookies
                    console.log("Here is your sign in cookie");
                    console.log(getCookie('authorization'));

                },                                                         
            );
            
            dispatch(setCurrentUser(response));
            console.log("you have been authen");
            console.log(response);            
        }
        catch(error){
            alert(error.message);
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