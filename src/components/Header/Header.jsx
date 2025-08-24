import { useState } from "react";
import UserInfoModal from "../UserInfoModal/UserInfoModal";
import {
  SHeader,
  SHeaderBlock,
  SHeaderNav,
  SHeaderLogo,
  SHeaderLogoDark,
  SHeaderUserHover02,
  SHeaderBtnMainNew,
  SHeaderBtnMainNewHover01,
  SHeaderBtnMainNewA,
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
          <a href="" target="_self">
            <SHeaderLogo src="/logo.png" alt="logo" />
          </a>

          <a href="" target="_self">
            <SHeaderLogoDark src="/logo_dark.png" alt="logo" />
          </a>
          <SHeaderNav>
            <SHeaderBtnMainNewHover01 id="btnMainNew">
              <SHeaderBtnMainNewA href="#popNewCard">
                Создать новую задачу
              </SHeaderBtnMainNewA>
            </SHeaderBtnMainNewHover01>
            <SHeaderUserHover02 href="#" onClick={handleUserClick}>
              Иван Ванов
            </SHeaderUserHover02>

            <UserInfoModal isOpen={isOpenModal} />
          </SHeaderNav>
        </SHeaderBlock>
      </SContainer>
    </SHeader>
  );
};

export default Header;
