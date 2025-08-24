import styled, { keyframes } from "styled-components";

const cardAnimation = keyframes`
0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`;

// cards__item
export const SCardsItem = styled.div`
  padding: 5px;
  animation-name: ${cardAnimation};
  animation-duration: 500ms;
  animation-timing-function: linear;
  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }
`;

// cards__card
export const SCardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

// card__group
export const SCardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// .card__theme {}
export const SCardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
`;

export const SCardThemeOrange = styled(SCardTheme)`
  background-color: #ffe4c2;
  color: #ff6d00;
`;

export const SCardThemeGreen = styled(SCardTheme)`
  background-color: #b4fdd1;
  color: #06b16e;
`;

export const SCardThemePurple = styled(SCardTheme)`
  background-color: #e9d4ff;
  color: #9a48f1;
`;

// .card__theme p
export const SCardThemeP = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const SCardThemePOrange = styled(SCardThemeP)`
  background-color: #ffe4c2;
  color: #ff6d00;
`;

export const SCardThemePGreen = styled(SCardThemeP)`
  background-color: #b4fdd1;
  color: #06b16e;
`;

export const SCardThemePPurple = styled(SCardThemeP)`
  background-color: #e9d4ff;
  color: #9a48f1;
`;

// card__btn
export const SCardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

// card__btn div
export const SCardBtnDiv = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

// . card__content

export const SCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

// .card__title
export const SCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

// .card__date
export const SCardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// .card__date svg {
export const SCardDateSvg = styled.div`
  width: 13px;
`;

// .card__date p {
export const SCardDateP = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`;
