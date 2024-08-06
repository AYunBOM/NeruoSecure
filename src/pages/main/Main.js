import Part from "../../component/Particle.js";
import shieldsvg from "./shield.svg";
import * as s from "./styleComponent.tsx";

function Main() {
  return (
    <div>
      <s.Wrapper>
        <Part></Part>
      </s.Wrapper>
      <s.Wrapper>
        <s.SVG src={shieldsvg}></s.SVG>
        <s.title>Flask Post Validation</s.title>
      </s.Wrapper>
      <s.Wrapper>
        <s.Letsgo to="/login">Let's Start</s.Letsgo>
      </s.Wrapper>
    </div>
  );
}

export default Main;
