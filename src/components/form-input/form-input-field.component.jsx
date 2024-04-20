
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

export const FormInputGroupText = ({ label, placeholder, name, onChangeHandler }) => {
  return (
    <div className="input-group">
      <span className="input-group-text">{label}</span>
      <input
        type="text"
        aria-label={label}
        className="form-control"
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export const FormLabelAndInput = ({ label, placeholder, name, onChangeHandler }) => {
  return (
    <>
      <span className="input-group-text">{label}</span>
      <input
        type="text"
        aria-label={label}
        className="form-control"
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </>
  );
};

export const Checkbox = ({ label, name, onChangeHandler }) => {

  const onCheck = (event) => {
    const { checked } = event.target;
    event.target.value = checked;
    if(onChangeHandler)
      onChangeHandler(event);
  }

  return(
    <div class="form-check">
      <input class="form-check-input" type="checkbox" name={name} id="checkDefault" onChange={onCheck}/>
        <label class="form-check-label" for="checkDefault">
          {label}
        </label>
    </div>
    
  );
}