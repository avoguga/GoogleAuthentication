import React, { useRef } from "react";

import { Container, Content, InputSection, Input, Button } from "./styles";

const Chat: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <h3>Chat</h3>
        </div>
        <InputSection>
          <Input />
          <Button onClick={() => console.log("aaa")}>
            <img
              src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/45/000000/external-send-contact-flatart-icons-lineal-color-flatarticons.png"
              alt=""
            />
          </Button>
        </InputSection>
      </Content>
    </Container>
  );
};

export default Chat;
