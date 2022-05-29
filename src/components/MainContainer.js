import * as React from 'react'
import OSHeader from "./OSHeader";
import OSNavbar from "./OSNavbar";
import OSWindow from "./OSWindow";
import NavbarCategory from "./NavbarCategory";
import NavbarLink from "./NavbarLink";
import OSTab from "./OSTab";
import {
    faAlignLeft, faBrush,
    faCubes,
    faDatabase,
    faGraduationCap,
    faLaptopCode, faListCheck,
    faTerminal
} from "@fortawesome/free-solid-svg-icons";

const epitech = "{EPITECH}";

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
        </OSWindow>
        <OSWindow title={"Compétences"} id={"skills"} navbar={<>
            <NavbarCategory title={"Développement Web"}/>
            <NavbarLink title={"Front-end"} icon={faBrush} toOpen={"front-end"} active={"true"} window={"skills"} />
            <NavbarLink title={"Back-end"} icon={faCubes} toOpen={"back-end"} active={"false"} window={"skills"} />
            <NavbarLink title={"Base de données"} icon={faDatabase} toOpen={"database"} active={"false"} window={"skills"} />

            <NavbarCategory title={"Programmation"}/>
            <NavbarLink title={"Langages"} icon={faTerminal} toOpen={"languages"} active={"false"} window={"skills"} />

            <NavbarCategory title={"Autres"}/>
            <NavbarLink title={"IDE"} icon={faLaptopCode} toOpen={"ide"} active={"false"} window={"skills"} />
            <NavbarLink title={"Gestion de projet"} icon={faListCheck} toOpen={"project-management"} active={"false"} window={"skills"} />
        </>}>
            <OSTab id={"tab-front-end"} >
                <div className={"contentContainer"}>
                    <h5>HTML5</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "90%"}}/>
                    </div>

                    <h5>CSS3</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "90%"}}/>
                    </div>

                    <h5>JavaScript</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "75%"}}/>
                    </div>

                    <h5>SCSS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "70%"}}/>
                    </div>

                    <h5>Twig</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "70%"}}/>
                    </div>

                    <h5>React</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "65%"}}/>
                    </div>

                    <h5>Tailwind CSS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "60%"}}/>
                    </div>

                    <h5>Bootstrap</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "30%"}}/>
                    </div>

                    <h5>VueJS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "10%"}}/>
                    </div>
                </div>
            </OSTab>
            <OSTab id={"tab-back-end"} >
                <div className={"contentContainer"}>
                    <h5>Symfony</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "85%"}}/>
                    </div>

                    <h5>PHP</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "70%"}}/>
                    </div>

                    <h5>NodeJS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "60%"}}/>
                    </div>

                    <h5>ExpressJS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "60%"}}/>
                    </div>
                </div>
            </OSTab>
            <OSTab id={"tab-database"} >
                <div className={"contentContainer"}>
                    <h5>MySQL</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "90%"}}/>
                    </div>

                    <h5>MongoDB</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "40%"}}/>
                    </div>

                    <h5>PostgreSQL</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "10%"}}/>
                    </div>
                </div>
            </OSTab>
            <OSTab id={"tab-languages"} >
                <div className={"contentContainer"}>
                    <h5>C</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "95%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>C++</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "90%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>Lua</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "80%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>Python</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "70%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>Ruby</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "40%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>Haskell</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "20%"}}/>
                    </div>
                </div>
            </OSTab>
            <OSTab id={"tab-ide"} >
                <div className={"contentContainer"}>
                    <h5>CLion</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "90%"}}/>
                    </div>

                    <h5>Webstorm</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "90%"}}/>
                    </div>

                    <h5>Visual Studio Code</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "70%"}}/>
                    </div>

                    <h5>IntelliJ</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "65%"}}/>
                    </div>

                    <h5>PhpStorm</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "60%"}}/>
                    </div>

                    <h5>PyCharm</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>
                </div>
            </OSTab>
            <OSTab id={"tab-project-management"} >
                <div className={"contentContainer"}>
                    <h5>Git</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "90%"}}/>
                    </div>

                    <h5>GitHub</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "80%"}}/>
                    </div>

                    <h5>Trello</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "80%"}}/>
                    </div>

                    <h5>Confluence</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "40%"}}/>
                    </div>
                </div>
            </OSTab>
        </OSWindow>
        <OSWindow title={"Projets"} id={"projects"} navbar={<>
            <NavbarCategory title={"Web"}/>
            <NavbarLink title={"Ekalia"} toOpen={"ekalia"} active={"true"} window={"projects"}/>
            <NavbarLink title={"Skytale"} toOpen={"skytale"} active={"false"} window={"projects"}/>
            <NavbarLink title={"Next Citizens"} toOpen={"next-citizens"} active={"false"} window={"projects"}/>

            <NavbarCategory title={"Jeux vidéos"}/>
            <NavbarLink title={"My RPG"} toOpen={"my-rpg"} active={"false"} window={"projects"}/>
            <NavbarLink title={"Atlantique RP"} toOpen={"arp"} active={"false"} window={"projects"}/>
        </>} >
            <OSTab id={"tab-ekalia"} >
                <div className={"contentContainer"}>
                    <h5>Ekalia</h5>

                    <p>
                        <a href={"https://ekalia.fr/"} target={"_blank"}>Ekalia</a> est un groupe d'organisation d'événements.
                        Fondé en 2011, ils ont réalisé de nombreux événements et réuni des milliers de participants.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Ma mission</h5>

                    <p>
                        Ma mission chez Ekalia était de développer le site web de l'association.
                        Je faisais partie de l'équipe de développement front-end.
                        Nous avons utilisé le framework <b>Symfony</b> pour le back-end. J'ai donc dû codé le site web en <b>Twig</b>.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Durée de la mission</h5>

                    <p>
                        J'ai travaillé bénévolement chez Ekalia pendant 1 an et demi. J'ai d'abord travaillé sur une première version,
                        qui a été annulée pour passer à la version 2.0, reprenant une nouvelle architecture ainsi que la mise en place du
                        framework <b>Symfony</b>.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-skytale"} >
                <div className={"contentContainer"}>
                    <h5>Skytale</h5>

                    <p>
                        <a href={"https://skytale.fr/"} target={"_blank"}>Skytale</a> est une association loi 1901 fondée en février
                        2019 composée d'une quarantaine de membres passionnés aux compétences variées.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Ma mission</h5>

                    <p>
                        Ma mission chez Skytale était de développer le site web.
                        Comme chez Ekalia, je faisais partie de l'équipe de développement front-end.
                        Pour la première version, nous avons utilisé du HTML, du CSS et du Javascript vanilla.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Durée de la mission</h5>

                    <p>
                        J'ai travaillé bénévolement chez Skytale un peu moins d'1 an.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-next-citizens"} >
                <div className={"contentContainer"}>
                    <h5>Next Citizens Framework</h5>

                    <p>
                        <a href={"https://nextcitizens.net/"} target={"_blank"}>Next Citizens</a> est un framework open-source simple et optimisé
                        afin de développer des serveurs pour le jeu <b>FiveM</b>.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Ma mission</h5>

                    <p>
                        Ma mission chez Next Citizens est de développer le site vitrine du projet.
                        Je développe le site grâce au framework NextJS qui propose de très bonnes performances.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Durée de la mission</h5>

                    <p>
                        Je suis rentré dans l'équipe de Next Citizens en mai 2022 et suis toujours dans cette équipe.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-my-rpg"} >
                <div className={"contentContainer"}>
                    <h5>My RPG</h5>

                    <p>
                        My_RPG est un projet que l'on doit réaliser en fin de première année à <b>{epitech}</b>.
                        Le but est de créer un jeu complet, de type RPG, en utilisant la librairie <b>CSFML</b>.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Repo Github</h5>

                    <p>
                        Vous pouvez retrouvez le code du projet <a href={"https://github.com/Sn00ww/my_rpg"} target={"_blank"}>ici</a>.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Durée du projet</h5>

                    <p>
                        La durée du projet était d'environ 1 mois.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-arp"} >
                <div className={"contentContainer"}>
                    <h5>Atlantique RolePlay</h5>

                    <p>
                        <a href={"https://atlantique-rp.fr/"} target={"_blank"}>Atlantique RP</a> est un serveur <b>FiveM</b>, dont l'histoire se déroule sur les
                        îles d'Aix et d'Oléron.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Ma mission</h5>

                    <p>
                        En tant que leader du pôle développement, je dois gérer le développement du serveur, des sites web ainsi que de
                        toutes les infrastructures nécessaires.<br/>
                        En parrallèle, je suis chargé de développer les scripts FiveM en LUA, grâce au framework <b>QBCore</b>.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Durée de la mission</h5>

                    <p>
                        Je suis rentré dans l'équipe d'Atlantique RP en janvier 2022 et suis actuellement dedans.
                    </p>
                </div>
            </OSTab>
        </OSWindow>
        <OSWindow title={"Expériences"} id={"experiences"} navbar={<>
            <NavbarCategory title={"Jobs d'été"}/>
            <NavbarLink title={"Leclerc"} toOpen={"leclerc"} active={"true"} window={"experiences"}/>

            <NavbarCategory title={"Stages"}/>
            <NavbarLink title={"AZEOO"} toOpen={"azeoo"} active={"false"} window={"experiences"}/>
        </>}>
            <OSTab id={"tab-leclerc"} >
                <div className={"contentContainer"}>
                    <h5>Leclerc - Alès</h5>
                    <p>
                        En 2020, j'ai pu découvrir le monde professionnel pendant 1 mois et demi.
                    </p>
                </div>
                <div className={"contentContainer"}>
                    <h5>Travail réalisé</h5>
                    <p>
                        J'étais dans une petite équipe de 4 personnes, s'occupant de la mise en rayon des produits surgelés.
                        Il fallait être rigoureux afin que les stocks soient toujours surgelés, même sortis du congélateur.
                    </p>
                </div>
                <div className={"contentContainer"}>
                    <h5>Ma mission</h5>
                    <p>
                        J'étais dans une petite équipe de 4 personnes, s'occupant de la mise en rayon des produits surgelés.
                        Il fallait être rigoureux afin que les stocks soient toujours surgelés, même sortis du congélateur.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-azeoo"} >
                <div className={"contentContainer"}>
                    <h5>AZEOO - Montpellier, télétravail</h5>
                    <p>
                        En 2021, j'ai eu l'occasion de travailler pour la première fois dans une start-up innovante en tant que <b>développeur web</b>.
                    </p>
                </div>
                <div className={"contentContainer"}>
                    <h5>Ma mission</h5>
                    <p>
                        En tant que développeur web, j'étais charger de la refonte du site vitrine d'<b>AZEOO</b>.
                        J'ai utilisé le célèbre CMS <b>Wordpress</b> avec le plugin <b>Elementor</b>, afin de stylisé les pages.
                        J'ai aussi pu découvrir la suite <b>Atlassian</b>, notamment Confluence afin de créer des pages de documentation.
                    </p>
                </div>
                <div className={"contentContainer"}>
                    <h5>Durée de la mission</h5>
                    <p>
                        J'ai travaillé pendant 6 mois, de juillet à décembre 2021. Ce stage a été réalisé en fin de première année à <b>{epitech}</b>
                    </p>
                </div>
            </OSTab>
        </OSWindow>
        <OSWindow title={"Contact"} id={"contact"} navbar={<>
            <NavbarCategory title={"Réseaux sociaux"}/>
            <NavbarLink title={"Discord"} toOpen={"discord"} active={"true"} window={"contact"}/>
            <NavbarLink title={"LinkedIn"} toOpen={"linkedin"} active={"false"} window={"contact"}/>
            <NavbarLink title={"Twitter"} toOpen={"twitter"} active={"false"} window={"contact"}/>

            <NavbarCategory title={"Autres"}/>
            <NavbarLink title={"Perso"} toOpen={"perso"} active={"false"} window={"contact"}/>
        </>}>
            <OSTab id={"tab-discord"} >
                <div className={"contentContainer"}>
                    <h5>Mon serveur</h5>
                    <p>
                        Vous pouvez rejoindre mon serveur Discord à cette adresse <a href={"https://discord.gg/XqntKQ2JP7"} target={"_blank"}>https://discord.gg/XqntKQ2JP7</a>.
                    </p>
                </div>
                <div className={"contentContainer"}>
                    <h5>Compte Discord</h5>
                    <p>
                        Vous pouvez aussi m'ajouter sur Discord: <b>Sn0w#8638</b>
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-linkedin"} >
                <div className={"contentContainer"}>
                    <h5>Compte LinkedIn</h5>
                    <p>
                        Suivez-moi sur mon compte <a href={"https://www.linkedin.com/in/clement-ozor/"} target={"_blank"}>LinkedIn</a>.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-twitter"} >
                <div className={"contentContainer"}>
                    <h5>Compte Twitter</h5>
                    <p>
                        Suivez-moi sur mon compte <a href={"https://twitter.com/Sn0wDev__"} target={"_blank"}>Twitter</a>.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-perso"} >
                <div className={"contentContainer"}>
                    <h5>Adresse mail Pro</h5>
                    <p>
                        Si vous souhaitez me contacter par mail: <a href={"mailto:clement.ozor@protonmail.com"}>clement.ozor@protonmail.com</a>.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Adresse mail étudiante</h5>
                    <p>
                        Voici ma deuxième adresse mail: <a href={"mailto:clement.ozor@epitech.eu"}>clement.ozor@epitech.eu</a>.
                    </p>
                </div>
            </OSTab>
        </OSWindow>
    </>);
}

export default MainContainer;
