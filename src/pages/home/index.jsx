import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import "./index.css";
import { v4 as uuid } from "uuid";
import colors from "../../components/colors/colors";

const Home = () => {
  const [notes, setNotes] = useState([]);

  //lood notes from localstorage(JSON.stringift's converting databaseNotes from objects to string)
  useEffect(() => {
    const databaseNotes = localStorage.getItem("notes");
    if (databaseNotes === null || databaseNotes === "") return;
    setNotes(JSON.parse(databaseNotes));
  }, []);

  //run ro save notes (function) on localstorage every time the notes changes(JSON.stringift's converting notes from string to array)
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    //deconstruction (Dispatch each item in the notes array and assign it to newNotes) because
    // When using setstate it needs to assign a new value in array and object except string , number , boolean to update
    const newNotes = [...notes];

    //add object and update object
    newNotes.push({
      id: uuid(),
      color: colors[Math.floor(Math.random() * colors.length)],
      text: "",
      date: new Date().toLocaleString(),
    });
    setNotes(newNotes);
  };

  //get updated text from card
  const onChange = (id, editText) => {
    const newNotes = [...notes];
    const note = newNotes.find((note) => note.id === id);
    if (note === undefined) return;
    note.text = editText;
    note.date = new Date().toLocaleString();

    setNotes(newNotes);
  };

  return (
    <div className="home-container">
      <div className="card-add-side">
        <p className="home-brand">Keeper</p>
        <button onClick={createNote} className="button-plus">
          <img
            className="plus-element"
            alt="plus element"
            src="/assets/emoji/plus.png"
          />
        </button>
      </div>
      <div className="notes-side">
        <div>
          <input
            className="search-input"
            type="search"
            placeholder="Search.."
          />
        </div>
        <h1 className="home-title">Notes</h1>
        <div className="card-wrapper">
          {notes.map((details) => {
            return (
              <Card
                key={details.id}
                id={details.id}
                onEditText={onChange}
                color={details.color}
                text={details.text}
                date={details.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
