import {
  Container,
  FirstSectionDiv,
  SecondSectionDiv,
  ThirdSectionDiv,
  GoogleButton
} from "./styles";

import { signInWithGoogle } from "../../Firebase";


export function MainHeader() {

  return (
    <Container>
      <FirstSectionDiv>
        <h3>Mommy! I'm FirstSectionDiv!</h3>
      </FirstSectionDiv>
      <SecondSectionDiv>
        <h3>Mommy! I'm SecondSectionDiv!</h3>
      </SecondSectionDiv>
      <ThirdSectionDiv>
        <GoogleButton onClick={signInWithGoogle}>Sign in with Google</GoogleButton>
      </ThirdSectionDiv>
    </Container>
  );
}

export default MainHeader;
