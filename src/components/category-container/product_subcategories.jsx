import './product_subcategories.styles.scss';
const SubCategories = ({category_id, subcategories, onCloseHandler}) => {
    return(
        <section class="subcategories-container">
            <button type='button' className='close btn-close' onClick={onCloseHandler}></button>
            <div className="row">
                <div className='col-xs-12'>
                    <div className="float_center">
                        <ul className='child'>
                            <li value={category_id}>All</li>
                            { 
                                subcategories ?
                                subcategories.map((sub) => (
                                    <li key={sub.id} value={sub.id}>{sub.category_name}</li>
                                ))
                                :
                                ""
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
} 

export default SubCategories;