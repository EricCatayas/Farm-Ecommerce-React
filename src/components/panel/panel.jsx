
export const DefaultPanel = ({heading}) => {
    return(
        <div className="panel-heading">
            <div className='row justify-content-between'>
                <div className="col">
                    <h4>{heading}</h4>
                    <span className="line-break"></span>
                </div>
            </div>
        </div> 
    );
}