import { useState, useEffect } from 'react';
import { RegisterUserAsync } from '../../utils/sign-up.utils';
import { CreateUserAddressAsync } from '../../utils/user-address.utils';
import './sign-up.styles.scss';

const defaultFormFields = {
    Username : '',
    Email : '',
    Contact_Num1 : '',
    Contact_Num2 : '',
    Password : '',
    ConfirmPassword:'',

    Barangay:'',
    Street:'',
    Postal_Code:'',
    Municipality_Id:null
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const [provinces, setProvinces] = useState([]);
    const [municipalities, setMunicipalities] = useState([]);
    const {Username, Email, Contact_Num1, Contact_Num2, Password, ConfirmPassword, Barangay, Street, Postal_Code, Municipality_Id } = formFields;

    useEffect(() => {
        //fetching provinces
        const provinces_url = process.env.REACT_APP_FARM_ECOMMERCE_URL + '/api/v1/Address/Provinces';
        fetch(provinces_url)
            .then((response) => {
                if(!response.ok){
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProvinces(data);
            })
    }, []);

    const onProvinceSelect = (event) => {
        const province_Id = event.target.value;
        fetch(`${process.env.REACT_APP_FARM_ECOMMERCE_URL}/api/v1/Address/Municipalities?province_Id=${province_Id}`)
            .then((response) => {
                if(!response.ok){
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then((data) =>{
                console.log(data);
                setMunicipalities(data);
            })
    }
    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            var isRegisterSuccess = await RegisterUserAsync(Username, Email, Contact_Num1, Contact_Num2, Password, ConfirmPassword);
            console.log(isRegisterSuccess);
        }
        catch(error){
            alert(error.message)
        }
        if(isRegisterSuccess){
            //create address
            var isAddressSuccess = await CreateUserAddressAsync(Street, Barangay, Postal_Code, Municipality_Id);
            // redirect
        }
    }
    const handleChange = async (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value});
    }

    return (
        <div className="form_wrapper">
            <div className="form_container">
            <div className="title_container">
                <h2>Registration Form</h2>
            </div>
                <div className="row clearfix">
                    <div className="">
                        <form onSubmit={handleSubmit}>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>                                
                                <input type="text" name='Username' placeholder="Username" required onChange={handleChange} />
                            </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                <input type="email" name='Email' placeholder="Email" required onChange={handleChange} />
                            </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <input type="password" name='Password'  placeholder="Password" required onChange={handleChange} />
                            </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <input type="password" name='ConfirmPassword' placeholder="Re-type Password" required onChange={handleChange}/>
                            </div>
                            <div className="row clearfix">
                                <div className="col_half">
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                    <input type="tel" name='Contact_Num1' placeholder="Contact Num 1" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col_half">
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                    <input type="tel" name='Contact_Num2' placeholder="Contact Num 2" onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="input_field radio_option">
                                <input type="radio" name="radiogroup1" id="rd1"/>
                                <label for="rd1">Male</label>
                                <input type="radio" name="radiogroup1" id="rd2"/>
                                <label for="rd2">Female</label>
                            </div> */}
                            <h3>Address</h3>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-map-marker"></i></span>
                                <input type="text" name='Barangay' placeholder="Barangay" required onChange={handleChange}/>
                            </div>
                            <div className="row clearfix">
                                <div className="col_half">
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-road"></i></span>
                                    <input type="text" name='Street' placeholder="Street" onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="col_half">
                                    <div className="input_field"><span><i aria-hidden="true" className="fa fa-map-signs"></i></span>
                                    <input type="text" name='Postal_Code' placeholder="Postal Code" onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="input_field select_option" >
                                <select onChange={onProvinceSelect}>
                                <option value={null}>Select Province</option>
                                {
                                    provinces.map((province) => (
                                        <option  key={province.id} value={province.id}>{province.name}</option>
                                    ))
                                }
                                </select>
                                <div className="select_arrow"></div>
                            </div>
                            <div className="input_field select_option">
                                <select name='Municipality_Id' onChange={handleChange}>
                                <option value={null}>Select City / Municipal</option>
                                {
                                    municipalities.map((municipality) => (
                                        <option key={municipality.id} value={municipality.id}>{municipality.name}</option>
                                    ))
                                }
                                </select>
                                <div className="select_arrow"></div>
                            </div>
                            <div className="input_field checkbox_option">
                                <input type="checkbox" id="cb1"/>
                                <label for="cb1">I agree with terms and conditions</label>
                            </div>
                            <input className="button" type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        <p className="credit">Developed by <a href="http://www.designtheway.com" target="_blank">Design the way</a></p>      
      </div>
    )
}

export default SignUpForm;