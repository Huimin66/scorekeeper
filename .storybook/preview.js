import GlobalStyles from "../src/GlobalStyles.js";
export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyles />
        <Story />
      </>
    );
  },
];
