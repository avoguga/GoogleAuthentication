import Chat from "../Chat";
import { Container, GoogleThings } from "./styles";

export function Content() {
  const profile: any = localStorage.getItem("profilePic");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <Container>
      <Chat />
      <GoogleThings>
        <h2>User info</h2>
        <img src={profile} alt="" />
        <h3>Username: {name}</h3>
      </GoogleThings>
    </Container>
  );
}

export default Content;
