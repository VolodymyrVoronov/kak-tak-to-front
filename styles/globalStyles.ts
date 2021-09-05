import { createGlobalStyle } from "styled-components";

import { colors } from "./colorPalette";

const GlobalStyles = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1;

  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote {

    &:before,
    &:after {
      content: '';
      content: none;
    }
  }

  q {

    &:before,
    &:after {
      content: '';
      content: none;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    box-sizing: border-box;
    
    margin: 0;
    padding: 0;

    font-family: "Montserrat", "Arial", sans-serif;
    color: ${colors.primaryLightBlack};
    letter-spacing: 1px;

    background-size: cover;
    background-repeat: no-repeat;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    user-select: none;
  }

  /* ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: '';
  }

  ::-webkit-scrollbar-thumb {
    background: '';
  }

  ::-webkit-scrollbar-thumb:hover {
    background: '';
  } */
`;

export default GlobalStyles;
