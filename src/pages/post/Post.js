import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper.js";
import * as s from "./styleComponent.tsx";
import Background from "../img/background.png";
import logo from "../img/logo.png";
import axios from "axios";

function Main() {
  const navigate = useNavigate();
  const Check = async (e) => {
    const topDiv = e.currentTarget.parentElement.parentElement;
    const title = topDiv.children[2].children[0].value;
    const content = topDiv.children[3].children[0].value;

    const data = {'title':title, 'content':content};
    const url = "/api/board";
    const config = {"Content-Type": 'application/json'};

    await axios.post(url, data, config)
    .then(res=>{hackcheck(res.data.valid, title, content)})
}

  const hackcheck = (r, title, content) => {
    if(!r){
        alert("정상적인 문장입니다");
      }
    else{
        alert("해킹시도 감지");
        window.location.reload();   
    }

    navigate('/post1',{
      state:{
        'title' : `${title}`,
        'content' : `${content}`
      }
    });
  }

  return (
    <Wrapper>
        <s.Container>
          <s.Theme>
            <s.Background src={Background} />
            <s.Logo src={logo} />
          </s.Theme>
          <s.Content>
            <s.Title>Flask Post Validation</s.Title>
            <s.Subtitle>
              Enter what you want. And if you post it, will give
              <br /> you the answer.
            </s.Subtitle>
            <s.Target>
              <s.Subject
                class="title"
                placeholder="Enter Title"
                type="text"
                id="post_title"
                name="post_title"
                required
              />
            </s.Target>
            <s.Target>
              <s.Detail
                class="title"
                placeholder="Enter Content"
                id="post_content"
                name="post_content"
                rows="4"
                required
              ></s.Detail>
            </s.Target>
            <div>
              <s.Btn onClick={(e)=>{Check(e)}}>Post</s.Btn>
            </div>
          </s.Content>
        </s.Container>
    </Wrapper>
  );
}

export default Main;
