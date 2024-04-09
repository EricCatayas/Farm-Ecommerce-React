
const Dropdown = ({ args, selectTitle, name, onChange }) => {
  return (
    <select className="form-select" aria-label={selectTitle} name={name} onChange={onChange}>
      { selectTitle && 
        <option value={null}>{selectTitle}</option>
      }
      { args && args.length &&
        args.map((arg) => (
            <option  key={arg.id} value={arg.id}>{arg.name}</option>
        ))
      }
    </select>
  );
};

export default Dropdown;