import styled from "styled-components";
import { colors } from "../../assets/styles/color";
import { RiShoppingCartLine, RiHeartLine, RiHeartFill } from "react-icons/ri";

export const Container = styled.div`
  width: 100%;
  max-width: 250px;
  margin: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;
export const CardDetails = styled.div`
  background: ${colors.secondaryTextColor};
  box-shadow: 0 0.813em 2.5em rgba(0 0 0 / 0.1);
  border-radius: 0.625em;
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  font-size: 0.8rem;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderIconLine = styled(RiHeartLine)`
  font-size: 2em;
  color: ${colors.customRed};
  cursor: pointer;
  transition: scale 0.2s ease;
  &:active {
    transform: scale(1.2);
  }
`;

export const HeaderIconFill = styled(RiHeartFill)`
  font-size: 2em;
  color: ${colors.customRed};
  cursor: pointer;
  transition: scale 0.2s ease;
  &:active {
    transform: scale(1.2);
  }
`;

export const CardPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.primaryBgColor};
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.primaryTextColor}
`;

export const CardImg = styled.img`
  max-width: 100%;
  width: 180px;
  max-height: 200px;
  object-fit: contain;
`;

export const CardInfo = styled.div`
  padding: 0 1em;
  margin-bottom: 1em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardButton = styled.button`
  background: ${colors.accent};
  color: ${colors.primaryBgColor};
  /* border: solid 1px ${colors.primaryBgColor}; */
  transition: background ease 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: none; */
  gap: 0.5em;
  padding: 0.5em 1em;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primaryBgColor};
    color: ${colors.secondaryTextColor};
  }
  &:active {
    transform: scale(0.96);
  }
  &:disabled {
    background: rgba(220, 220, 220, 1);
    cursor: not-allowed;
  }
`;

export const HeartIcon = styled(RiHeartLine)`
  font-size: 1.5em;
`;

export const CartIcon = styled(RiShoppingCartLine)`
  font-size: 1.5em;
`;
