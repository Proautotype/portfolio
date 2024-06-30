import {Chip, Stack} from "@mui/material";
import {GitHub, Javascript, Key, Keyboard, Work} from "@mui/icons-material";
import {GiNestBirds, GiOpenBook} from "react-icons/gi";
import {FaJava, FaJira, FaReact} from "react-icons/fa";
import {SiFramework7, SiSpringboot, SiTypescript} from "react-icons/si";
import constants from "../constants/constants";
import React, {useState} from "react";
import styled from "@emotion/styled";
import {red} from "@mui/material/colors";

const SkillSet = () => {

    const [infoSet, setInfoSet]
        = useState<"skills" | "languages">("skills");

    return <SkillSetWrapper>
        <Stack gap={1} flexDirection={"row"} alignItems={"flex-start"}
                marginTop={2}>
            <Chip icon={<Key/>}
                  onMouseDown={() => setInfoSet("skills")}
                  label={"Skills"}
                  color={"success"} variant={"outlined"} style={{cursor: "pointer"}}/>
            <Chip icon={<GiOpenBook/>}
                  onMouseDown={() => setInfoSet("languages")}
                  label={"Language"}
                  color={"warning"} variant={"outlined"} style={{cursor: "pointer"}}/>
        </Stack>

        {infoSet === "skills" &&
            <Stack className={"details"} style={{border: "none"}} direction={"column"}>

                <Stack flexDirection={"column"} gap={1}>
                    <Chip icon={<Keyboard/>}
                          label={"Programming Languages"}
                          color={"success"} style={{cursor: "pointer"}}/>

                    <Stack gap={1}>
                        <Chip icon={<FaJava/>} color={'info'} variant={'outlined'} label={"Java"} title={"Java"}/>
                        <Chip icon={<Javascript/>} color={'info'} variant={'outlined'} label={"JavaScript"}
                              title={"JavaScript"}/>
                        <Chip icon={<SiTypescript/>} color={'info'} variant={'outlined'} label={"TypeScript"}
                              title={"TypeScript"}/>
                    </Stack>
                </Stack>

                <Stack flexDirection={"column"} gap={1}>
                    <Chip icon={<SiFramework7/>}
                          label={"Frameworks"}
                          color={"success"} style={{cursor: "pointer"}}/>

                    <Stack gap={1}>
                        <Chip icon={<FaReact/>} color={'info'} variant={'outlined'} label={"React"}
                              title={"React"}/>
                        <Chip icon={<SiSpringboot/>} color={'info'} variant={'outlined'} label={"SpringBoot"}
                              title={"SpringBoot"}/>
                        <Chip icon={<GiNestBirds/>} color={'info'} variant={'outlined'} label={"NestJS"}
                              title={"NestJS"}/>
                    </Stack>
                </Stack>

                <Stack flexDirection={"column"} gap={1}>
                    <Chip icon={<Work/>}
                          label={"Productivity"}
                          color={"success"} style={{cursor: "pointer"}}/>

                    <Stack gap={1}>
                        <Chip icon={<FaJira/>} color={'info'} variant={'outlined'} label={"Jira"} title={"Jira"}/>
                        <Chip icon={<GitHub/>} color={'info'} variant={'outlined'} label={"GitHub"}
                              title={"GitHub"}/>
                    </Stack>
                </Stack>

            </Stack>
        }

        {infoSet === "languages" &&
            <Stack className={"details"} flexDirection={"row"} gap={1} width={"fit-content"}
                   style={{border: 'none '}}>
                {constants.LANGUAGE.map((value) => <Chip label={value} variant={"outlined"} color={"warning"}/>)}
            </Stack>}
    </SkillSetWrapper>
}

const SkillSetWrapper
    = styled(Stack)(({theme}) => ({
    gap: 5,
    "& .details": {
        flexDirection: "row",
    },
    //@ts-ignore
    [theme.breakpoints.down("lg")]: {
        "& .details": {
            flexDirection: "row",
        }
    },
    //@ts-ignore
    [theme.breakpoints.down("md")]: {
        "& .details": {
            flexDirection: "row",
            gap: 10
        }
    },
    //@ts-ignore
    [theme.breakpoints.down("sm")]: {
        "& .details": {
            flexDirection: "column",
        }
    }

}))

export default SkillSet;