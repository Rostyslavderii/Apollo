import { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ...*,
::after,
::before {
  box-sizing: border-box;
}
html {
  -moz-tab-size: 4;
  tab-size: 4;
}
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  /* position: relative; */
    margin: 0;
  font-family: 'loto', sans-serif, 'syne', sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';

}
ul, ol{
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
h1, h2, h3, h4, h5, p{
  margin-top: 0;
  margin-bottom: 0;
}
table {
  text-indent: 0;
  border-color: inherit;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button{
  cursor: pointer;
  border: none;
}
`;

// export const Section = styled.section`
//   min-height: 97vh;
//   padding-top: 42px;
//   padding-bottom: 100px;

//   color: ${p => p.theme.colors.heading};

//   @media screen and (min-width: 768px) {
//     padding-top: 88px;
//   }
//   @media screen and (min-width: 1280px) {
//     padding-top: 60px;
//   }
// `;
