import Item from "./Item";
const PackingList = ({ list, setItems }) => {
  console.log(list);
  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <Item item={item} key={item.id} list={list} setItems={setItems} />
        ))}
      </ul>
    </div>
  );
};
export default PackingList;
