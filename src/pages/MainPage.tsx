import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function MainPage() {
  return (
    <>
      <h1>Hello world</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Link to={"/signin"}>
        <p>Sign In brah</p>
      </Link>
    </>
  );
}

export default MainPage;
