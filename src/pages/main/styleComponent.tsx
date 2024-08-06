import styled from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const boxFade = keyframes`
  0% {
    opacity: 0.9;
  }
  20% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;
export const SVG = styled.img`
  height: 40%;
  opacity: 1;
  position: absolute;
  animation: ${boxFade} 5s 1s infinite;
`;
export const Wrapper = styled.div`
  z-index: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  padding: 0;
  border: none;
  margin: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const circle = styled.div`
  width: 30vh;
  height: 2vh;
  border-radius: 50%;
  margin-bottom: -40vh;
  background-color: #282828;
  box-shadow: 10px 5px 5px black;
`;
export const title = styled.h1`
  @font-face {
    font-family: "WAGURITTF";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/2403@1.0/WAGURITTF.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "WAGURITTF";
  font-size: 250%;
  position: relative;
  bottom: -30vh;
  color: white;
`;
export const Letsgo = styled(Link)`
  @font-face {
    font-family: "WAGURITTF";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/2403@1.0/WAGURITTF.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  position: relative;
  font-family: "WAGURITTF";
  font-size: 200%;
  bottom: -38vh;
  text-decoration: none;
  color: white;
  &:after {
    content: "";
    position: absolute;
    height: 15%;
    width: 0;
    background-color: #273547;
    left: 0;
    bottom: -10%;
    transition: all ease 0.5s;
  }
  &:hover::after {
    content: "";
    position: absolute;
    height: 15%;
    width: 101.5%;
    background-color: white;
    left: 0;
    bottom: -10%;
    transition: all ease 0.5s;
  }
`;
