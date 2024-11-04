import Button from "./Button";

const Friend = ({ friend, onSelect, selectedFriend }) => {
  console.log(selectedFriend, friend.name);
  return (
    <li className={selectedFriend?.name === friend.name ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}{" "}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}{" "}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">You and {friend.name} are even</p>
      )}
      <Button onClick={() => onSelect(friend)}>
        {selectedFriend?.name === friend.name ? "close" : "select"}
      </Button>
    </li>
  );
};
export default Friend;
