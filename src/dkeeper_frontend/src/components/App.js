import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
    const [notes, setNotes] = useState([]);
    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }
    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(CreateArea, { onAdd: addNote }),
        notes.map((noteItem, index) => {
            return (React.createElement(Note, { key: index, id: index, title: noteItem.title, content: noteItem.content, onDelete: deleteNote }));
        }),
        React.createElement(Footer, null)));
}
export default App;
