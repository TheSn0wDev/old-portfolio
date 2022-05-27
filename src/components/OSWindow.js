import * as React from 'react'
import OSWindowHeader from "./OSWindowHeader";
import OSWindowNavbar from "./OSWindowNavbar";
import Draggable from "react-draggable";

const OSWindow = (props) => {

    return (<Draggable handle={".OSWindowHeader"}>
        <div data-show={false} id={props.id} className={"OSWindow"} >
            <OSWindowHeader id={props.id} />
            <OSWindowNavbar title={props.title}>
                {props.navbar}
            </OSWindowNavbar>
            <div className={"OSWindowContent"}>
                {props.children}
            </div>
        </div>
    </Draggable>)
}

export default OSWindow
