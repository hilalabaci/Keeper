import React, { useEffect, useState } from "react";
import "./card.css";

const Card = (props) => {
  const [editText, setEditText] = useState(props.text);
  const [isEdit, setIsEdit] = useState(false);

  //sent editText and id to index.jsx every time the editText changes
  useEffect(() => {
    const { onEditText } = props;

    if (onEditText === undefined || props.text === editText) return;
    onEditText(props.id, editText);
  }, [editText]);

  return (
    <div className="card-container" style={{ backgroundColor: props.color }}>
      <div className="card-text-container">
        {isEdit ? (
          <textarea
            onChange={(e) => setEditText(e.target.value)}
            className="card-text edit"
            onBlur={() => {
              setIsEdit(false);
            }}
            style={{ backgroundColor: props.color }}
            type="text"
            value={editText || ""}
          />
        ) : (
          <p
            className="card-text label"
            style={{ backgroundColor: props.color }}
          >
            {editText}
          </p>
        )}
      </div>
      <div className="card-bottom">
        <div className="card-date">
          <p>{props.date}</p>
        </div>
        <div>
          <button
            onClick={() => {
              setIsEdit(true);
            }}
            className="button-emoji"
            style={{ backgroundColor: props.color }}
          >
            <img
              className="editElement"
              src="/assets/emoji/editPencil.png"
              alt="Edit logo"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
