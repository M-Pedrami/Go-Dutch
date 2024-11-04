const Item = ({ item, setItems }) => {
  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  console.log(item);
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggle(item.id)}
      />
      <span style={{ textDecoration: item.packed && "line-through" }}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
};
export default Item;
