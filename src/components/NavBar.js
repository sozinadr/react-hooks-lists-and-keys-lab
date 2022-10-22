import React from "react";

function NavBar() {
    const links = ["home", "about", "projects"];

    return ( <
        nav > {
            links.map((linkitem) => {
                return ( <
                    a key = { linkitem }
                    href = { "#" + linkitem } > { linkitem } <
                    /a>
                );
            })
        } <
        /nav>
    );
}

export default NavBar;