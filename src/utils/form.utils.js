export const handleChange = async (event, formFields, setFormFields) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]:value});
}