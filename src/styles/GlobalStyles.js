import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Medium";
    src:url("../assets/fonts/Pretendard-Medium.woff") format("font-woff")
  }

  ${reset}
  * {box-sizing: border-box;}
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    font-family: "Pretendard-Medium"; // 폰트 수정
    line-height: 1;
    max-width: 400px;
    margin: auto;
    background-color: #f2f2f2;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    background: unset;
    border: unset;
    cursor: pointer;
    font-family: inherit;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    background: unset;
    border: unset;
    font: inherit;
    outline: none;
    &::placeholder {
      color: #dbdbdb; // 색 수정
    }
  }
  textarea {
    font: inherit;
    width: 100%;
    border: unset;
    background-color: unset;
    &::placeholder {
      color: #C4C4C4; // 색 수정
    }
  }
  img {
    display: block;
    vertical-align: top;
    width: 100%;
  }
.a11y-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
} 
`;
