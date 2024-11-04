import Button from "./Button";
import { useState } from "react";

const FormSplitBill = ({ selectedFriend, setFriendsList, setSelectedFriend }) => {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [billPayer, setBillPayer] = useState("user");
  const friendExpense = Number(bill - userExpense);

  const newbalance = billPayer === "user" ? friendExpense : -friendExpense;

  const setBalance = (id) => {
    setFriendsList((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === id
          ? { ...friend, balance: friend.balance + newbalance }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => {
        e.preventDefault();
        setBalance(selectedFriend.id);
      }}
    >
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🙍Your expenses</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > bill ? userExpense : Number(e.target.value)
          )
        }
      />
      <label>😊{selectedFriend.name} expenses</label>
      <input type="text" disabled value={friendExpense} />
      <label>💰Who is paying the bill</label>
      <select value={billPayer} onChange={(e) => setBillPayer(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};
export default FormSplitBill;
