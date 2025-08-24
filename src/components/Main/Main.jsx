import Column from "../Column/Column";
import Card from "../Card/Card";
import { cardList } from "../../data";
import { SContainer } from "../Container/Container.styled";
import { SMain, SMainBlock, SMainContent } from "../Main/Main.styled";

function Main() {
  const statusArr = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            {statusArr.map((elementStatus, index) => {
              return (
                <Column titleStatus={elementStatus} key={index}>
                  {cardList.map((element) => {
                    if (element.status == elementStatus) {
                      return (
                        <Card
                          key={element.id}
                          topic={element.topic}
                          title={element.title}
                          date={element.date}
                        />
                      );
                    }
                  })}
                </Column>
              );
            })}
          </SMainContent>
        </SMainBlock>
      </SContainer>
    </SMain>
  );
}

export default Main;
