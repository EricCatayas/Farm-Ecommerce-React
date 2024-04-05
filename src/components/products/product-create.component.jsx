import { useState, useContext, useEffect } from "react";
import ProductCategories from "../category-container/product-categories.component";
import { DefaultPanel } from "../panel/panel.component";
import { multipartPostRequestAsync } from "../../utils/multipartPostRequest.utils";

const productCreateFormFields = {
    Name : '',
    Description : '',
    Price: null,
    Category_Id : null,
    Per_Qty_Type: '',
    Qty_In_Stock : null,
    Is_Negotiable: false,
    Image_Files : null,
}

const ProductCreate = () =>  {
    
    const [formFields, setFormFields] = useState(productCreateFormFields);

    //TODO
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const formData = new FormData();

            for (const key in formFields) {
                formData.append(key, formFields[key]);
            }
            const response = await multipartPostRequestAsync(formData, 
                "/api/v1/Products/Create",
                (data) => { 
                    console.log("Product Create response:\n"); 
                    console.log(data);
                },
                (error)=>{ 
                    console.error(error);
                });              
        }
        catch(error){
            console.log("lelelle");
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
    const categorySelectEventHandler = (event) => {

        const { value } = event.target;
        const categoryId = parseInt(value); 
        setFormFields((prevFormFields) => ({
            ...prevFormFields,
            Category_Id: categoryId,
          }));
    }
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
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
          <DefaultPanel heading={"1. Category"} />
          <div>Select Category</div>
          <ProductCategories
            onCategorySelectEvent={categorySelectEventHandler}
          />
          <DefaultPanel heading={"2. Product"} />
          <input
            type="file"
            name="image_Files"
            multiple
            onChange={handleFileInputChange}
          />
          <input
            type="text"
            name="Name"
            placeholder="Name"
            required
            onChange={textInputChangeHandler}
          />
          <input
            type="text"
            name="Description"
            placeholder="Description"
            onChange={textInputChangeHandler}
          />
          <input
            type="number"
            name="Price"
            placeholder="Price"
            required
            onChange={numberInputChangeHandler}
          />
          <input
            type="text"
            name="Per_Qty_Type"
            placeholder="Sold Per Qty"
            required
            onChange={textInputChangeHandler}
          />
          <label>Is Negotiable?</label>
          <input
            type="checkbox"
            name="Is_Negotiable"
            placeholder="Negotiable"
            onChange={checkBoxChangeHandler}
          />
          <input
            type="number"
            name="Qty_In_Stock"
            placeholder="Qty In Stock"
            onChange={numberInputChangeHandler}
          />

          <input className="button" type="submit" value="Add Product" />
        </form>
      </section>
    );    
    
}

export default ProductCreate;