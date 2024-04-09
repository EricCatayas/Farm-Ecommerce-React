import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../redux/productCategory/productCategories.selector";
import { FormInputGroupText, Checkbox } from "../form-input/form-input-field.component";
import Dropdown from "../dropdown/dropdown.component";
import ProvincesService from "../../services/ProvincesService";
import MunicipalitiesService from "../../services/MunicipalitiesService";

const searchFormData = {
  category_Id: "",
  is_negotiable: "",
  min_price: "",
  max_price: "",
  per_qty_type: "",
  municipality_Id: null,
};

const ProductSearchFilter = () => {
  const [ formFields, setFormFields ] = useState(searchFormData);
  const [ provinces, setProvinces ] = useState([]);
  const [ municipalities, setMunicipalities ] = useState([]);
  const [ subCategories, setSubcategories ] = useState(null);
  const { productCategories } = useSelector((state) => state.productCategories);
  const { category_Id, is_negotiable, min_price, max_price, per_qty_type, municipality_Id } = formFields;
  const qtyUnitOptions = [{id:1, name:"Love Game"}, {id:2, name:"Conquest"}, {id:3, name:"5AM Club"} ]; // TODO

  //LOG
  console.log("ProductSearchFilter Rerender");
  console.log(formFields);

  useEffect(() => {
    const fetchData = async () => {
      var provincesService = new ProvincesService();
      const provinces = await provincesService.fetchAllAsync();
      setProvinces(provinces);
    };
    fetchData();
  }, []);

  const onProvinceSelectHandler = async (event) => {
    const province_Id = event.target.value;

    if (province_Id) {
      var municipalitiesService = new MunicipalitiesService();
      const municipalities = await municipalitiesService.fetchFromProvinceAsync(
        province_Id
      );
      console.log("New municipalities: " + JSON.stringify(municipalities));
      setMunicipalities(municipalities);
    } else {
      setMunicipalities([]);
    }
  };
  const inputChangeHandler = async (event) => {
    const { name, value } = event.target;
    console.log(`Name: ${name}, Value: ${value}`);
    setFormFields({ ...formFields, [name]: value });
  };

  const onCategorySelectHandler = (event) => {
    const categoryId = event.target.value;
    const clickedParentCategory = productCategories.find(
      (cat) => cat.id == categoryId
    );
    setFormFields({...formFields, ['category_Id']: categoryId});

    if (clickedParentCategory != null) {
      setSubcategories(clickedParentCategory.subCategories);
    }    
  }

  return (
    <section className="products-search-filter my-5" id="buffy-stuff-accordion-group">
      <div className="container">
        <div className="panel-heading" data-bs-toggle="collapse" data-parent="#buffy-stuff-accordion-group" href="#buffy-characters-body">
          <div className="row justify-content-between">
            <div className="col">
              <h4>Filter Products</h4>
            </div>
            <div className="col">
              <i className="fa fa-chevron-circle-down fa-lg pull-right" data-bs-toggle="collapse" data-bs-target="#buffy-characters-body"></i>
            </div>
          </div>
        </div>
        <div className="collapse show" id="buffy-characters-body">
          <form>
            <div className="row">
              <div className="col col-xs-3">
                <Dropdown
                  args={productCategories}
                  selectTitle={"Select Category"}
                  onChange={onCategorySelectHandler}
                />
                <Dropdown
                  args={subCategories}
                  selectTitle={"Select Subcategory"}
                  name={"category_Id"}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="col col-xs-3">
                <Dropdown 
                  args={qtyUnitOptions}
                  selectTitle={"Select Quantity Unit"}
                  name={"per_qty_type"}
                  onChange={inputChangeHandler}  
                />
                <div className="input-group">
                  <FormInputGroupText label={"Php"} placeholder={"Min"} name={"min_price"} onChangeHandler={inputChangeHandler}/>
                  <FormInputGroupText label={"-"} placeholder={"Max"} name={"max_price"} onChangeHandler={inputChangeHandler}/>
                </div>
              </div>
              <div className="col col-xs-3">
                <div className="input-group">
                  <Dropdown
                    args={provinces}
                    selectTitle={"Select Province"}
                    onChange={onProvinceSelectHandler}
                  />
                </div>
                <div className="input-group">
                  <Dropdown
                    args={municipalities}
                    selectTitle={"Select City/Municipal"}
                    name={"municipality_Id"}
                    onChange={inputChangeHandler}
                  />
                </div>
              </div>
              <div className="col col-xs-3">
                <Checkbox label={"Negotiable?"} name={"is_negotiable"} onChangeHandler={inputChangeHandler}/>
                <button className="btn btn-primary" type="submit">
                  Filter
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductSearchFilter;
