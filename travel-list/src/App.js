import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    quantity: 1,
    description: "",
    packed: false,
    id: Date.now(),
  });
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <Logo />
      <Form formData={formData} setFormData={setFormData} items={items} setItems={setItems} />
      <PackingList list={items} setItems = {setItems} />
      <Stats />
    </div>
  );
}

export default App;
