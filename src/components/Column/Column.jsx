import Card from "../Card/Card";

const Column = ({ titleStatus, children }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{titleStatus}</p>
      </div>
      <div className="cards">{children}</div>
    </div>
  );
};

export default Column;
