import { Container } from "./styles";
import { signInWithGoogle } from "../../Firebase";

export function Content() {
  const profile: any = localStorage.getItem("profilePic");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <Container>
      <button onClick={signInWithGoogle}>Sign In</button>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <img src={profile} alt="" />
    </Container>
  );
}

export default Content;
