import { Component } from 'react';

class ProductSearchFilter extends Component{
    constructor(){
        super();
    }

    //TODO

    render(){
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
                    <h3>Choose category above</h3>
                    <form>
                        <div className='row'>
                            <div className="col col-xs-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select Province</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
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
                                <div class="input-group">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Quantity Type</option>
                                        <option value="1">Kilo</option>
                                        <option value="2">Ton</option>
                                        <option value="3">Piece</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Range</option>
                                        <option value="1">1-5</option>
                                        <option value="2">5-20</option>
                                        <option value="3">20-50</option>
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
}

export default ProductSearchFilter;