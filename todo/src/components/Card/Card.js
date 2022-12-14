import React from "react";

const Card = ({ id, title, date, description, onDeleteItem, ongetdata }) => {
  function deleteItemHandler(e) {
    fetch(`http://localhost:3000/toDoItems/${e.target.id}`, {
      method: "DELETE",
    });
    onDeleteItem(e.target.id);
  }
  function editItemHandler(e) {
    ongetdata(e.target.id);
  }
  return (
    <div className="card">
      <h3>{title}</h3>
      <h4>{date}</h4>
      <p className="description">{description}</p>
      <div className="button-container-card">
        <button onClick={editItemHandler} id={id}>
          Edit item
        </button>
        <button onClick={deleteItemHandler} id={id}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
