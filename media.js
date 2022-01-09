const deviceSizes = {
  mobile: 390,
  pc: 1080,
};

const mediaQuery = {
  mobile: `screen and (max-width: ${deviceSizes.pc - 1}px)`,
};

export default mediaQuery;
