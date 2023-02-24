import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained" color="secondary">
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        sx={{
          bgcolor: "secondary.main",
        }}
      >
        Add new Post
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component={"p"}>
        It uses h1 style but p tag
      </Typography>
      <BlueButton>My Button1</BlueButton>
      <BlueButton>My Button2</BlueButton>
    </div>
  );
}

export default App;
