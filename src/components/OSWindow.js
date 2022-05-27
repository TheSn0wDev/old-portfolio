import * as React from 'react'
import OSWindowHeader from "./OSWindowHeader";
import OSWindowNavbar from "./OSWindowNavbar";

const OSWindow = (props) => {
    return (<div data-show={false} id={props.id} className={"OSWindow"}>
            <OSWindowHeader id={props.id} />
            <OSWindowNavbar title={"About"}>
                {props.navbar}
            </OSWindowNavbar>
            <div className={"OSWindowContent"}>
                {props.children}
            </div>
        </div>)
}

export default OSWindow
