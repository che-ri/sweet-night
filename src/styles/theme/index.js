const calRem = (size) => `${size / 16}rem`;

const color = {
  main_green: "#81B622",
  main_black: "#000",
  main_gray: "#dae1e6",
  light_green: "#ECF87F",
  dark_green: "#3D550C",
  medium_green: "#59981A",
};

const fontSize = {
  12: calRem(12),
  14: calRem(14),
  18: calRem(18),
  20: calRem(20),
  30: calRem(30),
  40: calRem(40),

  //모바일 폰트
  11: calRem(11),
  16: calRem(16),
  22: calRem(22),
  28: calRem(28),
};

const fontWeight = {
  extraBold: 800,
  semiBold: 600,
  regular: 400,
};

const theme = {
  fontSize,
  fontWeight,
  color,
  calRem,
};

export default theme;
