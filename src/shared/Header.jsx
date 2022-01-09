import React from "react";
import styled from "styled-components";
import { MENU_LIST } from "./constants";

export default function Header({ currentMenuIdx, setCurrentMenuIdx }) {
  const menu_temp = MENU_LIST.map((menu) => menu.ko);
  return (
    <HeaderWrapper>
      <Logo>달달한 밤</Logo>
      <MenuWrapper>
        {menu_temp.map((menu, idx) => (
          <Menu
            idx={idx}
            currentMenuIdx={currentMenuIdx}
            onClick={() => setCurrentMenuIdx(idx)}
          >
            <strong>{menu}</strong>
          </Menu>
        ))}
      </MenuWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.color.main_gray};
  padding: 0 20px;
`;

const Logo = styled.strong`
  font-size: 20px;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 7px;
`;

const Menu = styled.div`
  background: ${({ idx, currentMenuIdx, theme }) =>
    idx === currentMenuIdx ? theme.color.main_green : "white"};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.main_gray};
  border-bottom: none;
  padding: 10px 20px;
  border-radius: 10px 10px 0 0;
`;
