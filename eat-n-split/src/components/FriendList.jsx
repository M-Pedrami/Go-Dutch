import Friend from "./Friend";
const FriendList = ({ friends, onSelect, selectedFriend }) => {
  return (
    <div>
      {friends.map((friend) => (
        <Friend onSelect={onSelect} selectedFriend={selectedFriend} friend={friend} key={friend.id} />
      ))}
    </div>
  );
};
export default FriendList;
