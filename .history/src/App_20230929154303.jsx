import { useState } from "react";
import "./styles.css";

export default function App(){
  const [newItem, setNewItem] = useState("")
  //setNewItem("hello")

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
  <>
    <form onSubmit={handleSubmit} className="new-item-form" action="">
      <div className="form-row"> 
        <label htmlFor="item">New Items</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)} 
        type="text" id="item"/>
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox"/>
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
  </>);
}
//
