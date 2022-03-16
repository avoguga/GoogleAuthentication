import React, { useRef, useState } from "react";

import { Container, Content, InputSection, Input, Button } from "./styles";

const Chat: React.FC = () => {
  const inputRef: any = useRef();

  const [message, setMessage] = useState('');

  return (
    <Container>
      <Content>
        <div>
          <h3>Chat</h3>
        </div>
        <div>
            <p>{message}</p>
        </div>
        <InputSection>
          <Input ref={inputRef} placeholder="Message"/>
          <Button type="submit" onClick={() => setMessage(inputRef.current.value)}>
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
