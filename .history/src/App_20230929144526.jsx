import "./styles.css"

export default function App(){
  return <form className="new-item-form" action="">
    <div className="form-row"> 
      <label htmlFor="item">New Items</label>
      <input type="text" id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>;
}
//
