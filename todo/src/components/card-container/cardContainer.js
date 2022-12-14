import React from "react";
import Card from "../Card/Card";

const CardContainer = ({ data, onDeleteItem, ongetdata }) => {
  return (
    <div className="card-container">
      {data.map((element) => {
        return (
          <Card
            ongetdata={ongetdata}
            onDeleteItem={onDeleteItem}
            key={element.id}
            id={element.id}
            title={element.title}
            description={element.description}
            date={element.date}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
