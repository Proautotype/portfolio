import {Card, CardHeader, Chip, Stack} from "@mui/material";
import {GoProject} from "react-icons/go";
import {Games, WebAsset} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import {blue, red} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import styled from "@emotion/styled";

const Projects = () => {
  return <ProjectsWrapper className={"content-area "} marginTop={2}>
      <Chip icon={<GoProject/>}
            style={{width:'fit-content'}}
            label={"Projects"}
            color={"secondary"} variant={"outlined"}/>
      <Stack
          className={"details"}
          marginTop={1}
          style={{border:'none '}}
          direction={"row"}
          gap={2}
      >
          <Stack >
              <Chip icon={<WebAsset/>}
                    style={{width:'fit-content'}}
                    label={"Web App"}
                    color={"secondary"} variant={"filled"}/>

              <Stack className={"display"} marginTop={3} gap={1}>
                  <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                          avatar={
                              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                  M
                              </Avatar>
                          }
                          action={
                              <IconButton aria-label="settings">
                                  <MoreVertIcon />
                              </IconButton>
                          }
                          title="Meeting Booking App"
                          subheader="September 14, 2016"
                      />
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                          avatar={
                              <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                  D
                              </Avatar>
                          }
                          action={
                              <IconButton aria-label="settings">
                                  <MoreVertIcon />
                              </IconButton>
                          }
                          title="Data Migration"
                          subheader="September 14, 2016"
                      />
                  </Card>
              </Stack>
          </Stack>

          <Stack>
              <Chip icon={<Games/>}
                    style={{width:'fit-content'}}
                    label={"Games"}
                    color={"secondary"} variant={"filled"}/>

          </Stack>
      </Stack>
  </ProjectsWrapper>
}

export default Projects;

const ProjectsWrapper = styled(Stack)(({theme})=>({
    //@ts-ignore
    [theme.breakpoints.down("md")]:{
        ".details":{
           justifyContent:"space-between",
            "& .display":{
               width: "100%",
                flexDirection:"row"
            }
        }
    },
    //@ts-ignore
    [theme.breakpoints.down("sm")]:{
        ".details":{
            flexDirection:"column"
        }
    }
}))