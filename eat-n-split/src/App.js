import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAfddriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

export default function App() {
  const [AddFriendOpen, setAddFriendOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleSelect = (friend) => {
    if (selectedFriend?.id === friend.id) setSelectedFriend(null);
    else setSelectedFriend(friend);
    setAddFriendOpen(false);
  };

  const [friendsList, setFriendsList] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);

  const handleList = (friend) => {
    setFriendsList((prev) => [...prev, friend]);
    setAddFriendOpen(false);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friendsList}
          onSelect={handleSelect}
          selectedFriend={selectedFriend}
        />
        {AddFriendOpen && (
          <FormAddFriend list={friendsList} handleList={handleList} />
        )}
        <Button onClick={() => setAddFriendOpen((open) => !open)}>
          {AddFriendOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          friendsList={friendsList}
          setFriendsList={setFriendsList}
          setSelectedFriend={setSelectedFriend}
        />
      )}
    </div>
  );
}
