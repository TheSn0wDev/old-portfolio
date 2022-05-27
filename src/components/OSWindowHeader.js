import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const OSWindowHeader = (props) => {
    const closePopup = () => {
        const el = document.getElementById(props.id);

        el.dataset.show = "false";
    }

    return (<div className={"OSWindowHeader"}>
        <FontAwesomeIcon onClick={closePopup} icon={faTimes} />
    </div>);
}

export default OSWindowHeader;
