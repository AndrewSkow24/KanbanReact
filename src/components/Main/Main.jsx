import Column from "../Column/Column";
import Card from "../Card/Card";
import { cardList } from "../../data";

function Main() {
  const statusArr = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <main class="main">
      <div class="container">
        <div class="main__block">
          <div class="main__content">
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
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
