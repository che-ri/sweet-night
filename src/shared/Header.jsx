import React, { useState } from "react";
import styled from "styled-components";

const menu_list = ["카페", "맛집", "술집"];

export default function Header() {
  const [currentMenuIdx, setCurrentMenuIdx] = useState(0);
  return (
    <HeaderWrapper>
      {menu_list.map((menu, idx) => (
        <Menu
          idx={idx}
          currentMenuIdx={currentMenuIdx}
          onClick={() => setCurrentMenuIdx(idx)}
        >
          <strong>{menu}</strong>
        </Menu>
      ))}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
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
