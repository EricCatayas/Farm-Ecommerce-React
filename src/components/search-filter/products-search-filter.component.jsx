import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Dropdown } from '../form-input/dropdown.component';
import { ProductCategoriesContext } from "../../contexts/product-categories.context";
import { flattenCategories } from '../../utils/categories.utils';
import ProvincesService from '../../services/provincesService';
import MunicipalitiesService from '../../services/municipalitiesService';

const searchFormData = {
    category_Id : '',
    is_negotiable : '',
    min_price : '',
    max_price : '',
    per_qty_type : '',
    municipality_Id:null
}

const ProductSearchFilter = () => {

    const [formFields, setFormFields] = useState(searchFormData);
    const [provinces, setProvinces] = useState([]);
    const [municipalities, setMunicipalities] = useState([]);
    const { productCategories } = useContext(ProductCategoriesContext);
    const allCategories = flattenCategories(productCategories);
    const {category_Id, is_negotiable, min_price, max_price, per_qty_type, municipality_Id } = formFields;
    
    useEffect(()=>{
        const fetchData = async () => {
          var provincesService = new ProvincesService();
          const provinces = await provincesService.fetchAllAsync();
          setProvinces(provinces);
        };
        fetchData();
    },[]);

    const onProvinceSelect = async (event) => {
        const province_Id = event.target.value;
        var municipalitiesService = new MunicipalitiesService();
        const municipalities = await municipalitiesService.fetchFromProvinceAsync(province_Id);
        console.log("New municipalities: " + JSON.stringify(municipalities));
        setMunicipalities(municipalities);            
    }
    const inputChangeHandler = async (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
    };

    return (
        <section className="products-search-filter my-5" id="buffy-stuff-accordion-group">
            <div className="panel-heading" data-bs-toggle="collapse" data-parent="#buffy-stuff-accordion-group" href="#buffy-characters-body">
                <div className='row justify-content-between'>
                    <div className="col">
                        <h4>Filter Products</h4>
                    </div>
                    <div className="col">
                        <i class="fa fa-chevron-circle-down fa-lg pull-right" data-bs-toggle="collapse" data-bs-target="#buffy-characters-body"></i>
                    </div>
                </div>
            </div> 
            <div class="collapse" id="buffy-characters-body">
                <form>
                    <div className='row'>
                        <div className="col col-xs-3">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select Project</option>
                                <option value="1">Farm Ecommerce</option>
                                <option value="2">Virtubooks</option>
                                <option value="3">Love Game</option>
                            </select>
                        </div>
                        <div className="col col-xs-3">
                            <Dropdown args={allCategories} selectTitle={"Select Category"} onChange={inputChangeHandler}/>                        
                            <div className="input-group">
                                <span class="input-group-text">Php</span>
                                <input type="text" aria-label="First name" class="form-control" placeholder='Min'/>
                                <span class="input-group-text">-</span>
                                <input type="text" aria-label="Last name" class="form-control" placeholder='Max'/>
                            </div>
                        </div>
                        <div className="col col-xs-3">
                            <div className="input-group">
                                <Dropdown args={provinces} selectTitle={"Select Province"} onChange={onProvinceSelect}/>
                            </div>
                            <div className="input-group">
                                <Dropdown args={municipalities} selectTitle={"Select City/Municipal"} onChange={inputChangeHandler}/>
                            </div>
                        </div>
                        <div className="col col-xs-3">                                
                            <button type='submit'>Filter</button>  
                            <a className='btn' href='/'>Remove Filter</a>                              
                        </div>  
                    </div>
                </form>
            </div> 
        </section>
    )
    
}

export default ProductSearchFilter;