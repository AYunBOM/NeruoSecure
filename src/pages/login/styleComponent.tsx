import { styled } from "styled-components";

export const Body = styled.body`
  background-image: linear-gradient(to bottom, #101010, #002037);
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Theme = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Background = styled.img`
  pointer-events: none;
  width: 100vw;
  height: 99vh;
  filter: blur(13px);
`;

export const Content = styled.div`
  top: 45%;
  left: 30%;
  right: 30%;
  width: 80vh;
  transform: translate(0%, -50%);
  position: absolute;
  color: #ffffff;
`;

export const Welcome = styled.p`
  font-size: 8vh;
  font-weight: bold;
  margin-top: 10vh;
`;

export const Title = styled.p`
  font-size: 7vh;
  margin-top: -6vh;
  font-weight: bold;
`;

export const SubTitle = styled.p`
  font-weight: lighter;
  letter-spacing: 0.025vh;
  margin-top: -3vh;
  font-size: 3.3vh;
`;

export const Target = styled.div`
  margin-top: 7vh;
  margin-bottom: 2vh;
`;

export const INPUT = styled.div`
  padding-bottom: 3vh;
`;

export const ID = styled.input`
  width: 79vh;
  height: 10vh;
  font-size: 4vh;
  color: #ffffff;
  background-color: #00ff0000;
  border: #00ff0000;
  border-bottom: 0.3vh solid #9d9d9d;
  transition: color 0.2s ease;
  &:focus {
    outline: none;
    border: #00ff0000;
    background-color: #000e18;
  }
  &:required {
    padding-left: 3vh;
    width: 79vh;
  }
  &::placeholder {
    align-items: center;
    font-size: 4vh;
    color: #9d9d9d;
    font-weight: bold;
    transition: color 0.2s ease;
  }
  &:hover::placeholder {
    color: #ffffff;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const PW = styled.input`
  width: 79vh;
  height: 10vh;
  font-size: 4vh;
  color: #ffffff;
  background-color: #00ff0000;
  border: #00ff0000;
  border-bottom: 0.3vh solid #9d9d9d;
  transition: color 0.2s ease;
  &:focus {
    outline: none;
    border: #00ff0000;
    background-color: #000e18;
  }
  &:required {
    padding-left: 3vh;
    width: 79vh;
  }
  &::placeholder {
    align-items: center;
    font-size: 4vh;
    color: #9d9d9d;
    font-weight: bold;
    transition: color 0.2s ease;
  }
  &:hover::placeholder {
    color: #ffffff;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const Btn = styled.button`
  width: 79vh;
  height: 8vh;
  margin-top: 3.5vh;
  color: #ffffff;
  font-size: 3.8vh;
  font-weight: bold;
  letter-spacing: 0.3vh;
  border: #00ff0000;
  border-radius: 2vh;
  background-color: #15496e;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #236c9f;
    transition: background-color 0.2s ease;
  }
  &:focus {
    background-color: #236c9f;
  }
`;
