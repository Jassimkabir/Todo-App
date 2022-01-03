import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleInput = (event) => {
    event.preventDefault();
    if (input !== "") {
      setItems([...items, { id: Date.now(), text: input, status: false }]);
    }
    setInput("");
  };

  const deleteItem = (key) => {
    setItems(items.filter((obj, index) => index !== key));
  };

  return (
    <div className="todo-container">
      <h1>TODO LIST</h1>

      <h2>Whoop, it's {days[new Date().getDay()]}</h2>

      <div className="input-section">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          placeholder="Add item..."
        />
        <div className="add">
          <i onClick={handleInput} className="fas fa-plus" />
        </div>
      </div>
      <ul>
        {items.map((obj, index) => {
          return (
            <li className="list" key={index}>
              <div className="checkbox">
                <input
                  key={index}
                  type="checkbox"
                  name="checkbox"
                  checked={obj.status}
                  onChange={(event) => {
                    console.log(event.target.checked);
                    console.log(obj);
                    setItems(
                      items.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = event.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                />
              </div>
              {obj.text}
              <div className="delete">
                <i
                  onClick={() => deleteItem(index)}
                  className="fas fa-trash"
                ></i>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="clearlist" onClick={() => setItems([])}>
        Clear List
      </button>
    </div>
  );
}

export default Todo;
