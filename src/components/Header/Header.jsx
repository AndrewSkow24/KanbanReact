import { useState } from "react";
import UserInfoModal from "../UserInfoModal/UserInfoModal";
import {
  SHeader,
  SHeaderBlock,
  SHeaderNav,
  SHeaderLogo,
} from "./Header.styled";
import { SContainer } from "../Container/Container.styled";

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
      <SContainer>
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
          <SHeaderNav>
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
          </SHeaderNav>
        </SHeaderBlock>
      </SContainer>
    </SHeader>
  );
};

export default Header;
