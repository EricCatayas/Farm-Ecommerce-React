
const Dropdown = ({ args, selectTitle, name, onChange }) => {
  return (
    <select className="form-select" aria-label={selectTitle} name={name} onChange={onChange}>
      { selectTitle && 
        <option key="default" value={""}>{selectTitle}</option>
      }
      { args && args.length &&
        args.map((arg, index) => (
            <option  key={index} value={arg.id}>{arg.name}</option>
        ))
      }
    </select>
  );
};

export default Dropdown;