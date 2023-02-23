import React, { useEffect, useMemo, useState } from "react";
import Card from "../../components/card/card";
import "./index.css";
import { v4 as uuid } from "uuid";
import colors from "../../components/colors/colors";
import Search from "../../components/search/Search";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
  const onDelete = (id) => {
    const newNotes = [...notes];
    const index = newNotes.findIndex((note) => note.id === id);
    if (index === -1) return;
    newNotes.splice(index, 1);
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

  const onSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredNotes = useMemo(() => {
    if (searchInput.length > 0) {
      return notes.filter((note) => {
        return note.text.match(searchInput);
      });
    } else {
      return notes;
    }
  }, [searchInput, notes]);

  return (
    <div className="home-container">
      <div className="card-add-side">
        <p className="home-brand">Notes</p>
        <button onClick={createNote} className="button-plus">
          <img
            className="plus-element"
            alt="plus element"
            src="/assets/emoji/plus.png"
          />
        </button>
      </div>
      <div className="notes-side">
        <Search onSearch={onSearch} />
        {/*  <h1 className="home-title">Notes</h1> */}
        <div className="card-wrapper">
          {filteredNotes.map((note) => {
            return (
              <Card
                key={note.id}
                id={note.id}
                onEditText={onChange}
                onDelete={onDelete}
                color={note.color}
                text={note.text}
                date={note.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
