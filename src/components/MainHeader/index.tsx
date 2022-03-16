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
        <h1>É o Gugas!</h1>
      </FirstSectionDiv>
      <SecondSectionDiv />
      <ThirdSectionDiv>
        <GoogleButton onClick={signInWithGoogle}>Sign in with Google</GoogleButton>
      </ThirdSectionDiv>
    </Container>
  );
}

export default MainHeader;
