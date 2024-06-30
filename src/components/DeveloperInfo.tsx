import {Stack, Typography} from "@mui/material";
import React from "react";
import Contact from "./Contact";
import styled from "@emotion/styled";

const DeveloperInfo = ({mail, phone}: { mail: string, phone?: string }) => {


    return <DeveloperInfoWrapper className={"developer-info"}>
        <Typography className={"name"}>Ampomah Winston</Typography>
        <Typography className={"title"} fontSize={30} fontWeight={600}>Full Stack Developer</Typography>
        <Stack className={"infos"} direction={"row"} gap={2}>
            <Contact phone={phone || "+233543184000"} type={"email"} email={"winstyngyen@gmail.com"}/>
            <Contact phone={phone || "+233543184000"} type={"whatsapp"} message={"Hello"}/>
            <Contact phone={phone || "+233543184000"} type={"phone"}/>
        </Stack>
    </DeveloperInfoWrapper>
}

const DeveloperInfoWrapper
    = styled(Stack)(({theme}) => ({
    width: "max-content",
    '& .name': {
        fontSize: 35, fontWeight: 800
    },
    // @ts-ignore
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        "& .name": {
            background: "linear-gradient(to left, red, blue)",

        },
        '& .infos': {
            flexDirection: "column",
            gap: 1
        }
    }
}));

export default DeveloperInfo;