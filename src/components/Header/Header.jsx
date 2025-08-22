import { useState } from "react";
import UserInfoModal from "../UserInfoModal/UserInfoModal";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

const SHeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

const Header = () => {
  // useState - для состояния открытия - закрытия
  const [isOpenModal, setIsOpenModal] = useState(false);

  // функция для клика по ссылке
  const handleUserClick = (event) => {
    event.preventDefault(); // отменяем переход по ссылке
    setIsOpenModal(!isOpenModal);
  };

  return (
    <SHeader>
      <header className="header">
        <div className="container">
          <SHeaderBlock>
            <div className="header__logo _show _light">
              <a href="" target="_self">
                <img src="/logo.png" alt="logo" />
              </a>
            </div>
            <div className="header__logo _dark">
              <a href="" target="_self">
                <img src="/logo_dark.png" alt="logo" />
              </a>
            </div>
            <nav className="header__nav">
              <button className="header__btn-main-new _hover01" id="btnMainNew">
                <a href="#popNewCard">Создать новую задачу</a>
              </button>
              <a
                href="#"
                className="header__user _hover02"
                onClick={handleUserClick}
              >
                Иван Ванов
              </a>

              <UserInfoModal isOpen={isOpenModal} />
            </nav>
          </SHeaderBlock>
        </div>
      </header>
    </SHeader>
  );
};

export default Header;
