
export const FormInputField = ({icon_name, inputOptions}) => {

    return (
        <div className="input_field"> 
        {
            icon_name ?  <span><i aria-hidden="true" className={icon_name}></i></span> : null
        }
            <input {...inputOptions} />
        </div>
    )
}