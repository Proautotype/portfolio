import { Chip, Stack} from "@mui/material";
import {RiGitRepositoryFill} from "react-icons/ri";

const ProfileGitHub = () => {
  return <Stack>
      <Stack direction={"column"} gap={5}>
          <Chip icon={<RiGitRepositoryFill/>} variant={"filled"} label={"Repositories"} color={"secondary"}/>
      </Stack>
  </Stack>
}

export default ProfileGitHub;