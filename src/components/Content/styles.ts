import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  background-color: whitesmoke;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoogleThings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #999999;
  border: 3px solid #f36e20;
  border-radius: 10px;

  position: relative;
  bottom: 160px;
  margin-left: 80px;
  img {
    border-radius: 50px;
  }
 
`;
