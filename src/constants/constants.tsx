import React from "react";
import {BiLogoJava} from "react-icons/bi";
import {Javascript, NetworkCell} from "@mui/icons-material";
import {DiDatabase, DiGit, DiJira, DiMysql, DiNodejs, DiReact} from "react-icons/di";
import {SiExpress} from "react-icons/si";

const SKILLS: ({ name: string; icon: React.JSX.Element } | { name: string; icon: React.JSX.Element } | {
    name: string;
    icon: React.JSX.Element
} | { name: string; icon: React.JSX.Element } | { name: string; icon: React.JSX.Element } | {
    name: string;
    icon: React.JSX.Element
} | { name: string; icon: React.JSX.Element } | { name: string; icon: React.JSX.Element })[] = [
    {name: "Java", icon: <BiLogoJava/>},
    {name: "JavaScript", icon: <Javascript/>},
    {name: "React", icon: <DiReact/>},
    {name: "ExpressJS", icon: <SiExpress/>},
    {name: "Git", icon: <DiGit/>},
    {name: "Jira", icon: <DiJira/>},
    {name: "NodeJS", icon: <DiNodejs/>},
    {name: "MySql", icon: <DiMysql/>},
    {name: "Postgres", icon: <DiDatabase/>},
    {name: "MicroServices", icon: <NetworkCell/>}
]

const LANGUAGE = ["English", "German"]

export default {
    SKILLS, LANGUAGE
}
