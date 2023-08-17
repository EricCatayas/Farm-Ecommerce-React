import { useState, useContext } from 'react';
import { SignInUserAsync } from '../../utils/sign-in.utils';
import { FormInputField } from '../form-input/form-input';
import './sign-up.styles.scss';
import { UserContext } from '../../contexts/user.context';

const defaultFormFields = {
    email : '',
    password : '',
    rememberMe : true,
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email,password, rememberMe} = formFields;
    const { setSignedIn } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            var response = await SignInUserAsync(email, password, rememberMe);
            
            console.log("you have been authen");
            console.log(response);
            setSignedIn(true);
        }
        catch(error){
            alert(error.message);
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value});
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
                                    onChange: handleChange
                                }} 
                            />                                    
                            <FormInputField 
                                icon_name="fa fa-lock" 
                                inputOptions={{                                    
                                    type:"password", 
                                    name:'password', 
                                    placeholder:"password", 
                                    required:true,
                                    onChange: handleChange
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