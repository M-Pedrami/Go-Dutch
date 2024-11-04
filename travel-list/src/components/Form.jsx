const Form = ({ formData, setFormData, setItems }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prev) => [...prev, formData]);
    setFormData({ quantity: 1, description: "",packed: false, id: Date.now() });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select onChange={handleChange} name="quantity" value={formData.quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        required
        name="description"
        type="text"
        placeholder="Item..."
        onChange={handleChange}
        value={formData.description}
      />
      <button>Add</button>
    </form>
  );
};
export default Form;
