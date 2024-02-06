import { useState, useEffect } from 'react';
import { RegisterUserAsync } from '../../utils/sign-up.utils';
import { CreateUserAddressAsync } from '../../utils/user-address.utils';
import ProvincesService from '../../services/provincesService';
import MunicipalitiesService from '../../services/municipalitiesService';
import './sign-up.styles.scss';

const registrationFormData = {
    userName : '',
    email : '',
    contactNum1 : '',
    contactNum2 : '',
    password : '',
    confirmPassword:'',

    barangay:'',
    street:'',
    postalCode:'',
    municipality_Id:null
}

const SignUpForm = () => {    
    const [formData, setFormData] = useState(registrationFormData);
    const [provinces, setProvinces] = useState([]);
    const [municipalities, setMunicipalities] = useState([]);
    const {userName, email, contactNum1, contactNum2, password, confirmPassword, barangay, street, postalCode, municipality_Id } = formData;

    useEffect(() => {
      // Fetching the list of provinces asynchronously
      const fetchData = async () => {
        var provincesService = new ProvincesService();
        const provinces = await provincesService.fetchAllAsync();
        setProvinces(provinces);
      };
      fetchData();
    }, []); 
    
    const onProvinceSelect = async (event) => {
        const province_Id = event.target.value;
        var municipalitiesService = new MunicipalitiesService();
        const municipalities = await municipalitiesService.fetchFromProvinceAsync(province_Id);
        setMunicipalities(municipalities);            
    }

    // TODO: implement
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            var isRegisterSuccess = await RegisterUserAsync(userName, email, contactNum1, contactNum2, password, confirmPassword);
            console.log(isRegisterSuccess);
        }
        catch(error){
            alert(error.message)
        }
        if(isRegisterSuccess){
            //create address            
            var isAddressSuccess = await CreateUserAddressAsync(street, barangay, postalCode, municipality_Id);
            // redirect
        }
    }
    const inputChangeHandler = async (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]:value});
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
                            <div className="input_field"> 
                                <span><i aria-hidden="true" className="fa fa-user"></i></span>                                
                                <input type="text" name='userName' placeholder="userName" required onChange={inputChangeHandler} />
                            </div>
                            <div className="input_field">
                                <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                <input type="email" name='email' placeholder="email" required onChange={inputChangeHandler} />
                            </div>
                            <div className="input_field"> 
                                <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <input type="password" name='password'  placeholder="password" required onChange={inputChangeHandler} />
                            </div>
                            <div className="input_field">
                                <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <input type="password" name='confirmPassword' placeholder="Re-type password" required onChange={inputChangeHandler}/>
                            </div>
                            <div className="row clearfix">
                                <div className="col_half">
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                    <input type="tel" name='contactNum1' placeholder="Contact Num 1" onChange={inputChangeHandler} />
                                    </div>
                                </div>
                                <div className="col_half">
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                    <input type="tel" name='contactNum2' placeholder="Contact Num 2" onChange={inputChangeHandler}/>
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
                            <div className="input_field"> 
                                <span><i aria-hidden="true" className="fa fa-map-marker"></i></span>
                                <input type="text" name='barangay' placeholder="barangay" required onChange={inputChangeHandler}/>
                            </div>
                            <div className="row clearfix">
                                <div className="col_half">
                                    <div className="input_field"> 
                                    <span><i aria-hidden="true" className="fa fa-road"></i></span>
                                    <input type="text" name='street' placeholder="street" onChange={inputChangeHandler}/>
                                    </div>
                                </div>
                                <div className="col_half">
                                    <div className="input_field">
                                        <span><i aria-hidden="true" className="fa fa-map-signs"></i></span>
                                        <input type="text" name='postalCode' placeholder="Postal Code" onChange={inputChangeHandler}/>
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
                                <select name='municipality_Id' onChange={inputChangeHandler}>
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
                                <input type="checkbox" id="terms_agreement_cb"/>
                                <label for="terms_agreement_cb">I agree with terms and conditions</label>
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