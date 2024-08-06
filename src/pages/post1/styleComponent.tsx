import { styled } from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  left: 0;
  top: 0;
  background-image: linear-gradient(to bottom, #101010, #002037);
`;

export const Theme = styled.div`
  width: 50%;
  float: left;
  box-sizing: border-box;
`;

export const Background = styled.img`
  pointer-events: none;
  width: 65%;
  height: 99vh;
  position: absolute;
`;

export const Logo = styled.img`
  pointer-events: none;
  width: 48.4vh;
  height: 55.5vh;
  margin: 18.5vh;
  margin-left: 19.2vh;
  position: absolute;
`;

export const Content = styled.div`
  width: 60%;
  float: right;
  color: #ffffff;
  box-sizing: border-box;
  padding-left: 27vh;
`;

export const Title = styled.p`
  text-align: left;
  padding-top: 9vh;
  font-size: 7vh;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 3.3vh;
  text-align: left;
  letter-spacing: -0.03vh;
  margin-top: -3vh;
`;

export const Target = styled.div`
  padding-top: 3vh;
`;

export const Subject = styled.textarea`
  width: 675px;
  height: 85px;
  color: #ffffff;
  resize: none;
  font-size: 30px;
  border: #00ff0000;
  border-radius: 5px;
  padding: 1vw;
  letter-spacing: -0.5px;
  background-color: rgba(4, 18, 31);
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #000b13;
    transition: background-color 0.2s ease;
  }
  &:focus {
    outline: none;
    border: #00ff0000;
    background-color: #000b13;
  }
  &:required {
    width: 675px;
    padding-top: 20px;
    padding-left: 40px;
    font-weight: 900;
    font-family: sans-serif;
    letter-spacing: 0.2px;
  }
  &::placeholder {
    align-items: center;
    font-size: 35px;
    color: #ffffff;
    letter-spacing: -1px;
    font-weight: 900;
    font-family: sans-serif;
    letter-spacing: 0.2px;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const Detail = styled.textarea`
  width: 675px;
  height: 190px;
  background-color: rgba(4, 18, 31);
  color: #ffffff;
  resize: none;
  font-size: 30px;
  font-weight: bolder;
  border: #00ff0000;
  border-radius: 10px;
  padding: 1vw;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #000b13;
    transition: background-color 0.2s ease;
  }
  &::placeholder {
    color: #ffffff;
    font-size: 35px;
    font-weight: bolder;
    font-family: sans-serif;
    letter-spacing: 0.2px;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const Btn = styled.button`
  width: 675px;
  height: 60px;
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 60px;
  border: #00ff0000;
  border-radius: 10px;
  background-color: #15496e;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #3896bb;
    transition: background-color 0.2s ease;
  }
  &:focus {
    background-color: #3896bb;
  }
`;
