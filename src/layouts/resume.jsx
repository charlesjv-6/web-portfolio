import React from "react";
import { yearsSince } from "../scripts/util";

import Skill from "../components/skill";

import JavaScript from "../assets/icons/JavaScript.svg";
import Java from "../assets/icons/Java.svg";
import Python from "../assets/icons/Python.svg";
import PHP from "../assets/icons/PHP.svg";
import CSS from "../assets/icons/CSS.svg";
import HTML from "../assets/icons/HTML.svg";
import CSharp from "../assets/icons/CSharp.svg";
import Mongodb from "../assets/icons/Mongodb.svg";
import Gradle from "../assets/icons/Gradle.svg";
import SqlServer from "../assets/icons/SqlServer.svg";
import Unity from "../assets/icons/Unity.svg";
import Dotnet from "../assets/icons/Dotnet.svg";
import Node from "../assets/icons/Node.svg";
import ReactJS from "../assets/icons/React.svg";
import Mysql from "../assets/icons/Mysql.svg";
import Sqlite from "../assets/icons/Sqlite.svg";

export default function Resume(){
    return (
        <section className="resume">
            <header>
                <div className="pf-pic">
                    <img className="max-size" src="https://imgv3.fotor.com/images/side/text-to-illustration-girl-in-Fotor-ai-art-creator.jpg" alt="pfp" />
                </div>
                <div className="pf-info">
                    <span>VENDICACION, CHARLES JOSEPH</span>
                    <span>SOFTWARE ENGINEER</span>
                </div>
            </header>
            <div className="resume-content">
                <section className="skills-container">
                    <div className="skills">
                        <Skill skillName="JavaScript" skillImage={JavaScript} dateAquired="2022"/>
                        <Skill skillName="Java" skillImage={Java} dateAquired="2017"/>
                        <Skill skillName="CSharp" skillImage={CSharp} dateAquired="2020"/>
                        <Skill skillName="Python" skillImage={Python} dateAquired="2021"/>
                        <Skill skillName="PHP" skillImage={PHP} dateAquired="2023"/>
                        <Skill skillName="CSS" skillImage={CSS} dateAquired="2022"/>
                        <Skill skillName="HTML" skillImage={HTML} dateAquired="2022"/>
                    </div>
                </section>
                <section className="skills-container">
                    <div className="skills">
                        <Skill skillName="ReactJS" skillImage={ReactJS} dateAquired="2022"/>
                        <Skill skillName="NodeJS" skillImage={Node} dateAquired="2022"/>
                        <Skill skillName="Dotnet" skillImage={Dotnet} dateAquired="2023"/>
                        <Skill skillName="Unity" skillImage={Unity} dateAquired="2022"/>
                        <Skill skillName="Windows Form" dateAquired="2020"/>
                        <Skill skillName="Java Gradle" skillImage={Gradle} dateAquired="2018"/>
                    </div>
                </section>
                <section className="skills-container">
                    <div className="skills">
                        <Skill skillName="MSSQL" skillImage={SqlServer} dateAquired="2020"/>
                        <Skill skillName="MYSQL" skillImage={Mysql} dateAquired="2019"/>
                        <Skill skillName="MongoDB" skillImage={Mongodb} dateAquired="2022"/>
                        <Skill skillName="SQLite"skillImage={Sqlite}  dateAquired="2022"/>
                    </div>
                </section>
                <section className="experience">

                </section>
                <section className="education">

                </section>
            </div>
            <footer>
                Click this <a href="">link</a> to download a copy of my resume.
            </footer>
        </section>
    );
}