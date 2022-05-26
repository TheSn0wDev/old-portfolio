import * as React from 'react'
import NavbarIcon from "./NavbarIcon";
import {faAddressCard, faDiagramProject, faAddressBook, faBookSkull} from "@fortawesome/free-solid-svg-icons";

const OSNavbar = () => {
    return (<div id={"OSNavbar"}>
        <NavbarIcon icon={faAddressCard} title={"About me"} toOpen={"about"}/>
        <NavbarIcon icon={faDiagramProject} title={"Projects"} toOpen={"projects"}/>
        <NavbarIcon icon={faBookSkull} title={"Experiences"} toOpen={"experiences"}/>
        <NavbarIcon icon={faAddressBook} title={"Contact me"} toOpen={"contact"}/>
    </div>);
}

export default OSNavbar;
