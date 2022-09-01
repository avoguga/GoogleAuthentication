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
        <h1>É o CORTEEEZZZZ YHAAAA!</h1>
        <h2>C O R T E Z I N H O?</h2>
      </FirstSectionDiv>
      <SecondSectionDiv />
      <ThirdSectionDiv>
        <GoogleButton onClick={signInWithGoogle}>Sign in with Google</GoogleButton>
      </ThirdSectionDiv>
    </Container>
  );
}

export default MainHeader;
