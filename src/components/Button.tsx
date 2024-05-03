import styled from "styled-components";

export const Button = styled.button`
  width: 86px;
  height: 30px;
  box-sizing: border-box;
  border: 2px solid rgb(78, 113, 254);
  background-color: rgb(245, 245, 245);
  border-radius: 5px;
  color: rgb(78, 113, 254);
  font-family: Inter;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0%;
  cursor: pointer;
  transition: all.3s ;

  &:hover {
    background-color: rgb(78, 113, 254);
    color: rgb(245, 245, 245);
  }
`