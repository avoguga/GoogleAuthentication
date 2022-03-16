import styled from "styled-components";

export const Container = styled.div`
  font-size: 18px;
  word-spacing: 0px;
  z-index: 100000;
`;

export const Content = styled.div`
  z-index: 100000;
  width: 800px;
  height: 500px;
  background-color: #999999;
  border-radius: 20px;
  border-style: solid;
  border-width: 5px;
  border-color: #f36e20;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  div:nth-child(1) {
    height: 50px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    width: 800px;
    background-color: #f36e20;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InputSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 790px;
  height: 40px;
`;

export const Input = styled.input`
  border-radius: 20px;
  border-style: solid;
  width: 740px;
  height: 40px;
  font-size: 20px;
  text-align: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 5px;
`;
