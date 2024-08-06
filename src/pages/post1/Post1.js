import React from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "./Wrapper.js";
import * as s from "./styleComponent.tsx";
import Background from "../img/background.png";
import logo from "../img/logo.png";

function Main() {
  const location = useLocation();
  const info = {...location.state};
  
  console.log(info);

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
                value={info.title}
                disabled
              />
            </s.Target>
            <s.Target>
              <s.Detail
                class="title"
                placeholder="Enter Content"
                id="post_content"
                name="post_content"
                rows="4"
                value={info.content}
                disabled
              ></s.Detail>
            </s.Target>
          </s.Content>
        </s.Container>
    </Wrapper>
  );
}

export default Main;
