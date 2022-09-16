import styled from 'styled-components';
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
const navigate = useNavigate()
return (
    <Button> Logo</Button>
);
}

export default Header;

const Button = styled.button`
  background: palevioletred;
  font-size: 2em;
  border: 2px solid palevioletred;
  color: white;
  margin: 0.2em;
  padding: 0.25em 1em;
  position: absolute; left: 30px; top: 30px;
  `