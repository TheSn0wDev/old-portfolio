import * as React from 'react'
import OSHeader from "./OSHeader";
import OSNavbar from "./OSNavbar";
import OSWindow from "./OSWindow";
import NavbarCategory from "./NavbarCategory";
import NavbarLink from "./NavbarLink";
import OSTab from "./OSTab";

const MainContainer = () => {
    return (<>
        <OSHeader />
        <h1 id={"backgroundTitle"}>ClementOS</h1>
        <OSNavbar />
        <OSWindow id={"about"} navbar={<>
            <NavbarCategory title={"Main"}/>
            <NavbarLink title={"Studies"} toOpen={"about"} active={"true"} window={"about"}/>
            <NavbarLink title={"Studies"} toOpen={"about1"} active={"false"} window={"about"}/>
            <NavbarLink title={"Studies"} toOpen={"about2"} active={"false"} window={"about"}/>
        </>}>
            <OSTab id={"tab-about"} title={"About"}>
                test
            </OSTab>
            <OSTab id={"tab-about1"} title={"About"}>
                test1
            </OSTab>
            <OSTab id={"tab-about2"} title={"About"}>
                test2
            </OSTab>
        </OSWindow>
        <OSWindow id={"projects"} navbar={<>
            <NavbarCategory title={"Main"}/>
            <NavbarLink title={"Studies"} toOpen={"about"} active={"true"} window={"projects"}/>
            <NavbarLink title={"Studies"} toOpen={"about"} active={"false"} window={"projects"}/>
            <NavbarLink title={"Studies"} toOpen={"about"} active={"false"} window={"projects"}/>
        </>}/>
        <OSWindow id={"experiences"}/>
        <OSWindow id={"contact"}/>
    </>);
}

export default MainContainer;
