import { bp } from "../theme";

const respCss = (rule, values) => {
  let styles = "";

  if (!values) {
    return;
  }

  Object.keys(values).forEach((key) => {
    styles += `
      @media ${bp[key]} {
         ${rule}: ${values[key]}; 
       }
     `;
  });

  // eslint-disable-next-line consistent-return
  return styles;
};

export default respCss;
