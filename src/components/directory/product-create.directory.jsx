import { useState } from "react";
import ProductCategories from "../category-container/product-categories.component";
import { DefaultPanel } from "../panel/panel.component";
import { convertProductToFormData } from "../../utils/formData";
import { multipartPostRequestAsync } from "../../utils/multipartPostRequest.utils";

const productCreateFormFields = {
  Name : '',
  Description : '',
  Price: null,
  Category_Id : null,
  Quantity_Unit: '',
  Qty_In_Stock : null,
  Is_Negotiable: false,
  Image_Files : null,
}

//TODO
const ProductCreateDirectory = () =>  {
    
  const [formFields, setFormFields] = useState(productCreateFormFields);

  //TODO
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const formData = convertProductToFormData(formFields);

      const response = await multipartPostRequestAsync(formData, 
        "/api/v1/Products/Create",
        (data) => { 
            console.log("Product Create response:\n"); 
            console.log(data);
        },
        (error)=>{ 
            console.error(error);
        }
      );              
    }
    catch(error){
        console.log(error.message);
    }
  }

  const textInputChangeHandler = async (event) => {
      const { name, value } = event.target;
      setFormFields({...formFields, [name]:value});
  }
  const numberInputChangeHandler = async (event) => {
      const { name, value } = event.target;
      const numValue = parseInt(value); 
      setFormFields({...formFields, [name]:numValue});
  }
  const checkBoxChangeHandler = async (event) => {
      const { name, checked } = event.target;
      setFormFields({...formFields, [name]:checked});
  }
  const categorySelectEventHandler = (categoryId) => {
    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      Category_Id: categoryId,
    }));
  };
  const handleFileInputChange = (event) => {
    const selectedFiles = event.target.files;

    setFormFields({
      ...formFields,
      Image_Files: selectedFiles,
    });
  };

  console.log("Form Fields in Product Create");
  console.log(formFields);

  return (
    <section className="product-create-container">
      <div className="container">
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
          <div className="row mb-3">
            <div className="col">
              <DefaultPanel heading={"1. Category"} />
              <p>Selected Category: {formFields.Category_Id}</p>
              <ProductCategories
                onSelectEventHandler={categorySelectEventHandler}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <DefaultPanel heading={"2. Product"} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input
                type="file"
                className="form-control"
                name="image_Files"
                multiple
                onChange={handleFileInputChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="Name"
                placeholder="Name"
                required
                onChange={textInputChangeHandler}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <textarea
                type="text"
                className="form-control"
                name="Description"
                placeholder="Description"
                onChange={textInputChangeHandler}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input
                type="number"
                className="form-control"
                name="Price"
                placeholder="Price"
                required
                onChange={numberInputChangeHandler}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="Quantity_Unit"
                placeholder="(e.g. ton, kilo, piece, etc.)"
                required
                onChange={textInputChangeHandler}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input
                type="number"
                className="form-control"
                name="Qty_In_Stock"
                placeholder="Quantity In Stock"
                onChange={numberInputChangeHandler}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-auto">
              <label className="form-check-label">
                Is The Price Negotiable?
              </label>
              <input
                type="checkbox"
                className="form-check-input"
                name="Is_Negotiable"
                placeholder="Negotiable"
                onChange={checkBoxChangeHandler}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input
                className="btn btn-primary"
                type="submit"
                value="Add Advertisement"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );    
    
}

export default ProductCreateDirectory;