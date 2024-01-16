import { useContext, useEffect, useState } from 'react';
import { ProductCategoriesContext } from "../../contexts/product-categories.context";
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
    const { productCategories, setProductCategories } = useContext(ProductCategoriesContext);
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
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select Category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>                               
                            <div className="input-group">
                                <span class="input-group-text">Php</span>
                                <input type="text" aria-label="First name" class="form-control" placeholder='Min'/>
                                <span class="input-group-text">-</span>
                                <input type="text" aria-label="Last name" class="form-control" placeholder='Max'/>
                            </div>
                        </div>
                        <div className="col col-xs-3">
                            <div className="input-group">
                            <select className="form-select" aria-label="Default select example" onChange={onProvinceSelect}>
                                <option value={null}>Select Province</option>
                                {
                                    provinces.map((province) => (
                                        <option  key={province.id} value={province.id}>{province.name}</option>
                                    ))
                                }
                            </select>
                            </div>
                            <div className="input-group">
                            <select className="form-select" aria-label="Default select example"  name='municipality_Id' onChange={inputChangeHandler}>
                                <option value={null}>Select City / Municipal</option>
                                {
                                    municipalities.map((municipality) => (
                                        <option key={municipality.id} value={municipality.id}>{municipality.name}</option>
                                    ))
                                }
                                </select>
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