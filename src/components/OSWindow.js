import * as React from 'react'
import OSWindowHeader from "./OSWindowHeader";

const OSWindow = (props) => {
    return (<div data-show={false} id={props.id} className={"OSWindow"}>
            <OSWindowHeader  id={props.id} />
        </div>)
}

export default OSWindow
