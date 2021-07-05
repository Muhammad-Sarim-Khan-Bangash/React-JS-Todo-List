import React, { useState, useEffect } from "react";
import Icon from "../images/todo-icon.png";

// Getting data from Local Storage
const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());

  const addItem = () => {
    if (!inputData) {
      alert("Please Enter Item...");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  // Delete Item Function
  const deleteItem = (id) => {
    const updatedItems = items.filter((v, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };

  // Remove All Fucntion
  const removeAll = () => {
    setItems([]);
  };

  // Setting data to Local Storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={Icon} alt="" />
            <figcaption>Add Your List Here ✌️ </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus-circle add-btn"
              title="Add Items"
              onClick={addItem}
            ></i>
          </div>

          <div className="showItems">
            {items.map((v, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{v}</h3>
                  <i
                    className="far fa-trash-alt add-btn "
                    title="Delete Item"
                    onClick={() => deleteItem(ind)}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
