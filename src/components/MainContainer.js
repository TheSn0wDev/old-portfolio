import * as React from 'react'
import OSHeader from "./OSHeader";
import OSNavbar from "./OSNavbar";
import OSWindow from "./OSWindow";
import NavbarCategory from "./NavbarCategory";
import NavbarLink from "./NavbarLink";
import OSTab from "./OSTab";
import {faAlignLeft, faGraduationCap} from "@fortawesome/free-solid-svg-icons";

const qualifications = [
    {
        title: "Diplôme national du brevet - Collège Léo Larguier, La Grand-Combe",
        type: "Diplôme",
        date: "2017",
        mention: "Très bien"
    },
    {
        title: "Brevet d'Initiation Aéronautique - Lycée Jean-Baptiste-Dumas, Alès",
        type: "Diplôme",
        date: "2018",
        mention: "/"
    },
    {
        title: "Baccalauréat STI2D - Lycée Jean-Baptiste-Dumas, Alès",
        type: "Diplôme",
        date: "2020",
        mention: "Bien"
    },
    {
        title: "Expert en informatique - {EPITECH}",
        type: "Diplôme",
        date: "2025",
        mention: "/"
    }
];

const MainContainer = () => {
    let itemsQualifications = [];

    for (const qualification of qualifications.entries()) {
        itemsQualifications.push(
            <div className={"contentContainer"} key={qualification[0]}>
                <h5>{qualification[1].title}</h5>
                <span>Type: {qualification[1].type}</span>
                <span>Obtention: {qualification[1].date}</span>
                <span>Mention: {qualification[1].mention}</span>
            </div>
        );
    }


    return (<>
        <OSHeader />
        <h1 id={"backgroundTitle"}>ClémentOS</h1>
        <OSNavbar />
        <OSWindow title={"À propos"} id={"about"} navbar={<>
            <NavbarCategory title={"Général"}/>
            <NavbarLink title={"Présentation"} icon={faAlignLeft} toOpen={"presentation"} active={"true"} window={"about"} />
            <NavbarLink title={"Études"} icon={faGraduationCap} toOpen={"studies"} active={"false"} window={"about"} />
            {/*<NavbarLink title={"Studies"} toOpen={"about2"} active={"false"} window={"about"}/>*/}
        </>}>
            <OSTab id={"tab-presentation"} title={"About"}>
                <div className={"contentContainer"}>
                    <h5>Qui suis-je ?</h5>
                    <p>
                        Je suis un étudiant en informatique, passionné par la programmation. <br/><br/>
                        J'ai découvert la programmation à l'âge de 14 ans, et j'ai commencé à m'intéresser au développement web.<br/>
                        J'ai eu l'occasion de travailler sur plusieurs projets, et ai pu découvrir de nouvelles technologies.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-studies"} title={"About"}>
                {itemsQualifications}
            </OSTab>
            <OSTab id={"tab-about2"} title={"About"}>
                test2
            </OSTab>
        </OSWindow>

        <OSWindow title={"Compétences"} id={"skills"} navbar={<>
            <NavbarCategory title={"Main"}/>
            <NavbarLink title={"Studies"} toOpen={"about"} active={"true"} window={"projects"}/>
            <NavbarLink title={"Studies"} toOpen={"about"} active={"false"} window={"projects"}/>
            <NavbarLink title={"Studies"} toOpen={"about"} active={"false"} window={"projects"}/>
        </>}/>
        <OSWindow title={"Projets"} id={"projects"} navbar={<>
            <NavbarCategory title={"Main"}/>
            <NavbarLink title={"Studies"} toOpen={"about"} active={"true"} window={"projects"}/>
            <NavbarLink title={"Studies"} toOpen={"about"} active={"false"} window={"projects"}/>
            <NavbarLink title={"Studies"} toOpen={"about"} active={"false"} window={"projects"}/>
        </>}/>
        <OSWindow title={"Expériences"} id={"experiences"}/>
        <OSWindow title={"Contact"} id={"contact"}/>
    </>);
}

export default MainContainer;
