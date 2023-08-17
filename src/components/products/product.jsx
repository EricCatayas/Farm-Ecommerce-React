import { Component } from "react";

class Product extends Component{
    constructor({productId}){
        super();
        this.state = {
            productId,
            product : null
        }
    }

    componentDidMount(){
        // fetch Product
    }

    render(){
        return(
            <section>

            </section>
        )
    }
}

export default Product;