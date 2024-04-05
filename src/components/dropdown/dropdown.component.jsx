
const Dropdown = ({ args, selectTitle, onChange }) => {
  return (
    <select className="form-select" aria-label="Default select example" onChange={onChange}>
      { selectTitle && 
        <option value={null}>{selectTitle}</option>
      }
      {
        args.map((arg) => (
            <option  key={arg.id} value={arg.id}>{arg.name}</option>
        ))
      }
    </select>
  );
};

export default Dropdown;