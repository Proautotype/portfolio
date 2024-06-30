import React, {useState} from 'react';
import './assets/app.style.scss';
import {
    Button,
    Chip, Drawer,
    Stack,
    Typography
} from "@mui/material";
import {
    Email,
    GitHub,
    Info,
    Javascript,
    Key,
    Keyboard,
    LinkedIn,
    Phone,
    WhatsApp,
    Work,
    X
} from "@mui/icons-material";
import Banner from "./components/Banner";
import {FaJava, FaJira, FaNode, FaReact} from "react-icons/fa";
import {BiLogoSpringBoot} from "react-icons/bi";
import constants from "./constants/constants";
import {BannerItems} from "./constants/componentsConstants";
import {GiNestBirds, GiOpenBook} from "react-icons/gi";
import {SiFramework7, SiSpringboot, SiTypescript} from "react-icons/si";
import ProfileGitHub from "./components/Profile.GitHub";
import Projects from "./components/Projects";
import DeveloperInfo from "./components/DeveloperInfo";
import SkillSet from "./components/SkillSet";
import styled from "@emotion/styled";

function App() {
    const [profile, setProfile] = useState<string>()

    const [projects, setProjects]
        = useState<"web" | "games">("web");
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);


    return (
        <div className="App">
            <AppContentWrapper className={"app-content"}>
                <DeveloperInfo mail={"winstyngyen@gmail.com"} phone={'+233543184000'}/>
                <Stack className={"content-area summary"} marginTop={20}>
                    <Chip icon={<Info/>}
                          style={{width: 'fit-content'}}
                          label={"Summary"}
                          color={"info"} variant={"outlined"}/>
                    <Stack className={"details"} marginTop={1} style={{border: 'none '}}>
                        <Typography>
                            Highly skilled Full Stack Software Developer with a strong proficiency in web
                            development utilizing &emsp;
                            <Chip icon={<FaReact/>} label={"React"} variant={"outlined"} color={"primary"}
                                  size={"small"}/>
                            <Chip icon={<FaNode/>} label={"Node.js"} variant={"outlined"} color={"success"}
                                  style={{margin: "0px 2px"}} size={"small"}/>
                            <Chip icon={<BiLogoSpringBoot/>} label={"Spring Boot"} variant={"outlined"}
                                  color={"success"}
                                  size={"small"}/>.
                            Experienced in agile methodologies, data management, and ensuring seamless
                            integration across the entire software development lifecycle. Possesses excellent
                            communication
                            skills and a
                            proven track record of effectively collaborating with cross-functional teams to deliver
                            high-quality
                            solutions</Typography>
                    </Stack>
                </Stack>
                <SkillSet/>
                <Projects/>
            </AppContentWrapper>

            <DrawerWrapper open={openDrawer}>
                <Stack  className={"content"} style={{background: 'rgba(36,122,255,0.11)'}} padding={2}>
                    <Stack justifyContent={"center"} alignItems={"center"} marginBottom={5}>
                        {profile === "GITHUB"
                            ? <GitHub fontSize={"large"}/> : profile === "LINKED-IN" ?
                                <LinkedIn fontSize={"large"}/> : <X fontSize={"large"}/>}
                        <Typography>{profile}</Typography>
                    </Stack>

                    {profile === "GITHUB" && <ProfileGitHub/>}

                </Stack>
                <Button onClick={() => setOpenDrawer(false)}>Close</Button>
            </DrawerWrapper>

            <Banner types={BannerItems.map((bannerAct) => {
                return {
                    ...bannerAct, action: () => {
                        setProfile(bannerAct.name);
                        setOpenDrawer(true);
                    }
                }
            })} bannerSpeed={25}/>
        </div>
    );
}

const AppContentWrapper
    = styled(Stack)(({theme}) => ({
    height: "100%",
    width: "50vw",
    // padding: "10px 10px 50px",
    //@ts-ignore
    [theme.breakpoints.down("md")]: {
        padding: 10,
        width: "95vw",
        ".summary": {
            marginTop: "18% !important",
        }
    },
    //@ts-ignore
    [theme.breakpoints.down("sm")]: {
        // background: "blue",
        width: "95vw",
        ".summary": {
            marginTop: "60% !important",
        }
    }
}));

const DrawerWrapper = styled(Drawer)(({theme})=> ({
    "& .content":{
        background:"aqua",
        width: "50vw"
    },
    //@ts-ignore
    [theme.breakpoints.down("lg")]: {
        "& .content":{
            background:"aqua",
            width: "50vw"
        }
    },
    //@ts-ignore
    [theme.breakpoints.down("md")]: {
        "& .content":{
            background:"aqua",
            width: "50vw"
        }
    },
    //@ts-ignore
    [theme.breakpoints.down("sm")]: {
        "& .content":{
            background:"lime",
            width: "80vw"
        }
    }
}))

export default App;
