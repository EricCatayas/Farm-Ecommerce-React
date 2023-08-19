import { useState } from "react";
import ProductCategories from "../category-container/product-categories";
import { DefaultPanel } from "../panel/panel";
import { formDataPostRequestAsync } from "../../utils/form.utils";

const defaultFormFields = {
    productName : '',
    description : '',
    price: '',
    category_Id : '',
    per_Qty_Type:'',
    qty_In_Stock : '',
    is_Negotiable: true,
    image_File : null,
}
let selectedCategory = null;

const ProductCreate = () =>  {
    
    const [formFields, setFormFields] = useState(defaultFormFields);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const formData = new FormData();

            for (const key in formFields) {
                formData.append(key, formFields[key]);
            }
            const response = await formDataPostRequestAsync(formData, 
                "/api/v1/Product/Create",
                (data) => { 
                    console.log("Product Create response:\n"); 
                    console.log(data);
                },
                (error)=>{
                    console.log("An error occured in product post request");
                    console.log(error);
                });              
        }
        catch(error){
            console.log("lelelle");
        }
    }

    const inputChangeHandler = async (event) => {
        const { name, value } = event.target;
        console.log(event);
        setFormFields({...formFields, [name]:value});
    }
    const checkBoxChangeHandler = async (event) => {
        const { name, checked } = event.target;
        setFormFields({...formFields, [name]:checked});
    }

    const categorySelectEventHandler = (event) => {
        const { value, innerText } = event.target;
        setFormFields({...formFields, ['category_Id']:value});
        selectedCategory = innerText;
    }
    console.log("Form Fields in Product Create");
    console.log(formFields);

    return(
        <section className="product-create-container">
            <form onSubmit={handleSubmit}>
                <DefaultPanel heading={"1. Category"}/>
                <div>{ selectedCategory ? selectedCategory : "Select Category" }</div>
                <ProductCategories onCategorySelectEvent={categorySelectEventHandler}/>
                <DefaultPanel heading={"2. Product"}/>
                <input type="text" name='productName' placeholder="Name" required onChange={inputChangeHandler} />
                <input type="text" name='description' placeholder="Description" onChange={inputChangeHandler} />
                <input type="text" name='price' placeholder="Price" required onChange={inputChangeHandler} />
                <input type="text" name='per_Qty_Type' placeholder="Sold Per Qty" required onChange={inputChangeHandler} />
                <label>Is Negotiable?</label>
                <input type="checkbox" name='is_Negotiable' placeholder="Negotiable" onChange={checkBoxChangeHandler} />
                <input type="text" name='qty_In_Stock' placeholder="Qty In Stock" onChange={inputChangeHandler} />

                <input className="button" type="submit" value="Add Product" />
            </form>
        </section>  
    );    
    
}

export default ProductCreate;