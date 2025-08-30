import React from "react";
function Footer() {
    const year = new Date().getFullYear();
    return (React.createElement("footer", null,
        React.createElement("p", null,
            "Copyright \u24D2 ",
            year)));
}
export default Footer;
