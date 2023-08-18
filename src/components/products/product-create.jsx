import { useState } from "react";
import ProductCategories from "../category-container/product-categories";
import categories_data from "../../categories-data.json";
import { DefaultPanel } from "../panel/panel";
import { handleChange } from "../../utils/form.utils";
import { defaultPostRequestAsync } from "../../utils/form.utils";

const defaultFormFields = {
    productName : '',
    description : '',
    price: '',
    category_Id : '',
    per_Qty_Type:'',
    qty_In_Stock : '',
    is_Negotiable: true,
}

const ProductCreate = () =>  {
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    //const { productName, description, price, per_Qty_Type, qty_In_Stock, is_Negotiable} = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await defaultPostRequestAsync(formFields, 
                "/api/v1/Product/Create",
                (data) => { 
                    console.log("Your response:\n"); 
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

    const categorySelectEventHandler = (event) => {
        const { value } = event.target;
        setFormFields({...formFields, ['category_Id']:value});
    }
    console.log("Form Fields in Product Create");
    console.log(formFields);

    return(
        <section className="product-create-container">
            <form onSubmit={handleSubmit}>
                <DefaultPanel heading={"1. Category"}/>
                <ProductCategories onCategorySelectEvent={categorySelectEventHandler}/>
                <DefaultPanel heading={"2. Product"}/>
                <input type="text" name='productName' placeholder="Name" required onChange={handleChange} />
                <input type="text" name='description' placeholder="Description" onChange={handleChange} />
                <input type="text" name='price' placeholder="Price" required onChange={handleChange} />
                <input type="text" name='per_Qty_Type' placeholder="Sold Per Qty" required onChange={handleChange} />
                <input type="checkbox" name='is_Negotiable' placeholder="Negotiable" checked onChange={handleChange} />
                <input type="text" name='qty_In_Stock' placeholder="Qty In Stock" onChange={handleChange} />

                <input className="button" type="submit" value="Register" />
            </form>
        </section>  
    );    
    
}

export default ProductCreate;