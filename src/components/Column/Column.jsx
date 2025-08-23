import Card from "../Card/Card";
import {
  SMainColumn,
  SColumnTitle,
  SColumnTitleP,
  SCards,
} from "./Column.styled";

const Column = ({ titleStatus, children }) => {
  return (
    <SMainColumn>
      <SColumnTitle>
        <SColumnTitleP>{titleStatus}</SColumnTitleP>
      </SColumnTitle>
      <SCards>{children}</SCards>
    </SMainColumn>
  );
};

export default Column;
