import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    function expand() {
        setExpanded(true);
    }
    return (React.createElement("div", null,
        React.createElement("form", { className: "create-note" },
            isExpanded && (React.createElement("input", { name: "title", onChange: handleChange, value: note.title, placeholder: "Title" })),
            React.createElement("textarea", { name: "content", onClick: expand, onChange: handleChange, value: note.content, placeholder: "Take a note...", rows: isExpanded ? 3 : 1 }),
            React.createElement(Zoom, { in: isExpanded },
                React.createElement(Fab, { onClick: submitNote },
                    React.createElement(AddIcon, null))))));
}
export default CreateArea;
