import React, { useEffect, useRef, useState } from "react";
import "./card.css";

const Card = (props) => {
  const [editText, setEditText] = useState(props.text);
  const [isEdit, setIsEdit] = useState(false);
  const textAreaRef = useRef();

  //sent editText and id to index.jsx every time the editText changes
  useEffect(() => {
    const { onEditText } = props;

    if (onEditText === undefined || props.text === editText) return;
    onEditText(props.id, editText);
  }, [editText]);

  useEffect(() => {
    if (isEdit && textAreaRef.current !== undefined) {
      textAreaRef.current.focus();
    }
  }, [isEdit, textAreaRef]);

  return (
    <div className="card-container" style={{ backgroundColor: props.color }}>
      <div className="cross-container">
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
          className="cross-button"
          style={{ backgroundColor: props.color }}
        >
          <img
            className="cross-img"
            src="/assets/emoji/cross-hover.png"
            alt="cross logo"
          />
        </button>
      </div>
      <div className="card-text-container">
        {/*   {true ? ( */}
        <textarea
          onChange={(e) => setEditText(e.target.value)}
          className="card-text edit"
          ref={textAreaRef}
          onFocus={(e) =>
            e.currentTarget.setSelectionRange(
              e.currentTarget.value.length,
              e.currentTarget.value.length
            )
          }
          onBlur={() => {
            setIsEdit(false);
          }}
          style={{ backgroundColor: props.color }}
          type="text"
          value={editText || ""}
          placeholder="create new note here"
        />
        {/*  ) : (
          <p
            className="card-text label"
            style={{ backgroundColor: props.color }}
          >
            {editText}
          </p>
       )} */}
      </div>
      <div className="card-bottom">
        <div className="card-date">
          <p>{props.date}</p>
        </div>
        <div className="edit-container">
          <button
            onClick={() => {
              setIsEdit(true);
            }}
            className="edit-button"
            style={{ backgroundColor: props.color }}
          >
            <img
              className="edit-img"
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
