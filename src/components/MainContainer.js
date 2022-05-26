import * as React from 'react'
import OSHeader from "./OSHeader";
import OSNavbar from "./OSNavbar";
import OSWindow from "./OSWindow";

const MainContainer = () => {
    return (<>
        <OSHeader />
        <h1 id={"backgroundTitle"}>ClementOS</h1>
        <OSNavbar />
        <OSWindow id={"about"}/>
        <OSWindow id={"projects"}/>
        <OSWindow id={"experiences"}/>
        <OSWindow id={"contact"}/>
    </>);
}

export default MainContainer;
