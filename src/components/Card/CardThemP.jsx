import {
  SCardThemePOrange,
  SCardThemePGreen,
  SCardThemePPurple,
} from "./Card.styled";

const CardThemeP = ({ topic }) => {
  const topics = ["Web Design", "Research", "Copywriting"];
  if (topic == topics[0]) return <SCardThemePOrange>{topic}</SCardThemePOrange>;
  if (topic == topics[1]) return <SCardThemePGreen>{topic}</SCardThemePGreen>;
  if (topic == topics[2]) return <SCardThemePPurple>{topic}</SCardThemePPurple>;
};

export default CardThemeP;
