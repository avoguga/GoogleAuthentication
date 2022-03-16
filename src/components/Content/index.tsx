import Chat from "../Chat";
import { Container } from "./styles";

export function Content() {
  const profile: any = localStorage.getItem("profilePic");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <Container>
      <Chat />
    </Container>
  );
}

export default Content;
