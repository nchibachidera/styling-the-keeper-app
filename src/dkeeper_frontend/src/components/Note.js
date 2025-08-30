import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }
    return (React.createElement("div", { className: "note" },
        React.createElement("h1", null, props.title),
        React.createElement("p", null, props.content),
        React.createElement("button", { onClick: handleClick },
            React.createElement(DeleteIcon, null))));
}
export default Note;
