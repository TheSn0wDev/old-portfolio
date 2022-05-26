import * as React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavbarIcon = (props) => {
    const openPopup = () => {
        const el = document.getElementById(props.toOpen);

        el.dataset.show = "true";
    }

    return (<div className={"NavbarIcon"} onClick={() => openPopup()}>
        <div className={"NavbarIconTitle"}>
            <p>{props.title}</p>
            <div className={"TitleCarpet"}></div>
        </div>
        <FontAwesomeIcon icon={props.icon}/>
    </div>);
}

export default NavbarIcon;
