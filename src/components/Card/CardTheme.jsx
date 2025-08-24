import {
  SCardThemeOrange,
  SCardThemeGreen,
  SCardThemePurple,
} from "./Card.styled";

const CardTheme = ({ topic, children }) => {
  const topics = ["Web Design", "Research", "Copywriting"];
  if (topic == topics[0]) {
    return <SCardThemeOrange>{children}</SCardThemeOrange>;
  }
  if (topic == topics[1]) return <SCardThemeGreen>{children}</SCardThemeGreen>;
  if (topic == topics[2])
    return <SCardThemePurple>{children}</SCardThemePurple>;
};

export default CardTheme;
