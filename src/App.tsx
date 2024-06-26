import React, {useState} from 'react';
import './assets/app.style.scss';
import logo from './assets/A1.svg';
import {
    Button,
    Card, CardContent, CardHeader,
    Chip, Drawer, Fab,
    Stack,
    Typography
} from "@mui/material";
import {Email, GitHub, Info, Javascript, Key, Keyboard, LinkedIn, Phone, WhatsApp, Work, X} from "@mui/icons-material";
import Banner from "./components/Banner";
import {FaJava, FaJira, FaNode, FaReact} from "react-icons/fa";
import { BiLogoSpringBoot} from "react-icons/bi";
import constants from "./constants/constants";
import {BannerItems} from "./constants/componentsConstants";
import {GiNestBirds, GiOpenBook} from "react-icons/gi";
import {SiFramework7, SiSpringboot, SiTypescript} from "react-icons/si";
import ProfileGitHub from "./components/Profile.GitHub";

function App() {
    const [profile, setProfile] = useState<string>()
    const [infoSet, setInfoSet]
        = useState<"skills" | "languages">("skills");
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);



    return (
        <div className="App">
            <Stack className={"app-content"} >
                <header>
                    {/*<img alt={"profile-logo"} src={logo} width={"20"}/>*/}
                    {/*<div className={"divider"}/>*/}
                    <div className={"details"}>
                        <h1 className={"name"}>Ampomah Winston</h1>
                        <p className={"title"}>Full Stack Developer</p>
                        <div style={{display: "flex", gap: 5}}>
                            <Chip icon={<Email/>}
                                  label={"winstyngyen@gmail.com"}
                                  variant="outlined" color={"primary"}/>
                            <Chip icon={<Phone/>}
                                  label={"+233 502840667"}
                                  variant="outlined" color={"primary"}/>
                            <Chip icon={<WhatsApp/>}
                                  label={"+233 543184000"}
                                  variant="outlined" color={"success"}/>
                        </div>
                    </div>
                </header>

                <Stack className={"content-area summary"} marginTop={5}>
                    <Chip icon={<Info/>}
                          style={{width:'fit-content'}}
                          label={"Summary"}
                          color={"info"} variant={"outlined"}/>
                    <Stack className={"details"} marginTop={1} style={{border:'none '}} >
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

                <Stack gap={1} flexDirection={"row"} alignItems={"flex-start"}
                       style={{padding: "5px 1px", width: "50%"}} marginTop={3}>
                    <Chip icon={<Key/>}
                          onMouseDown={() => setInfoSet("skills")}
                          label={"Skills"}
                          color={"success"} variant={"outlined"} style={{cursor: "pointer"}}/>
                    <Chip icon={<GiOpenBook/>}
                          onMouseDown={() => setInfoSet("languages")}
                          label={"Language"}
                          color={"warning"} variant={"outlined"} style={{cursor: "pointer"}}/>
                </Stack>
                <div className={"content-area summary"}>
                    {infoSet === "skills" &&
                        <Stack className={"details"} flexDirection={"row"} gap={5} width={"fit-content"}
                        style={{border:"none"}}>

                            <Stack flexDirection={"column"} gap={1}>
                                <Chip icon={<Keyboard/>}
                                      label={"Programming Languages"}
                                      color={"success"} style={{cursor: "pointer"}}/>

                                <Stack gap={1}>
                                    <Chip icon={<FaJava/>} color={'info'} variant={'outlined'} label={"Java"} title={"Java"}/>
                                    <Chip icon={<Javascript/>} color={'info'} variant={'outlined'} label={"JavaScript"} title={"JavaScript"}/>
                                    <Chip icon={<SiTypescript/>} color={'info'} variant={'outlined'} label={"TypeScript"} title={"TypeScript"}/>
                                </Stack>
                            </Stack>

                            <Stack flexDirection={"column"} gap={1}>
                                <Chip icon={<SiFramework7/>}
                                      label={"Frameworks"}
                                      color={"success"} style={{cursor: "pointer"}}/>

                                <Stack gap={1}>
                                    <Chip icon={<FaReact/>} color={'info'} variant={'outlined'} label={"React"} title={"React"}/>
                                    <Chip icon={<SiSpringboot/>} color={'info'} variant={'outlined'} label={"SpringBoot"} title={"SpringBoot"}/>
                                    <Chip icon={<GiNestBirds/>} color={'info'} variant={'outlined'} label={"NestJS"} title={"NestJS"}/>
                                </Stack>
                            </Stack>

                            <Stack flexDirection={"column"} gap={1}>
                                <Chip icon={<Work/>}
                                      label={"Productivity"}
                                      color={"success"} style={{cursor: "pointer"}}/>

                                <Stack gap={1}>
                                    <Chip icon={<FaJira/>} color={'info'} variant={'outlined'} label={"Jira"} title={"Jira"}/>
                                    <Chip icon={<GitHub/>} color={'info'} variant={'outlined'} label={"GitHub"} title={"GitHub"}/>
                                </Stack>
                            </Stack>

                        </Stack>
                    }

                    {infoSet === "languages" &&
                        <Stack className={"details"} flexDirection={"row"} gap={1} width={"fit-content"} style={{border:'none '}}>
                            {constants.LANGUAGE.map((value) => <Chip label={value} color={"warning"}/>)}
                        </Stack>}

                </div>

            </Stack >
            <Drawer open={openDrawer} >
               <Stack width={"20vw"} height={"80%"} style={{background: 'rgba(36,122,255,0.11)'}} padding={2}>
                   <Stack justifyContent={"center"} alignItems={"center"} marginBottom={5}>
                       {profile === "GITHUB"
                           ? <GitHub fontSize={"large"}/> : profile === "LINKED-IN" ?
                               <LinkedIn fontSize={"large"}/> : <X fontSize={"large"}/>}
                       <Typography>{profile}</Typography>
                   </Stack>

                   {profile === "GITHUB" && <ProfileGitHub/>}

               </Stack>
                <Button onClick={()=> setOpenDrawer(false)}>Close</Button>
            </Drawer>
            <Banner types={BannerItems.map((bannerAct)=> {
                return {...bannerAct, action: ()=> {
                        setProfile(bannerAct.name);
                        setOpenDrawer(true);
                    }}
            })} bannerSpeed={25}/>
        </div>
    );
}

export default App;
